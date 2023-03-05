import { WorldHelper } from "../infra/world/world-helper";
import { makeAddonOrchestrator } from "./factories/controllers/addon-orchestrator-factory";
WorldHelper.start()
    .then(() => {
    const addonOrchestrator = makeAddonOrchestrator();
    const addonTick = addonOrchestrator.tick();
});

//# sourceMappingURL=../../../_HappyDebug/main/main.js.map
