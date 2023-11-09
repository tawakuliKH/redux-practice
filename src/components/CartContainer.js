/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useSelector, useDispatch } from 'react-redux';
import CartItems from './CartItems';
import { openModal } from '../features/modal/modalSlice';

// eslint-disable-next-line consistent-return
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <h2> Your bag</h2>
        <h4 className="empty-cart"> Is currentyly empty</h4>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (<CartItems key={item.id} {...item} />))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
        </div>
        <button className="btn clear-btn" type="button" onClick={() => dispatch(openModal())}>Clear</button>
      </footer>
    </section>
  );
};
export default CartContainer;
