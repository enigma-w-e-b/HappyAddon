import { system } from "@minecraft/server";
export class AddonOrchestrator {
    constructor() {
        this.tickIndex = 0;
        this.init = this.init.bind(this);
        this.tick = this.tick.bind(this);
    }
    init(registry) {
        this.registry = registry;
    }
    tick() {
        this.tickIndex++;
        console.warn(this.tickIndex);
        system.run(this.tick);
    }
}

//# sourceMappingURL=../../../../_HappyDebug/main/orchestrator/addon-orchestrator.js.map
