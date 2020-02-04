import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../../components/Spinner/Spinner";
import Card from "../../components/Card/Card";

const fetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data.results[0]);
      });
  }, []);
  return (data);
};

const noteUseEffect = () => {
  const data = fetchData("https://api.randomuser.me/");
  const peopleList = (
    data.length !== 0 ? (
      <Card
        gender={data.gender}
        email={data.email}
        name={`${data.name.title} ${data.name.first} ${data.name.last}`}
        address={`${data.location.city}, ${data.location.state}, ${data.location.country}`}
      />
    ) : <Spinner />
  );

  return (
    <div>{peopleList}</div>
  );
};

export default noteUseEffect;
