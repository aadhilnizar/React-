import React from "react";
import { Meteors } from "../ui/meteors";
function Styling() {
  return (
    <div className="border-solid text-black">
     
      <div className="relative flex h-screen items-center justify-center bg-black text-white overflow-hidden">
      <Meteors number={40} />
      <div className="z-10 text-4xl font-bold">
         <div className="rectangle">
            <div class="bg-circle small"></div>
            <div class="bg-circle big"></div>
            <div class="bg-circle mid"></div>
            <div class="bg-circle mid1"></div>
            <div class="bg-circle mid2"></div>
            <div class="bg-circle mid3"></div>
        <div class="circle lime"></div>
        <div class="circle green"></div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Styling;
