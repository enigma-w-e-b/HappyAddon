import { AddonOrchestrator } from "../../orchestrator/addon-orchestrator"
import { AddonOrchestratorInterface } from "../../orchestrator/interfaces/addon-orchestrator-interface"

export const makeAddonOrchestrator = (): AddonOrchestratorInterface => {
  const addonOrchestrator = new AddonOrchestrator()
  return addonOrchestrator
}
