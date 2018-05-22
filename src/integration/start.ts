import * as path from "path";
import * as shell from "shelljs";

function start() {
    const cwd = path.resolve(__dirname, "../../", "server");
    shell.exec("mvn clean install -DskipTests=true", { cwd, async: false });
    shell.exec('mvn spring-boot:run -Drun.arguments="spring.profiles.active=test"', { cwd, async: true });
    import("../service");
}

start();
