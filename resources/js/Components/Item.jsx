import React, { useState } from 'react'

function Item({name,stacks,image,year,viewDetail}) {
  const color = ['red','green','blue'];

  return (
      <div className="flex flex-col justify-center space-y-4 fade-in">
          <div className="overflow-hidden rounded-lg shadow-sm aspect-video border-1 border-slate-400 shadow-slate-200/50 hover:shadow-lg hover:shadow-slate-200 bg-slate-50">
            <img src={image} alt="" />
          </div>
          <div className={`border-r border-${color[Math.floor(Math.random() * 3)]}-800`}>
              <div className="flex space-x-4 text-sm text-green-200 ">
              {stacks.map((stack) => (
                <p>{stack}</p>
              ))}
              
             
              </div>
              <h1 className="text-lg font-semibold">
                 {name}
              </h1>
              <div className="flex items-center gap-x-4">
                
              <p className="text-xs text-slate-200">{year} </p> -
              <button onClick={viewDetail} className='text-sm text-slate-200 hover:font-semibold'>View Details</button>
              </div>
          </div>
      </div>
  );
}

export default Item