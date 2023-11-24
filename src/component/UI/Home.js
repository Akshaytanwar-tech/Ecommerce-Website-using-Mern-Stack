import React, { useContext, useEffect } from "react";
import Advertisementpic from "./Advertisementpic";
import pic from "../Pictures/pic.jpg";
import pic1 from "../Pictures/pic1.jpg";
import pic2 from "../Pictures/pic2.jpg";
import Categories from "./Category/Categories";
import Footar from "./Footar";
import EcomContext from "../../context/EcomContext";
import Navbar from "./Navbar";
import BestSeller from "./Product/BestSeller/BestSeller";

const Home = () => {
  const Context = useContext(EcomContext);
  const { Category, FetchCategories } = Context;

  useEffect(() => {
    FetchCategories();
    // eslint-disable-next-line
  }, [Category]);

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <Advertisementpic pic={pic} pic1={pic1} pic2={pic2} />
        <Categories header={"Shop by Categories"} data={Category} />
        <BestSeller />
      </div>
      <Footar />
    </>
  );
};

export default Home;
