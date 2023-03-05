import { world } from "@minecraft/server";
import { makeAddonOrchestrator } from "../../main/factories/controllers/addon-orchestrator-factory";

export const WorldHelper = {
  async start() {
    const addonOrchestrator = makeAddonOrchestrator()
    world.events.worldInitialize.subscribe(addonOrchestrator.init)
  },
};
