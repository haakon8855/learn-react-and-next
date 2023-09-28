"use client";

import { ISprites } from "@/interfaces/PokemonInterfaces";
import { EventHandler, useEffect, useState } from "react";

type Props = {
  sprites: ISprites;
};

const Sprite = ({ sprites }: Props) => {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let lsAnimate = localStorage.getItem("animate");
      console.log(lsAnimate);
      if (lsAnimate == "true") {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  }, []);

  const handleCheckboxToggle = () => {
    setAnimate(!animate);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("animate", "" + !animate);
      console.log("Successfully saved to ls");
    }
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="checkbox-1"
          aria-describedby="checkbox-1"
          type="checkbox"
          className="bg-gray-50 hidden border-gray-300 focus:ring-3 h-4 w-4 rounded"
          checked={animate}
          onChange={handleCheckboxToggle}
        ></input>
        <label
          htmlFor="checkbox-1"
          className="flex items-center gap-2 text-sm font-medium text-gray-900 select-none"
        >
          <div
            className={`w-3.5 h-3.5 rounded-sm transition-all ${
              animate ? "bg-black" : "border-2 border-black"
            }`}
          >
            <svg
              strokeWidth={1}
              className={
                animate ? "fill-[#e0d8c0] stroke-[#e0d8c0]" : "fill-transparent"
              }
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckIcon"
            >
              <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
            </svg>
          </div>
          Animate
        </label>
      </div>
      {sprites.versions["generation-v"]["black-white"].animated.front_default &&
      animate ? (
        <img
          className="h-auto w-[140px] p-7"
          style={{ imageRendering: "pixelated" }}
          src={
            sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
        />
      ) : (
        <img
          className="h-auto w-[140px]"
          style={{ imageRendering: "pixelated" }}
          src={sprites.front_default}
        />
      )}
    </>
  );
};

export default Sprite;
