// import { useState } from "react";

// interface Props {
//   items: string[];
//   heading: string;
//   onSelectItem: (item: string) => void;
// }

// function ListGroup({ items, heading, onSelectItem }: Props) {
//   //Hook
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   //arr[0]; //variable(selectedIndex)
//   //arr[1]; //updater function
//   items.map((item) => <li>{item}</li>);

//   return (
//     <>
//       <h1> {heading}</h1>
//       {items.length == 0 && <p>No items found</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             className={
//               selectedIndex == index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             key={item}
//             onClick={() => {
//               setSelectedIndex(index);
//               onSelectItem(item);
//             }}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

import React from "react";
import { ListGroup } from "react-bootstrap";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const CustomListGroup: React.FC<ListGroupProps> = ({
  items,
  heading,
  onSelectItem,
}) => {
  return (
    <>
      <h3>{heading}</h3>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index} onClick={() => onSelectItem(item)}>
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CustomListGroup;
