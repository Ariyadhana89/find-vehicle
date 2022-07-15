export const vehicleParts: Definitions.part[] = [
  {
    id: "1",
    partName: "Door",
    type: ["sport", "electrical", "twoWheels"],
    subParts: [
      {
        id: "1-1",
        partName: "Basic Doors",
        type: ["sport", "electrical", "twoWheels"],
      },
      {
        id: "1-2",
        partName: "Scissor Doors",
        type: ["sport"],
      },
      {
        id: "1-3",
        partName: "Wing Doors",
        type: ["sport", "electrical"],
      },
      {
        id: "1-4",
        partName: "Butterfly Doors",
        type: ["sport", "electrical"],
      },
      {
        id: "1-5",
        partName: "Sliding Doors",
        type: ["electrical"],
      },
    ],
  },
  {
    id: "2",
    partName: "Seats Material",
    type: ["sport", "electrical", "twoWheels"],
    subParts: [
      {
        id: "2-1",
        partName: "Leather",
        type: ["sport", "electrical"],
      },
      {
        id: "2-2",
        partName: "Vinyl",
        type: ["sport", "electrical"],
      },
      {
        id: "2-3",
        partName: "Nylon",
        type: ["twoWheels"],
      },
    ],
  },
  {
    id: "3",
    partName: "Exhaust",
    type: ["sport", "twoWheels"],
    subParts: [
      {
        id: "3-1",
        partName: "Single Exit Pipe",
        type: ["twoWheels"],
      },
      {
        id: "3-2",
        partName: "High Performance",
        type: ["sport"],
      },
      {
        id: "3-3",
        partName: "Dual Rear Exit",
        type: ["sport"],
      },
    ],
  },
  {
    id: "4",
    partName: "Battery",
    type: ["twoWheels", "electrical", "sport"],
    subParts: [
      {
        id: "4-1",
        partName: "35 kWh",
        type: ["twoWheels"],
      },
      {
        id: "4-2",
        partName: "75 kWh",
        type: ["electrical"],
      },
      {
        id: "4-3",
        partName: "85 kWh",
        type: ["electrical"],
      },
      {
        id: "4-4",
        partName: "90 kWh",
        type: ["sport", "electrical"],
      },
      {
        id: "4-5",
        partName: "100 kWh",
        type: ["sport", "electrical"],
      },
    ],
  },
];

export const vehicleList: Definitions.vehicle[] = [
  {
    id: 1,
    type: ["sport"],
    name: "Lamborghini Aventador",
    parts: ["1-2", "2-1", "2-2", "3-2", "3-3"],
  },
  {
    id: 2,
    type: ["electrical"],
    name: "Tesla Model 2",
    parts: ["1-1", "2-1", "2-2", "4-2", "4-3", "4-4", "4-5"],
  },
  {
    id: 3,
    type: ["electrical"],
    name: "Tesla Model X",
    parts: ["1-3", "2-1", "2-2", "4-2", "4-3", "4-4", "4-5"],
  },
  {
    id: 4,
    type: ["sport", "electrical"],
    name: "Porche Taycan",
    parts: ["1-1", "2-1", "2-2", "4-4", "4-5"],
  },
  {
    id: 5,
    type: ["twoWheels", "electrical"],
    name: "Two Wheels EV",
    parts: ["1-1", "2-3", "4-1"],
  },
  {
    id: 6,
    type: ["twoWheels"],
    name: "Two Wheels Basic",
    parts: ["1-1", "2-3", "3-1"],
  },
];
