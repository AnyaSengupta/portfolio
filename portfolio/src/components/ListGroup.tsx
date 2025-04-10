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
