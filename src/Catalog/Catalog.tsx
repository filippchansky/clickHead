import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { RootState } from "../store";
import ProductArr from "../store/slice/ProductArr";
import style from "./catalog.module.css";

interface CatalogProps {}

const Catalog: React.FC<CatalogProps> = ({}) => {
  const data = useSelector((state: RootState) => state.product);
  const productArr = useSelector((state: RootState) => state.productArr.productArr)
  console.log(productArr)
  // const [productArr, setProductArr] = useState<number[]>([]);

  return (
    <section className={`${style.catalog__container} container`}>
      <div className={`${style.catalog}` }>
        {data.products.map((elem) =>
          elem.products.map((product) => (
            <ProductCard
            productArr={productArr}
              id={product.id}
              price={product.price}
              title={product.title}
              key={product.id}
            />
          ))
        )}
      </div>
    </section>
  );
};
export default Catalog;
