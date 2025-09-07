import React from 'react'

function Background() {
   return (
      <div className="min-h-screen w-full bg-white fixed -z-10">
         <div
            className="absolute inset-0"
            style={{
               backgroundImage: `
                  radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
               `,
               backgroundSize: "100% 100%",
            }}
         />
      </div> 
   )
}

export default Background