import type { Edge } from "@/domain/entities/Edge.js";
import type { Node } from "@/domain/entities/Node.js";

export class Network {
    constructor(
        public readonly id:string,
        public readonly nodes : Node,
        public readonly edges : Edge
    ){}
}