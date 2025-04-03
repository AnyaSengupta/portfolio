// import ListGroup from "./componets/ListGroup";
// function App() {
//   let items = ["New York", "London", "San Francisco", "Los Angeles"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }
// export default App;

// import Alert from "./componets/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello<h3> World</h3>
//       </Alert>
//     </div>
//   );
// }
// export default App;

import React from "react";
import "./App.css";
import NavBar from "./componets/NavBar";
import CustomListGroup from "./componets/ListGroup";
import CustomAlert from "./componets/Alert";

const App: React.FC = () => {
  const items = ["New York", "London", "San Francisco", "Los Angeles"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <CustomAlert>Hello World</CustomAlert>
        <CustomListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
};

export default App;
