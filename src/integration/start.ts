import * as path from "path";
import * as shell from "shelljs";

function start() {
    buildService("servicea");
    import("../service");
}

function buildService(name: string) {
    const cwd = path.resolve(__dirname, "../../", "server", name);
    shell.exec("mvn clean install -DskipTests=true", { cwd, async: false });
    shell.exec('mvn spring-boot:run -Drun.arguments="spring.profiles.active=test"', { cwd, async: true });
}

start();
