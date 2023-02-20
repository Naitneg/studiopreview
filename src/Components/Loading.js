import React, { useEffect, useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import "./LoadingLine.css";

const LoadingLine = () => {
  const loadCtx = useContext(LoadingContext);
  const { isLoading } = loadCtx;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadCtx.loadingHandler(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [loadCtx]);

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        loadCtx.loadingHandler(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [loadCtx, isLoading]);

  return (
    <div className="loading-line">
      {loadCtx.isLoading && (
        <div
          className="fill"
          onAnimationEnd={() => loadCtx.loadingHandler(false)}
        ></div>
      )}
      <div className="overlay"></div>
    </div>
  );
};

export default LoadingLine;
