import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { IconContext } from 'react-icons';
import { FiX } from 'react-icons/fi';

interface ReusableModalProps extends ModalProps {
    title: string;
    text: string;
    buttonText: string;
    closeButtonText?: string;
    saveChangesText?: string;
}

/**
 * Reusable and Responsive Modal Component
 *
 * @param {string} title - The title of the modal
 * @param {string} text - The body text of the modal
 * @param {string} buttonText - The text for the trigger button
 * @param {string} closeButtonText - The text for the close button (optional)
 * @param {string} saveChangesText - The text for the save changes button (optional)
 * @returns {JSX.Element} - The Modal component
 */
const ReusableModal: React.FC<ReusableModalProps> = ({
    title,
    text,
    buttonText,
    closeButtonText = 'Close',
    saveChangesText = 'Save Changes',
    ...modalProps
}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {buttonText}
            </Button>

            <Modal show={show} onHide={handleClose} {...modalProps}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {closeButtonText}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {saveChangesText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

ReusableModal.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    closeButtonText: PropTypes.string,
    saveChangesText: PropTypes.string,
};

export default ReusableModal;

/*
Example Usage
import React from 'react';
import ReusableModal from './ReusableModal';

function MyComponent() {
  return (
    <ReusableModal
      title="Modal Title"
      text="Modal Body Text"
      buttonText="Open Modal"
      closeButtonText="Cancel"
      saveChangesText="Confirm"
      centered
    />
  );
}

export default MyComponent; */
