import React from "react";
import Data from "../data";
import ScrollableGrid from "./ScrollableGrid";

export default function Project() {
  return (
    <div>
      <h1>Projects and Experiences</h1>
      <ScrollableGrid data={Data}></ScrollableGrid>
    </div>
  );
}
