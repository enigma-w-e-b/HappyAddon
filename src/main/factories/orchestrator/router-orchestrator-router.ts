import { RouterOrchestrator } from "../../orchestrator/router-orchestrator"

export const makeRouterOrchestrator = () => {
  const routerOrchestrator = new RouterOrchestrator()
  return routerOrchestrator
}