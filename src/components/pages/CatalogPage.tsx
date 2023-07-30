import React, { useEffect } from "react";
import Catalog from "../Catalog/Catalog";

interface CatalogPageProps {}

const CatalogPage: React.FC<CatalogPageProps> = ({}) => {

  useEffect(() => {
    document.title = 'Каталог'
  },[])

  return (
    <div>
      <Catalog />
    </div>
  );
};
export default CatalogPage;
