import type { Geometry } from "@/domain/value-objects/Geometry.js"

export class Node {
    constructor(
        public readonly id: string,
        public readonly geometry: Geometry
    ) {}
}