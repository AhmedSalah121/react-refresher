import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate(-1);
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
