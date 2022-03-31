import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div id="projects" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} tstack={item.tstack} img={item.img} info={item.info} link={item.link} code={item.code} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
