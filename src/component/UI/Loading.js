import React, { useState, useEffect } from "react";
import "../helpers/loading.css";

const Loading = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (loadingPercentage < 100) {
          setLoadingPercentage(prevPercentage => prevPercentage + 5);
        }
      }, 5000);
  
      return () => clearInterval(interval);
    }, [loadingPercentage]);
  
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = ((100 - loadingPercentage) / 100) * circumference;
  
    return (
      <div className="circular-loading-bar">
        <svg className="progress-ring" height="120" width="120">
          <circle
            className="progress-ring-circle"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: progressOffset
            }}
          />
        </svg>
        <div className="progress-text">{loadingPercentage}%</div>
      </div>
  );
};

export default Loading;
