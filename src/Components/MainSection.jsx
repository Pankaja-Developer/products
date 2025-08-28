import React, { useState } from "react";
import "../css/mainsection.css";
import Cloths from "./Cloths";

const MainSection = () => {
  let [count, setCount] = useState(false);

  return (
    <>
      <main>
        <button
          onClick={() => {
            setCount(!count);
          }}
        >
          View More
        </button>
      </main>
      <section>{count ? <Cloths /> : ""}</section>
    </>
  );
};

export default MainSection;
