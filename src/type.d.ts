declare namespace Definitions {
  export type type = "electrical" | "twoWheels" | "sport";

  export interface vehicle {
    id: number;
    name: string;
    type: type[];
    parts: string[];
  }

  export interface part {
    id: string;
    partName: string;
    type: type[];
    subParts?: part[];
  }

  // export interface ICrudObj {
  //   [key: string]: any;
  // }
}
