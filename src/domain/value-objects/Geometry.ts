export class Geometry{
    constructor(
        public readonly type : "Point" | "LineString",
        public readonly coordinates : number [] | number [][]
    ) { 
        if ( type === "Point" && !Array.isArray(coordinates)) throw new Error("Point geometry must containt a coordinate array.");
        if ( type === "LineString" && !Array.isArray(coordinates[0]) ) throw new Error("LineString must contain an array of coordinate arrays");

        const isNumeric = (v: any) => typeof v === "number" && !isNaN(v);
        if ( type === "Point" && !(isNumeric(coordinates[0]) && isNumeric(coordinates[1])) ) throw new Error("Point coordinates must be numeric values"); 
    }
}