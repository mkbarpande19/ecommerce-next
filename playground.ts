export function play() {
  const name: string = "Mayur";
  const age: number = 27;

  // class types rules
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  //  using interface
  //   interface PersonLogger { // function type definition i.e. defining function rule like parameter type and return type
  //   // here name is parameter of type string
  //     (name: string, age: number): string;
  //   }

  // using types
  type PersonLogger = (name: string, age?: number) => string;
  // for function types rules it is easy to use type instead of interface

  // to make any parameter or variable optional use ? after the variable name

  const logPersonInfo: PersonLogger = (
    personName: string,
    personAge: number
  ): string => {
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);
    return info;
  };

  const logPersonInfo2 = (person: Person) => {
    const info = `Name: ${person.name}, age: ${person.age}`;
    console.log(info);
    return info;
  };

  let log = logPersonInfo(name, age);

  logPersonInfo2(new Person("Mayur", 28));
}

//***********  NARROWING *************

//  Narrowing means using conditional statements to check some logic or use switch cases to perform some operations

export function narrowing() {
  // Creating Array
  const names: string[] = ["Mayur", "Barpande"];
  const numbers: Array<number> = [1, 2, 3, 4, 5];

  const random = Math.random() > 0.5 ? "Hello" : [1, 2];

  if (typeof random === "string") {
    const upper = random.toUpperCase();
    console.log(upper);
  } else {
    console.log(random);
  }

  console.log(random.length);
}

// ***************** EXTENDING INTERFACE *********************
interface PersonDetail {
  name: string;
  age: number;
}

interface BusinessPerson extends PersonDetail {
  salary: number;
}

interface AcademicPerson extends PersonDetail {
  publications: string[];
}

export const extendInterface = () => {
  const person: PersonDetail = {
    name: "Priyanka",
    age: 23,
  };

  const businessMan: BusinessPerson = {
    name: "Mayur",
    age: 28,
    salary: 50000,
  };

  const teacher: AcademicPerson = {
    name: "Kalpesh",
    age: 32,
    publications: ["1", "2"],
  };

  console.log(
    "Person:",
    person,
    "\n Business Person:",
    businessMan,
    "\n Teacher:",
    teacher
  );
};

// **************** EXTENDING TYPE *******************

type Car = {
  name: string;
};
// & { speed: number }; // extend type using and operator

type RaceCar = {
  speed: number;
} & Car & { mileage: number }; // Another way to extend the type

// union operator just allows to use same property of the both types for example
/*
    type RaceCar = {
        name: string,
        mileage: number
    }

    type CityCar ={
        name: string
        speed: number
    }

    type Car = RaceCar | CityCar
*/


// *************** Union Narrowing *********************

/*
    type RaceCar = {
        name: string,
        speed: number,
        team: string
    }

    type CityCar ={
        name: string
        mileage: number
    }


    const car: RaceCar={
        name: "ABC",
        speed: 200,
        team: "Ferrari"
    }

    switch(car.speed){
        case 200:
            console.log(car.team);
            break;
        case 100: 
            console.log(car);
            break;
        deafult: 
            console.log(car);
    }
*/

// Use "as" to type cast the variables
// USE "<>" braces to type cast'


// ********************  INTERFACE NARROWING *******************
/*
function logPersonInfo(human: Human) {

    if (human.kind === "academic") {
      console.log(human)
    } else if (human.kind === "business") {
      console.log(human)
    } else if (human.kind === "otherType") {
      console.log(human)
    } else {
      console.log(human)
    }
  }

*/
export const extendType = () => {
  const car: RaceCar = {
    name: "Tata Nexon",
    speed: 140,
    mileage: 16,
  };

  console.log("\n car", car);
};
