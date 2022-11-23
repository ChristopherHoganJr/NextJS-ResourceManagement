import React from "react";

const RenderResourceListitem = ({ resource }) => {
  return (
    <div key={resource.id} className='p-2 border-2 border-slate-600'>
      <h2>{resource.created_at}</h2>
      <h1>{resource.title}</h1>
      <p>{resource.description}</p>
    </div>
  );
};

export default RenderResourceListitem;
