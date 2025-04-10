import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface AlertProps {
  children: React.ReactNode;
}

const CustomAlert: React.FC<AlertProps> = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <Alert variant="success" dismissible onClose={() => setShow(false)}>
          {children}
        </Alert>
      )}
    </>
  );
};

export default CustomAlert;
