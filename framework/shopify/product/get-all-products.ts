// use of fetch to get data from api
import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";
import { ProductConnection } from "../schema";
import { normalizeProduct } from "../utils/normalize";

type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });

  const products =
    data.products.edges.map(({ node: products }) =>
      normalizeProduct(products)
    ) ?? [];
  return products;
};

export default getAllProducts;
