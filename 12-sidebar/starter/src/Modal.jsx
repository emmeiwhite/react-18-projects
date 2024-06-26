import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button
          className="close-modal-btn"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
