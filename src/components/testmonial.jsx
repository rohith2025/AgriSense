import React from "react";
import { Navbar } from "./navabr";


const Testmonial = ({Heading,Desc,Time,Loc,Wea,Img}) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="homepage mt-20">
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={Img}
                  alt="image"
                  loading="lazy"
                  width="800px"
                  height="800px"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                {Heading}
                </h2>
                <p className="mt-6 text-gray-600"><strong>Description: </strong>{Desc}</p>
                <p className="mt-6 text-gray-600"><strong>Time to Grow: </strong>{Time}</p>
                <p className="mt-6 text-gray-600"><strong>Suitable Locations: </strong>{Loc}</p>
                <p className="mt-6 text-gray-600"><strong>Suitable Season: </strong>{Wea}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-2'>
      <section className="cta bg-green-300 py-2 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
          <p className="text-lg text-green-700">
            Get the latest updates on crop trends, farming techniques, and expert advice.
          </p>
          <hr className="border-green-900" />
          <p className="text-center text-green-700 text-base mt-1">Copyright © 2024 AgriSense. All rights reserved.</p>
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default Testmonial;
