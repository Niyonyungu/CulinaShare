import React from "react";
import { useDispatch } from "react-redux";
import { addToFave } from "../../../redux/culinaSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">
        <span className="text-[#808000]">Rate :</span> {productInfo.rate}
      </p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Category:</span> {productInfo.categ}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToFave({
              _id: productInfo.id,
              name: productInfo.productName,
              image: productInfo.img,
              badge: productInfo.badge,
              rate: productInfo.rate,
              categoty: productInfo.categ,
            })
          )
        }
        className="w-full py-4 bg-[#808000] hover:bg-olive-400 duration-300 text-white text-lg font-titleFont"
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default ProductInfo;
