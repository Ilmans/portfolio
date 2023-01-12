import React from 'react'

function SubText({children}) {
  return (
      <p className="font-semibold !text-transparent bg-gradient-to-r from-red-50 via-pink-100 to-green-500 bg-clip-text text-lg md:text-xl text-slate-400 mt-2  fade-in-to-top">
         {children}
      </p>
  );
}

export default SubText