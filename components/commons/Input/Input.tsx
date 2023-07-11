import React, { SetStateAction, Dispatch } from "react";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";

interface InputProps {
  label: string;
  value?: string;
  type: 'text' | 'number' | 'email' | 'tel',
  required?: boolean;
  stateChanger?: Dispatch<SetStateAction<any>>;
  disabled?: boolean;
  width?: number;
  style?: React.CSSProperties;
  colClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type,
  required,
  stateChanger,
  disabled,
  width,
  style,
  colClassName,
}) => {
  const uppercasedLabel = label.toUpperCase();

  return (
    <Row className="mt-2 justify-content-center" style={{ color: 'black' }}>
      <Col xs={10} sm={width ? width : 5} md={width ? width : 4} style={style} className={colClassName}>
        <FloatingLabel
          style={{ color: "black" }}
          controlId="floatingInput"
          label={uppercasedLabel}
          className="pb-3"
        >
          <Form.Control
            type={type}
            placeholder={`Please enter ${uppercasedLabel}`}
            value={value}
            onChange={(e) => stateChanger && stateChanger(e.target.value)}
            required={required}
            disabled={disabled}
          />
        </FloatingLabel>
      </Col>
    </Row>
  );
};

export default Input;
