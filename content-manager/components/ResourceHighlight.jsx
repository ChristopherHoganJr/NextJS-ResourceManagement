import React from "react";

// components
import RenderResourceHighlightItem from "./RenderResourceHighlightItem";

const ResourceHighlight = ({ resources }) => {
  return (
    <section className='py-5'>
      <div className='mx-5'>
        <h2 className='text-lg font-bold border-2 border-slate-900 pl-2'>
          Highlighted Content
        </h2>
        <div className='grid grid-cols-1 gap-3 p-2'>
          {resources.map((resource) =>
            RenderResourceHighlightItem({ resource })
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
