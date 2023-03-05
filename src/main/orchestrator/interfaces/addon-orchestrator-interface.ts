import { WorldInitializeEvent } from "@minecraft/server"

export interface AddonOrchestratorInterface {
    init: (registry: WorldInitializeEvent) => void
    tick: () => void
}
