import React from "react";
import ghost from "./ghost.png";

export default function Pages() {
  const [mouseOver, setMouseOver] = React.useState(false);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="p-10 border-2 border-black">
          <h1 className="text-4xl text-center font-extrabold pb-4">
            {" "}
            Captcha Minigioco{" "}
          </h1>
          <img
            src={ghost}
            alt="fantasma_captcha"
            onMouseOver={() => setMouseOver(true)}
            className="w-48 h-48 ml-20"
          />
          {mouseOver ? (
            <p className="text-3xl text-center font-semibold pt-4">Bravo!</p>
          ) : (
            <p className="text-3xl text-center font-semibold pt-4">
              Tocca il fantasma
            </p>
          )}
        </div>
      </div>
    </>
  );
}
