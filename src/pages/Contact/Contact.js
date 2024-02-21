import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [prodName, setprodName] = useState("");
  const [descrip, setdescrip] = useState("");
  const [rate, setrate] = useState("");

  // ========== Error rate Start here ============
  const [errprodName, setErrprodName] = useState("");
  const [errdescrip, setErrdescrip] = useState("");
  const [errrate, setErrrate] = useState("");
  // ========== Error rate End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setprodName(e.target.value);
    setErrprodName("");
  };
  const handledescrip = (e) => {
    setdescrip(e.target.value);
    setErrdescrip("");
  };
  const handlerate = (e) => {
    setrate(e.target.value);
    setErrrate("");
  };

  // ================= descrip Validation start here =============
  const descripValidation = (descrip) => {
    return String(descrip)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= descrip Validation End here ===============

  const handlePost = (e) => {
    e.preventDefault();
    if (!prodName) {
      setErrprodName("Enter your Name");
    }
    if (!descrip) {
      setErrdescrip("Enter your descrip");
    } else {
      if (!descripValidation(descrip)) {
        setErrdescrip("Enter a Valid descrip");
      }
    }
    if (!rate) {
      setErrrate("Enter your rate");
    }
    if (prodName && descrip && descripValidation(descrip) && rate) {
      setSuccessMsg(
        `Thank you`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contibute" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">
            Fill up a Form
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Name
              </p>
              <input
                onChange={handleName}
                value={prodName}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name here"
              />
              {errprodName && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errprodName}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                descrip
              </p>
              <input
                onChange={handledescrip}
                value={descrip}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="descrip"
                placeholder="Enter your name here"
              />
              {errdescrip && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errdescrip}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                rate
              </p>
              <textarea
                onChange={handlerate}
                value={rate}
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
                placeholder="Enter your name here"
              ></textarea>
              {errrate && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errrate}
                </p>
              )}
            </div>
            <button
              onClick={handlePost}
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Post
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
