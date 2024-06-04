import ProductCard from "../ProductCard";

import Loader from "../Loader";

async function getData() {
  let data = {};
  let isLoading = true;
  let error;

  const res = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      data = json;
    })
    .finally(() => {
      isLoading = false;
    })
    .catch((err) => {
      error = err;
    });

  // if (!res) {
  //   throw new Error("Failed to fetch data");
  // }

  return {
    data: data,
    isLoading: isLoading,
    error: error,
  };
}

const ProductsSection = async () => {
  const { data: products, isLoading } = await getData();
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
