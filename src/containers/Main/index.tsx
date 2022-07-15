import React, { useContext, useState, useMemo, useEffect } from "react";
import { Panel, IconButton, Tag, TagGroup } from "rsuite";
import { VehicleContext } from "../../providers/CarProvider";
import { vehicleParts, vehicleList } from "../../providers/CarProvider/data";
import Picker from "../../components/InputPicker";
import SearchIcon from "@rsuite/icons/Search";
import CloseIcon from "@rsuite/icons/Close";

type ValueType = (string | number)[];
const Main = () => {
  const { vehicles, setVehicle, vehicleTypes } = useContext(VehicleContext);
  const [selectedParts, setSelectedParts] = useState<ValueType>([]);
  const [initLoad, setInitLoad] = useState<boolean>(true);
  const [selectedType, setSelectedType] = useState<Definitions.type>();

  useEffect(() => {
    if (initLoad) {
      setInitLoad(false);
    }
  }, [initLoad]);

  const filterData = (data: Definitions.part[], key?: Definitions.type) => {
    return data.filter((val) => {
      return key ? val.type.indexOf(key) !== -1 : true;
    });
  };
  const PartComponent = useMemo(() => {
    return (
      <Picker
        title={"Parts"}
        data={filterData(vehicleParts, selectedType).map((val) => {
          return {
            value: val.id,
            label: val.partName,
            children: val.subParts
              ? filterData(val.subParts, selectedType).map((subPart) => {
                  return {
                    value: subPart.id,
                    label: subPart.partName,
                  };
                })
              : [],
          };
        })}
        value={selectedParts}
        onChange={(value) => setSelectedParts(value as ValueType)}
        type={"cascader"}
        width={"100%"}
      />
    );
  }, [initLoad, selectedType]);

  const searchHandler = () => {
    if (!selectedType) {
      alert("You need to select a type!");
      return;
    }
    const selectedVehicle = vehicleList.filter(
      (val) =>
        val.type.indexOf(selectedType) !== -1 &&
        (selectedParts.length === 0
          ? true
          : val.parts.some((id) => selectedParts.indexOf(id) !== -1))
    );
    setVehicle(selectedVehicle);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Panel
        header={<h4>{vehicles ? "Selected Vehicles" : "Find Vehicles"}</h4>}
        shaded={true}
        style={{
          width: "30%",
          marginTop: "5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!vehicles ? (
          <>
            <Picker
              title={"Type"}
              value={selectedType as Definitions.type}
              onChange={(value) => {
                setSelectedType(value as Definitions.type);
              }}
              data={
                vehicleTypes
                  ? vehicleTypes.map((type) => {
                      return {
                        label: type,
                        value: type,
                      };
                    })
                  : []
              }
              type={"inputPicker"}
            />
            {PartComponent}
          </>
        ) : (
          <TagGroup>
            {vehicles.map((val, index) => (
              <Tag color={index % 2 === 0 ? "green" : "red"} key={index}>
                {val.name}
              </Tag>
            ))}
          </TagGroup>
        )}
        <div style={{ textAlign: "end", padding: 5 }}>
          <IconButton
            appearance={"primary"}
            icon={vehicles ? <CloseIcon /> : <SearchIcon />}
            size={"md"}
            onClick={() => {
              if (!vehicles) {
                searchHandler();
              }

              if (vehicles) {
                setVehicle(undefined);
                setSelectedParts([]);
                setSelectedType(undefined);
              }
            }}
          >
            {vehicles ? "Reset" : "Search"}
          </IconButton>
        </div>
      </Panel>
    </div>
  );
};

export default Main;
