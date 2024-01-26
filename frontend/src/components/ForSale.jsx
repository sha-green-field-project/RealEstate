import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import "../css/Residences.css";

const ForSale = () => {
  const [resForSale, setResForSale] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3001/residences/forSale", {
      withCredentials: true,
    });
    setResForSale(res.data);
  };

  const deleteResidence = async (id) => {
    await axios.delete(`http://localhost:3001/residences/${id}`, {
      withCredentials: true,
    });
    fetchData();
  };

  return (
    <div className="exercise-page">
      <div className="exercise-list">
        {resForSale.map((residence) => {
          return (
            <ResidenceCard
              key={residence._id}
              residence={residence}
              deleteResidence={deleteResidence}
            ></ResidenceCard>
          );
        })}
      </div>
    </div>
  );
};

export default ForSale;