import React from "react";
import { styles } from "../styles";

import { BallCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <StarsCanvas />
      <div>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
        <br />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28"
            key={technology.name}
            style={{ animation:"rotate 5s infinite linear" }}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
