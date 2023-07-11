import { SetStateAction } from "react";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";

const SelectElement = ({
    label,
    value,
    required,
    options,
    stateChanger,
    disabled,
    removeDefault,
    prevValue,
    width,
    style,
    colClassName,
}: {
    label: string;
    value: string;
    required?: boolean;
    options: Array<{
        value: string | number
        title: string,
        disabled?: boolean
    }>;
    stateChanger?: React.Dispatch<SetStateAction<any>>;
    disabled?: boolean;
    removeDefault?: boolean;
    prevValue?: string;
    width?: number;
    style?: any
    colClassName?: string
}) => {
    label = label.toUpperCase();
    return (
        <Row className="mt-2 justify-content-center" style={{ color: 'black' }}>
            <Col xs={10} sm={width ? width : 5} md={width ? width : 4} style={style} className={colClassName}>
                <FloatingLabel
                    controlId="floatingSelect"
                    label={label}
                    className="mb-3"
                >
                    <Form.Select
                        aria-label={label}
                        onChange={(event) =>
                            stateChanger ? stateChanger(event.target.value) : null
                        }
                        value={value}
                        required={required}
                        disabled={disabled}
                    >
                        removeDefault? null : <option value="">SELECT {label}</option>
                        {options.map((item, index) => (
                            <option disabled={item.disabled} key={index} value={item.value}>
                                {item.title}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>
            </Col>
        </Row>
    );
};

export default SelectElement;
