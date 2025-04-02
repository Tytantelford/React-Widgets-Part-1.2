// import { useState } from "react";

// function App() {
//   const [colorChange, setColorChange] = useState("dodgerblue");
//   const [count, setCount] = useState(1);

//   function increase() {
//     setCount((prevCount) => {
//       if (prevCount + 1 === 0) {
//         return prevCount + 2;
//       } else {
//         return prevCount + 1;
//       }
//     });
//   }

//   function decrease() {
//     setCount((prevCount) => {
//       if (prevCount - 1 === 0) {
//         return prevCount - 2;
//       } else {
//         return prevCount - 1;
//       }
//     });
//   }

//   return (
//     <div className="App" style={{ backgroundColor: colorChange }}>
//       <h3>{count}</h3>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }

// export default App;
/////////
// import { useState } from "react";

// function App() {
//   const [greeting, setGreeting] = useState("hello");
//   const [toggleMe, setToggleMe] = useState("goodbye");

//   function hello() {
//     setGreeting("hello");
//   }

//   function goodbye() {
//     setToggleMe("goodbye");
//   }

//   return (
//     <div style={{ backgroundColor: "red" }}>
//       <button onClick={hello}>greeting</button>
//       <h3>{this.state.greeting}</h3>
//       <button onClick={goodbye}>toggle me</button>
//       <h3>{this.state.toggleMe}</h3>
//     </div>
//   );
// }
// export default App;
///////////////
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState(false);

  function buttonMagic() {
    setHidden((prevHidden) => !prevHidden);
  }

  return (
    <div>
      {!hidden && <h3>Hide Me</h3>}{" "}
      <button onClick={buttonMagic}>{hidden ? "Show" : "Hide"}</button>
    </div>
  );
}
export default App;
