import { system, WorldInitializeEvent } from "@minecraft/server";
import { AddonOrchestratorInterface } from "./interfaces/addon-orchestrator-interface";

export class AddonOrchestrator implements AddonOrchestratorInterface {
  tickIndex: number = 0
  registry: WorldInitializeEvent | undefined

  constructor () {
    this.init = this.init.bind(this)
    this.tick = this.tick.bind(this)
  }

  init (registry: WorldInitializeEvent) {
    this.registry = registry
  }

  tick () {
    this.tickIndex++
    console.warn(this.tickIndex)
     system.run(this.tick)
  }
}
