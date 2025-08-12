import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance.js";

export type Root = Root2[];

export interface Root2 {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

const ShowProducts = (): Promise<Root> =>
  axiosInstance.get("/products").then((res) => res.data);

export const useProducts = () =>
  useQuery<Root>({
    queryKey: ["products"],
    queryFn: ShowProducts,
  });

export const useSingleProduct = (productId?: number) => {
  return useQuery<Root2>({
    queryKey: ["products", productId],
    queryFn: () =>
      axiosInstance.get(`/products/${productId}`).then((res) => res.data),
    enabled: !!productId,
  });
};
