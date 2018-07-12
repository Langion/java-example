import * as introspector from "@langion/introspector";
import { Langion } from "@langion/langion";
import * as prism from "@langion/prism";
import * as path from "path";
import * as shell from "shelljs";
import * as api from "../core/api";

type Origins = "servicea" | "serviceb" | "shared" | "common";
type Emission = "api" | "model" | "graphql" | "gql";

const out = path.resolve(__dirname, "../");
const server = path.resolve(__dirname, "../../server");

if (!shell.which("mvn")) {
    shell.echo("Sorry, this script requires maven");
    shell.exit(1);
}

const introspectionResult = introspect();
emit(introspectionResult);

function build(service: string) {
    const cwd = path.join(server, service);
    shell.exec(`mvn install -DskipTests=true`, { cwd });
    const json = path.join(cwd, `${service}.json`);
    const result = require(json) as Langion;
    return result;
}

function introspect() {
    const servicea = build("servicea");
    const serviceb = build("serviceb");

    const origins: Array<introspector.Origin<Origins>> = [
        {
            langion: servicea,
            name: "servicea",
        },
        {
            langion: serviceb,
            name: "serviceb",
        },
    ];

    const config: introspector.IntrospectorConfig<Origins> = {
        origins,
        parseJavaBeans: true,
        share: {
            name: "shared",
            origin: "shared",
        },
        getOriginFromModuleName: (p) => {
            const name = p.split(".")[2];

            if (name === ("servicea" as Origins) || name === ("serviceb" as Origins)) {
                return name;
            } else {
                return "common";
            }
        },
    };

    const introspection = introspector.Introspector.build(config);
    return introspection;
}

function emit(introspections: Record<Origins, introspector.Introspection<Origins>>) {
    const apiAbsolutePath = api.path;

    const config: prism.PrismConfig<Origins, Emission> = {
        introspections,
        outFolderAbsolutePath: path.resolve(out, "components"),
        emitters: [
            (args) => new prism.ApiraApi<Origins, Emission>("api", { ...args, apiAbsolutePath }),
            (args) => new prism.GraphqlDefinition<Origins, Emission>("gql", args),
            (args) => new prism.TypeScriptDefinition<Origins, Emission>("model", args),
            (args) => new prism.Graphql<Origins, Emission>("graphql", args),
        ],
        unknown: {
            name: "Common",
            origin: "common",
        },
        shared: {
            name: "Shared",
            origin: "shared",
        },
        tslint: {
            addTsIgnore: true,
            enabled: true,
            tslintConfigAbsolutePath: require.resolve("../../tslint.json"),
        },
    };

    const emitters = prism.Prism.emit(config);
    return emitters;
}
