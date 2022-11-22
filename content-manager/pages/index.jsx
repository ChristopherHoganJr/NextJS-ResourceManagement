import Head from "next/head";
import Image from "next/image";

import React, { useState } from "react";

// components
import Navbar from "../components/Navbar";
import ResourceItem from "../components/ResourceItem";
import Newsletter from "../components/Newsletter";
import ResourceList from "../components/ResourceList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResourceItem />
      <Newsletter />
      <ResourceList />
      <Footer />
    </>
  );
}
