import React, { useState } from "react";

interface IVehicleContext {
  vehicleTypes?: Definitions.type[];
  vehicles?: Definitions.vehicle[];
  setVehicle: (newVehicle: Definitions.vehicle[] | undefined) => void;
  parts?: Definitions.part[];
  setParts: (parts: Definitions.part[]) => void;
}

export const VehicleContext = React.createContext<IVehicleContext>({
  setVehicle: () => undefined,
  setParts: () => undefined,
});

const VehicleProvider = ({ children }: any) => {
  const vehicleTypes: Definitions.type[] = ["electrical", "sport", "twoWheels"];
  const [vehicles, setVehicle] = useState<Definitions.vehicle[]>();
  const [parts, setParts] = useState<Definitions.part[]>();

  return (
    <VehicleContext.Provider
      value={{
        vehicleTypes,
        vehicles,
        setVehicle,
        parts,
        setParts,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
export default VehicleProvider;
