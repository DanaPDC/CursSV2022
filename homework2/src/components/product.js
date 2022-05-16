import Exercise1 from "./exercise1";

const Product = () => {
  return (
    <div className="productInfo">
      <Exercise1
        name="Apple"
        price="100"
        category="fruits"
        colorCategory="AntiqueWhite"
      />
      <Exercise1
        name="iPhone"
        price="259870"
        category="electronics"
        colorCategory="Coral"
      />
      <Exercise1 name="T-Shirt" category="clothes" colorCategory="Crimson" />
    </div>
  );
};

export default Product;
