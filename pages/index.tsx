import { useEffect } from "react";
import { extendInterface, extendType, narrowing, play } from "../playground";

export default function Home() {
  useEffect(() => {
    play(); //simple function
    narrowing(); // Narrowing function with conditional statements also we can use switch cases
    extendInterface(); // example of extending interface for the same type of data.
    extendType(); // example of extending type
  }, []);
  return <div>He</div>;
}
