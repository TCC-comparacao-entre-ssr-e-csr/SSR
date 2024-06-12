import ProductCard from "../ProductCard";

import Loader from "../Loader";
import { getData } from "@/functions/getData";

const ProductsSection = async () => {
  const { data: products, isLoading } = await getData(
    "https://fakestoreapi.com/products"
  );
  return (
    <div className="container mb-5">
      {!isLoading ? (
        <div className="row">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} productData={product} />
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductsSection;
