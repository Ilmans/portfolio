import React from 'react'

function Label({children,htmlFor}) {
  return (
      <label className="block font-semibold" htmlFor={htmlFor}>
         {children}
      </label>
  );
}

export default Label