import React from "react";

const Popular = () => {
  return (
    <div className="popular">
      <div className="w-screen h-screen">
        <p className=" text-[40px] font-bold text-center text-black mb-24">
          Our Popular Destinations
        </p>
        <div className="flex space-x-32">
          <img src="world_map_png28-2.png"
            className="w-1/2 h-[744px] opacity-60 object-cover border border-black" />
          <div className="flex-vertical w-1/2 space-y-10">
            <div className="card">
              <div className="w-[679px] h-[221px] rounded-[15px] bg-white" style={{
                boxShadow: "3px 3px 10px 0 rgba(0,0,0,0.08)"
              }} >
                <div className="flex items-center space-x-10 mx-auto">
                  <img className="w-[230px] h-[221px]  rounded-tl-[15px] rounded-bl-[15px]"
                    src="rectangle-15.png" />
                  <p className="w-[230px] h-[27px] text-xl font-semibold text-center text-black">
                    Thailand
                  </p>
                  <p className="w-24 h-[54px] text-xl font-semibold text-left text-black">
                    <span className="w-24 h-[54px] text-xl font-semibold text-left text-black">20+ Spots</span>
                    <br />
                    <span className="w-24 h-[54px] text-xl font-semibold text-left text-black">2D &amp; 3N</span>
                  </p>
                </div>
              </div>

            </div>
            <div className="card">
              <div className="w-[679px] h-[221px] rounded-[15px] bg-white" style={{
                boxShadow: "3px 3px 10px 0 rgba(0,0,0,0.08)"
              }} >
                <div className="flex items-center space-x-10 mx-auto">
                  <img className="w-[230px] h-[221px]  rounded-tl-[15px] rounded-bl-[15px]"
                    src="rectangle-16.png" />
                  <p className="w-[230px] h-[27px] text-xl font-semibold text-center text-black">
                    Indonesia
                  </p>
                  <p className="w-24 h-[54px] text-xl font-semibold text-left text-black">
                    <span className="w-24 h-[54px] text-xl font-semibold text-left text-black">25+ Spots</span>
                    <br />
                    <span className="w-24 h-[54px] text-xl font-semibold text-left text-black">3D &amp; 3N</span>
                  </p>
                </div>
              </div>

            </div>
            <div className="card">
              <div className="w-[679px] h-[221px] rounded-[15px] bg-white" style={{
                boxShadow: "3px 3px 10px 0 rgba(0,0,0,0.08)"
              }} >
                <div className="flex items-center space-x-10 mx-auto">
                  <img className="w-[230px] h-[221px]  rounded-tl-[15px] rounded-bl-[15px]"
                    src="rectangle-17.png" />
                  <p className="w-[230px] h-[27px] text-xl font-semibold text-center text-black">
                    New Zealand
                  </p>
                  <p className="w-24 h-[54px] text-xl font-semibold text-left text-black">
                    <span className="w-24 h-[54px] text-xl font-semibold text-left text-black">20+ Spots</span>
                    <br />
                    <span className="w-24 h-[54px] text-xl font-semibold text-left text-black">3D &amp; 2N</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Popular;