import React from "react";
import akshay from "../Pictures/akshay.jpg";

const About = () => {
  return (
    <>
      <div className="h1 my-3 text-primary text-center container">
        This Is About Page
      </div>
      <div className="container h4 text-success my-4 mx-4">
        This is a Ecommerce app and This application is helpful to save your
        notes and read anytime after save.This app is made by Akshay tanwar.
      </div>
      <div className="h1 container text-primary mx-4 my-2">ABOUT ME:-</div>
      <div className="container d-flex mx-4 my-4">
        <div className="border border-primary mx-4">
          <img src={akshay} alt="..." />
        </div>
        <div className="container h4 text-success border border-primary px-5 py-5">
          Hii I am Akshay Tanwar and I am doing MCA from Sir Chotu ram institute of Eng and technology, meerut. I want to become a software developer after
          completing my graduation.
        </div>
      </div>
    </>
  );
};

export default About;
