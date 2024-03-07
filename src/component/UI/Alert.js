import React, { useEffect, useState } from "react";

const Alert = (props) => {
  const [showAlert, setshowAlert] = useState(false);
  useEffect(() => {
    if(props.message)
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 3000);
  }, [props.message]);
  return (
    <>
      {showAlert && (
        <div className="container mt-2 d-flex justify-content-end fixed-top">
          <div className="alert alert-primary " role="alert">
            {props.message} 
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
