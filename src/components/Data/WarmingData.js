import React, { useState, useMemo, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";

//image
const WarmingData = () => {
  const [data, setData] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setData(null);
      setError(null);
      setIsFetch(false);

      const res = await axios.get(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=35.1&lon=126&appid=48fcd44bf33b160f79fc6827a225a0c7"
      );

      setData(res.data);
    } catch (e) {
      setError(e);
    }
    setIsFetch(true);
  };

  if (isFetch) {
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{isFetch ? data.list[0].components.co : <div>loading</div>}</div>;
};

export default WarmingData;
