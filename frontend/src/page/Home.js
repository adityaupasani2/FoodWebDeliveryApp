import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  const handleOrder = () => {
    navigate("/menu/6532217db82a37252912cbd9");
  };

  // filter data display

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            ></img>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fastest Delivery in
            <span className="text-red-600 text-"> Your Home </span>
          </h2>
          <p className="py-3 text-base font-bold ">
            Indulge in a culinary journey like no other with our food delivery
            service. Explore a world of flavors right at your doorstep, from
            mouthwatering classics to exotic delicacies. Savor the convenience
            of a hassle-free dining experience, all delivered with love. Your
            cravings, our creations – order now and taste the difference."
          </p>
          <button
            onClick={handleOrder}
            className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md my-2"
          >
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading...."} />
                );
              })}
        </div>
      </div>
      <div className=" ">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800">
            FRESH VEGETABLES
          </h2>
          <div className="ml-auto flex gap-4 ">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>
      <AllProduct heading={"YOUR PRODUCT"} />
    </div>
  );
};

export default Home;

// 7.34.43
