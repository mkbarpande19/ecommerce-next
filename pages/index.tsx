import { useEffect } from "react";
import { extendInterface, extendType, genericArray, genericExtends, genericType, genericTypesWithExtends, narrowing, play } from "../playground";

export default function Home() {
  useEffect(() => {
    play(); //simple function
    narrowing(); // Narrowing function with conditional statements also we can use switch cases
    extendInterface(); // example of extending interface for the same type of data.
    extendType(); // example of extending type
    genericArray(); // example of generic array
    genericType(); // example of generic type
    genericExtends(); // example of generic extends
    genericTypesWithExtends(); // example of generic types with extends
  }, []);
  return <div>He</div>;
}
