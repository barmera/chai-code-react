/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white shadow-lg px-3 gap-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="px-3 outline-none rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => {
              setColor("green");
            }}
            className="px-3 outline-none rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="px-3 outline-none rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("grey");
            }}
            className="px-3 outline-none rounded-full"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="px-3 outline-none rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
