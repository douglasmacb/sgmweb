import './Modal.css'

interface Props {
  handleClose: any
  show: boolean
  children: any
}

export const Modal = ({ handleClose, show, children }: Props) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};