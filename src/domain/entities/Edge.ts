import type { Geometry } from "@/domain/value-objects/Geometry.js"


export class Edge {
    constructor(
        public readonly id:string,
        public readonly from:string,
        public readonly to:string,
        public readonly geometry : Geometry,
        public readonly attributes : Record<string, any> = {}
    ) {}
}