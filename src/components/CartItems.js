import { useDispatch } from 'react-redux';
import { increase, removeItem } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';

const CartItems = ({
  // eslint-disable-next-line react/prop-types
  id, img, title, price, amount,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          {' '}
          $
          {price}
        </h4>
        <button className="remove-btn" type="button" onClick={() => { dispatch(removeItem(id)); }}> remove</button>
      </div>

      <div>
        <button className="amount-btn" type="button" onClick={() => { dispatch(increase({ id })); }}>
          <ChevronUp />
        </button>
        <p className="amount">
          {amount}
        </p>
        <button className="amount-btn" type="button">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItems;
