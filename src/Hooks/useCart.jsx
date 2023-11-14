import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const isAxios = useAxios();
  const {user} = useAuth();

  const {refetch, data: cart = [], } = useQuery({
    queryKey: ["cartData", user?.email],
    queryFn: async () => {
      const res = await isAxios.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
