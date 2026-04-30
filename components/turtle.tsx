"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function TurtleRunner() {
  useEffect(() => {
    // This function will run your Python turtle code
    (window as any).runTurtle = function () {
const code = `
import turtle as trtl
n = 18
//painter.goto(0,0)
painter = trtl.Turtle()
painter.shape("circle")
painter.penup()
while n > 0:
  painter.color("black")
  painter.forward(20)
  painter.right(20)      
  if n % 2 == 0:
    painter.color("red")
  painter.stamp()
  `;

      // ⭐ ADD THIS — tells Skulpt where to draw the turtle canvas
      (window as any).Sk.TurtleGraphics = (window as any).Sk.TurtleGraphics || {};
      (window as any).Sk.TurtleGraphics.target = "sk-canvas";

      // Configure Skulpt
      (window as any).Sk.configure({
        output: (text: string) => console.log(text),
        read: (x: string) => (window as any).Sk.builtinFiles["files"][x],
      });

      // Run the Python code
      (window as any).Sk.misceval.asyncToPromise(() =>
        (window as any).Sk.importMainWithBody("<stdin>", false, code, true)
      );
    };
  }, []);

  return (
    <>
      {/* Load Skulpt */}
      <Script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js" />

      <div className="space-y-4">
        <button
          onClick={() => (window as any).runTurtle()}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Run Turtle
        </button>

        {/* ⭐ This ID must match the target above */}
        <div id="sk-canvas" style={{ width: "600px", height: "400px" }}></div>
      </div>
    </>
  );
}
