import React, { createContext, useState } from "react";

export const datacontext = createContext(null);

const DataContext = (props) => {
    const [data, setData] = useState("Data access to globally !");

    console.log(props);

  return (
    <datacontext.Provider value={[data, setData]}>
      {props.children}
    </datacontext.Provider>
  );
};

export default DataContext;
