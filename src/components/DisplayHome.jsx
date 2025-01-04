import React from "react";
import { albumsData, songsData } from "../assets/assets"; // Importing the missing data
import Albumitem from "./Albumitem";
import Songitem from "./Songitem";
import Navbar from "./Navbar";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item) => (
            <Albumitem
              key={item.id}  // Use item.id instead of index for a stable key
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item) => (
            <Songitem
              key={item.id}  // Use item.id instead of index for a stable key
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}  // Correctly passing item.image
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
