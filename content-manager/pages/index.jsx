import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import axios from "axios";

// page layout
import Layout from "components/Layout";

// components
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";

const Home = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/resources")
      .then((res) => {
        setAllResources(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [allResources, setAllResources] = useState();
  console.log(allResources);
  return (
    <Layout>
      {allResources ? (
        <ResourceHighlight resources={allResources} />
      ) : (
        "Loading"
      )}
      <Newsletter />
      {allResources ? <ResourceList resources={allResources} /> : "Loading"}
    </Layout>
  );
};

export default Home;
