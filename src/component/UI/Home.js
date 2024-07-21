import React, { useContext, useEffect, useState } from "react";
import Advertisementpic from "./Advertisementpic";
import pic from "../Pictures/pic.jpg";
import pic1 from "../Pictures/pic1.jpg";
import pic2 from "../Pictures/pic2.jpg";
import Categories from "./Category/Categories";
import Footar from "./Footar";
import EcomContext from "../../context/EcomContext";
import Navbar from "./Navbar";
import BestSeller from "./Product/BestSeller/BestSeller";
import ReactLoading from "react-loading";

const Home = () => {
  const Context = useContext(EcomContext);
  const { Category, FetchCategories } = Context;
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    FetchCategories().then(() => {
      setloading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />

      {!loading ? (
        <div className="bg-light">
          <Advertisementpic pic={pic} pic1={pic1} pic2={pic2} />
          <Categories header={"Shop by Categories"} data={Category} />
          <BestSeller />
        </div>
      ) : (
        <div className="container d-flex justify-content-center py-5 my-5">
          <div>
            <ReactLoading
              color={"black"}
              type={"spinningBubbles"}
              height={"100px"}
              width={"100px"}
            />
            <div className="py-3 h5">Please Wait...</div>
          </div>
        </div>
      )}
      <Footar />
    </>
  );
};

export default Home;
