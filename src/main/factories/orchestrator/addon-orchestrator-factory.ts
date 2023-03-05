import { AddonOrchestrator } from "../../orchestrator/addon-orchestrator"

export const makeAddonOrchestrator = () => {
    const addonOrchestrator = new AddonOrchestrator()
    return addonOrchestrator
}
