export interface ProductResponse {
  id: string;
  price: string;
  currency: string;
  image: string;
  description: string;
}

export const fetchProducts = async (): Promise<ProductResponse[]> => {
  return fetch("https://604387a8a20ace001728e2d3.mockapi.io/product").then(
    (response) => response.json()
  );
};
