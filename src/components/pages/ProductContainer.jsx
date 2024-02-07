import { ProductCards } from "../common/ProductCards";

export const ProductContainer = () => {
  return (
    <div>
      <ProductCards titulo={"DIO T-Shirt"} precio={1200} />
      <ProductCards titulo={"Iron Maiden T-Shirt"} precio={1200} />
      <ProductCards titulo={"AeroSmith T-Shirt"} precio={1200} />
      <ProductCards titulo={"Metallica T-Shirt"} precio={1200} />
      <ProductCards titulo={"Rainbow T-Shirt"} precio={1200} />
    </div>
  );
};
