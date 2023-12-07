import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 10,
    title: "First Book",
    description: "The First book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "Second Book",
    description: "The Second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
