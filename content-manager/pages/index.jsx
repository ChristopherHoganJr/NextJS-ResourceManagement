import Head from "next/head";
import Image from "next/image";

import React, { useState } from "react";

// components
import TextComp from "../components/TextComp";

export default function Home() {
  const [vState, setVState] = useState(0);

  return (
    <div>
      <p>valueState = {vState}</p>
      <button onClick={() => setVState(vState + 1)}>Add To State</button>
      <button onClick={() => setVState(vState - 1)}>Subtract From State</button>
      <h1>Hello</h1>
      <TextComp />
    </div>
  );
}
