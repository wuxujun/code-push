import * as assert from "assert";
import * as CodePush from "rest-definitions";
var nixt = require("nixt");
var tryJSON = require("try-json");

function validateApps(result: any): void {
    var apps: CodePush.App[] = tryJSON(result.stdout);
    assert(apps);
    var appNames: string[] = apps.map((app: CodePush.App) => app.name);
    console.log(appNames);
}

function getCommand(args: string) {
    return "code-push " + args + " --format json";
}

describe("CodePush", () => {
    describe("App commands", () => {
        it("app ls", (done: any) => {
            var command: string = getCommand("app ls");
            nixt()
                .expect(validateApps)
                .run(command)
                .end(done);
        });
    });
});