import React from "react";

interface KeyDataProps {
  indexKey: string;
  data: React.ReactNode;
}

const KeyDataView = ({ indexKey, data }: KeyDataProps) => {
  return (
    <dl className="flex flex-wrap ">
      <dt className=" font-semibold mb-2 mr-2"> {indexKey} :</dt>
      <dd>{data}</dd>
    </dl>
  );
};

export default KeyDataView;
