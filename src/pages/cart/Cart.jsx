import { useContext} from 'react'
import { PRODUCTS } from '../../Products';
import { shopContext } from '../../context/CartContext';
import  CartItem from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router';

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(shopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Cart</h1>
      </div>
      <div className="cartItems">
        {
          PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={product.id} />
            }
          })
        }
      </div>
      {totalAmount > 0 ? (
      <div className='checkout'>
        <p>Total: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  )
}

export default Cart