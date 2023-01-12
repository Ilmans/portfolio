import React from 'react'

function TextIntro({array}) {
  return (
      <div className="">
          {array.map((s, i) => {
              if (s === ",") {
                  return <br key={i} />;
              } else if (s === " ") {
                  return <span key={i}>&nbsp;</span>;
              } else {
                  return (
                      <h1
                          className={`inline-block text-transparent bg-gradient-to-r from-slate-200 via-green-50 to-slate-400  bg-clip-text text-5xl lg:text-6xl font-bold font-display hover:text-green-300 hover:animate-bounce  fade-in`}
                      >
                          {s}
                      </h1>
                  );
              }
          })}
      </div>
  );
}

export default TextIntro