import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import classnames from 'classnames';

/**
 * AlertElement component displays an alert message with customizable variant and dimensions.
 *
 * @param {object} props - Component props
 * @param {string} props.message - The message to be displayed in the alert
 * @param {('warning' | 'danger' | 'success' | 'info')} props.variant - The variant of the alert (color scheme)
 * @param {(value: boolean) => void} props.stateChanger - A function to change the state of the component
 * @param {object} [props.dimensions] - The dimensions of the alert for different screen sizes
 * @param {number} [props.dimensions.xs] - The width of the alert for extra small screens
 * @param {number} [props.dimensions.sm] - The width of the alert for small screens
 * @param {number} [props.dimensions.md] - The width of the alert for medium screens
 * @param {number} [props.dimensions.lg] - The width of the alert for large screens
 * @param {number} [props.dimensions.xl] - The width of the alert for extra large screens
 * @param {string} [props.className] - Additional CSS class(es) to apply to the component
 * @returns {JSX.Element} - The rendered AlertElement component
 */


type AlertElementProps = {
    message: string;
    variant: 'warning' | 'danger' | 'success' | 'info';
    stateChanger: (value: boolean) => void;
    dimensions?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    className?: string;
};

const AlertElement: React.FC<AlertElementProps> = ({
    message,
    variant,
    stateChanger,
    dimensions,
    className,
}) => {
    const classes = classnames('mt-2', 'justify-content-center', className);

    return (
        <Row className={classes}>
            <Col xs={10} sm={5} md={4} lg={3} xl={2} {...dimensions}>
                <Alert
                    style={{ borderRadius: 10 }}
                    variant={variant}
                    onClose={() => stateChanger(false)}
                    dismissible
                >
                    {message}
                </Alert>
            </Col>
        </Row>
    );
};

export default AlertElement;
