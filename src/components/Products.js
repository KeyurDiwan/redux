import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Product from "./Product";
import girl from "../data/girl";
import men from "../data/men";
import mobile from "../data/mobile";

import "../styles/Products.css";

// data from fake data api.....
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        // console.log(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  let a = window.location.href.split("/");
  let urlPos = window.location.href.split("/")[a.length - 1];
  let prod;
  if (urlPos == "men") {
    prod = men;
  } else if (urlPos == "girl") {
    prod = girl;
  } else if (urlPos == "mobile") {
    prod = mobile;
  } else {
    prod = products;
  }

  return (
    <div className="home-divider">
      <div className="Products container">
        {prod.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
