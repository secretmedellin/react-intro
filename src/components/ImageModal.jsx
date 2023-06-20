import React from "react";
import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../Images/x.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ImageModal = (props) => {
  const imgSrc = props.imgSrc;
  const modalIsOpen = props.modalIsOpen;
  const closeModal = props.closeModal;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  return (
    <Modal
      style={customStyles}
      contentLabel="Image Modal"
      portalClassName={"ReactModalPortal"}
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div className="close-icon-container" role="button" onClick={closeModal}>
        <CloseIcon className="close-icon" /> Close
      </div>

      <img src={imgSrc} alt="Selected" className="selected-image" />
    </Modal>
  );
};

export default ImageModal;
