import { useState } from "react";

const MouseEvent = () => {


  return (
      <div className="container text-center d-flex flex-column align-items-center mt-4">
          <h2 className="text-danger">MOUSE EVENTS</h2>

          <div
              id="todo-1"
              className="bg-success text-light w-50 p-4"

          >
              todo item 1 - onMouseEnter/onMouseOut
          </div>
        

          <div
              id="todo-2"
              className="bg-success text-light w-50 p-4 mt-4"

          >
              todo item 2 - onDoubleClick
          </div>

          <div
              id="todo-3"
              className="bg-success text-light w-50 p-4 my-4"

          >
              todo item 3 - onMouseMove
          </div>

          <p>X and Y</p>
          <p className="text-danger fw-bold">

          </p>
      </div>
  );
};

export default MouseEvent;
