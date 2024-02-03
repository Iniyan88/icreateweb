import React from "react";
import { useEffect, useState } from "react";
import Api from "./apis/Api";
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fData = async () => {
      const api = await Api();
      setData(api);
    };
    fData();
  }, []);
  console.log("Dashboard -> data", data);
  return <div>{data.name}</div>;
};

export default Dashboard;
