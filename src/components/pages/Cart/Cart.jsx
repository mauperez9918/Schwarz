import "./Cart.css";

const Cart = () => {
  return (
    <main>
      <div className="main-content">
        <section className="cart-section border-r">
          <div className="cart">
            <div className="cart-items border-r">productos</div>

            <section className="form-section">
              <h4>Solicite su cotización</h4>

              <form>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Example123@gmail.com" />

                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>

                <textarea placeholder="Descripción / Consultas / Aclaraciones"></textarea>

                <input type="submit" value="Solicitar" />
              </form>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cart;
