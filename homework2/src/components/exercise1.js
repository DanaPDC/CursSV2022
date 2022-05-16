import PropTypes from "prop-types";

const Exercise1 = (props) => {
  return (
    <div
      className="border-style"
      style={{ backgroundColor: props.colorCategory }}
    >
      <div className="border-style">Exercitiu 1</div>
      <div className="product-name">Name: {props.name}</div>
      <div className="product-price">Price: {props.price}</div>
      <div className="product-category">Category: {props.category}</div>
    </div>
  );
};

Exercise1.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  colorCategory: PropTypes.string,
};

Exercise1.defaultProps = {
  name: "No name added",
  price: "No price added yet",
  category: "This has no category",
  colorCategory: "gray",
};

export default Exercise1;
