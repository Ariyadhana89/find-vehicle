import React, { ReactNode } from "react";
import { InputPicker, MultiCascader } from "rsuite";

type ValueType = (string | number)[];

interface ItemDataType {
  value: string;
  label: ReactNode;
  children?: ItemDataType[];
  groupBy?: string;
  loading?: boolean;
}

interface IProps {
  title: string;
  data: ItemDataType[];
  type: "inputPicker" | "cascader";
  value: string | ValueType;
  onChange: (value: string | ValueType) => void;
  width?: number | string;
}

const Picker = (props: IProps) => {
  const { title, data, type, value, onChange, width } = props;

  const getPickerComponent = () => {
    switch (type !== undefined) {
      case type === "inputPicker":
        return (
          <InputPicker
            data={data}
            value={value}
            onChange={(value) => onChange(value)}
          />
        );
      case type === "cascader":
        return (
          <MultiCascader
            style={{ width: width ? width : 280 }}
            data={data}
            cascade={false}
            value={value as ValueType}
            onChange={onChange}
          />
        );
      default:
        return <span>No Data</span>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 5,
      }}
    >
      <label style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
        {title}
      </label>
      {getPickerComponent()}
    </div>
  );
};

export default Picker;
