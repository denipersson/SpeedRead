import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 200px;

`;
//  outline: 1px solid #d3d3d3;
export const Ad = () => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (!isAdLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9146672353679306";
      script.async = true;
      script.onload = () => {
        setIsAdLoaded(true);
        console.log("loaded ad");
      };
      document.body.appendChild(script);
    }
  }, [isAdLoaded]);

  return (
    <>
      {isAdLoaded && (
        <AdContainer>
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height:"200px" }}
            data-ad-client="ca-pub-9146672353679306"
            data-ad-slot="8165977004"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </AdContainer>
      )}
    </>
  );
};
