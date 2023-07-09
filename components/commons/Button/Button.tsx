import { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import Button, { ButtonProps } from 'react-bootstrap/Button';

type ReusableButtonProps = {
  variant: ButtonProps['variant'];
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonProps['type'];
  disabled?: boolean;
};

/**
 * Reusable Button Component
 *
 * @param {string} variant - The Bootstrap variant for the button (e.g., 'primary', 'secondary', 'success', etc.)
 * @param {string} label - The label text for the button
 * @param {function} onClick - The function to be called when the button is clicked
 * @param {string} type - The type attribute for the button (e.g., 'button', 'submit', 'reset')
 * @param {boolean} disabled - Specifies whether the button should be disabled
 * @returns {JSX.Element} - The Button component
 */
const ReusableButton: React.FC<ReusableButtonProps> = ({
  variant,
  label,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <Button variant={variant} onClick={onClick} type={type} disabled={disabled}>
      {label}
    </Button>
  );
};

ReusableButton.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  //@ts-ignore
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ReusableButton;
