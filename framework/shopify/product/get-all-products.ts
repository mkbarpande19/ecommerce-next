// use of fetch to get data from api
import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";
import { ProductConnection } from "../schema";
import { normalizeProduct } from "../utils/normalize";
import { Product } from "../../common/types/products";

type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });

  const products =
    data.products.edges.map(({ node: products }) =>
      normalizeProduct(products)
    ) ?? [];
  return products;
};

export default getAllProducts;
