import * as introspector from "@langion/introspector";
import { Langion } from "@langion/langion";
import * as prism from "@langion/prism";
import * as path from "path";
import * as shell from "shelljs";
import * as api from "../core/api";

type Origins = "servicea" | "serviceb" | "shared" | "remain";
type Emission = "api" | "model" | "graphql" | "aggregator";

const out = path.resolve(__dirname, "../");
const server = path.resolve(__dirname, "../../server");

if (!shell.which("mvn")) {
    shell.echo("Sorry, this script requires maven");
    shell.exit(1);
}

introspect().then((i) => emit(i));

function build(service: string) {
    const cwd = path.join(server, service);
    shell.exec(`mvn install -DskipTests=true`, { cwd });
    const json = path.join(cwd, `${service}.json`);
    const result = require(json) as Langion;
    return result;
}

function introspect() {
    const origins: Array<introspector.Origin<Origins>> = [
        {
            getLangion: () => Promise.resolve(build("servicea")),
            name: "servicea",
        },
        {
            getLangion: () => Promise.resolve(build("serviceb")),
            name: "serviceb",
        },
    ];

    const config: introspector.IntrospectorConfig<Origins> = {
        origins,
        adapters: [new introspector.SwaggerAdapter(), new introspector.SpringAdapter()],
        getOriginFromModuleName: (p) => {
            const name = p.split(".")[2];

            if (name === ("servicea" as Origins) || name === ("serviceb" as Origins)) {
                return name;
            } else {
                return "remain";
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
            (args) => new prism.TypeScriptDefinition<Origins, Emission>("model", args),
            (args) => new prism.GraphqlDefinition<Origins, Emission>("graphql", args, {
                rawTypePath: '@langion/prism/dist/utils/raw',
            }),
            (args) => new prism.GraphqlAggregator<Origins, Emission>("aggregator", args, {
                resolveTypePath: '@langion/prism/dist/utils/resolveType',
            }),
        ],
        unknown: {
            name: "Remain",
            origin: "remain",
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
