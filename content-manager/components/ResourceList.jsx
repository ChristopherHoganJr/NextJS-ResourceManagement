import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import RenderResourceListitem from "./RenderResourceListitem";

const ResourceList = ({ resources }) => {
  return (
    <section className='py-5'>
      <div className='m-5'>
        <h2 className='text-lg font-bold border-2 border-slate-900 pl-2'>
          Resource List
        </h2>
        <div className='p-2 grid grid-cols-2 gap-3'>
          {resources.map((resource) => RenderResourceListitem({ resource }))}
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
