import React from 'react'

function ToggleMobile({showSidebar,setShowSidebar}) {
  return (
      <>
      <div onClick={() => {
        setShowSidebar((sidebar) => !sidebar)
      }} className="bg-transparent absolute inset-0"></div>
          <button
              className="lg:hidden flex items-center justify-between  px-4 focus:outline-none"
              onClick={() => {
                  setShowSidebar((sidebar) => true);
              }}
          >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-white mt-8 box-border"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
              </svg>
          </button>
      </>
  );
}

export default ToggleMobile