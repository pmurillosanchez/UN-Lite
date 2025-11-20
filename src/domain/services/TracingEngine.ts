import type { Network } from "@/domain/entities/Network.js";

export class TracingEngine{
    runUpstream(network: Network, startNode : string) : string[] {
        return [];
    }

    runDownStream(network: Network, startNode : string) : string[] {
        return [];
    }

    runIsolation(network: Network, elementId : string) : string[]{
        return [];
    }
}