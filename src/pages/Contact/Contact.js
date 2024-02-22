import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);


  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contibute" prevLocation={prevLocation} />
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">
            Fill <span className="text-[#808000]">up</span> a Form <span className="text-[#808000]">To</span> add a <span className="text-[#808000]">Recipe</span>
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Re<span className="text-[#808000]">ci</span>pe Name
              </p>
              <input      
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="text"
                placeholder="Enter your recipe name here"
              />    
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Re<span className="text-[#808000]" >ci</span>pe Image
              </p>
              <input    
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="file"
              />
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Ca<span className="text-[#808000]">teg</span>ory</p>
              <input     
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="text"
                placeholder="Recipe Category"
              />   
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
               R<span className="text-[#808000]">a</span>te
              </p>
              <input    
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="text"
                placeholder="recipe rate"
              />
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
               In<span className="text-[#808000]">struct</span>ion
              </p>
              <textarea
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000] resize-none"
                type="text"
                placeholder="Enter How to prepare this recipe"
              ></textarea>
            </div>
            <button
              className="w-44 bg-[#808000] text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-olive-400 hover:text-white duration-200"
            >
              SUBMIT
            </button>
          </div>
        </form>
    </div>
  );
};

export default Contact;
