import CartWidget from "../common/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>Vestimenta</li>
        <li>Merchandise</li>
      </ul>
      <h5>Carrito</h5>
      <CartWidget />
    </div>
  );
};
