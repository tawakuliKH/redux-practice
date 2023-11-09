import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

function Modal() {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Romove all carts</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={() => dispatch(clearCart(), dispatch(closeModal()))}>Confirm </button>
          <button className="btn clear-btn" type="button" onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
