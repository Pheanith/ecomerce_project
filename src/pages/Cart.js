import pf1 from "../components/img/Cars/car1.jpg";
import pf2 from "../components/img/Cars/car2.jpg";
import pf3 from "../components/img/Cars/car3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Cart = () => {
  return (
    <div>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#"></a>
                <FontAwesomeIcon icon={faCircleXmark} />
              </td>
              <td>
                <img src={pf1} alt="" />
              </td>
              <td>Aston Martin V8 Coupe</td>
              <td>$146,986</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$146,986</td>
            </tr>
            <tr>
              <td>
                <a href="#"></a>
                <FontAwesomeIcon icon={faCircleXmark} />
              </td>
              <td>
                <img src={pf2} alt="" />
              </td>
              <td>Aston Martin V8 Coupe</td>
              <td>$146,986</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$146,986</td>
            </tr>
            <tr>
              <td>
                <a href="#"></a>
                <FontAwesomeIcon icon={faCircleXmark} />
              </td>
              <td>
                <img src={pf3} alt="" />
              </td>
              <td>Aston Martin V8 Coupe</td>
              <td>$146,986</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$146,986</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
      <div id="coupon">
        <h3>Apply Coupon</h3>
        <div>
          <input type="text" placeholder="Enter Your Coupon" />
          <button className="normal">Apply</button>
        </div>
      </div>
      <div id="subtotal">
        <h3>Cart Total</h3>
        <table>
          <tr>
            <td>Cart Subtotal</td>
            <td>$ 440,958</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>$ 440,958</strong></td>
          </tr>
        </table>
        <button className="normal">Proceed to checkout</button>
      </div>
    </section>
    </div>
  );
};
export default Cart;
