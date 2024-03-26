import Router from "../routes/routes";
import client from "../setup/axiosClient";
import checkLogin from "./checkLogin";
import { createStandaloneToast } from "@chakra-ui/react";
import CheckOrSetUDID from "./checkOrSetUDID";

export default async function AddToCart(product_id, quantity) {
  const { ToastContainer, toast } = createStandaloneToast();
  const loginInfo = checkLogin();
  const checkOrSetUDIDInfo = CheckOrSetUDID();
  let headers = { visitor: checkOrSetUDIDInfo.visitor_id };

  try {
    if (loginInfo.isLoggedIn === true) {
      headers = { Authorization: `Token ${loginInfo.token}` };
    }

    const response = await client.post(
      "/cart/",
      {
        pid: product_id,
        quantity: quantity ?? 1,
      },
      {
        headers: {
          ...headers,
          Accept: "application/json",
        },
      }
    );
    if (response.data.status === true) {
      toast({
        title: "Product added to cart!",
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
      localStorage.setItem("cart_counter", response.data.cart_counter);
      // if (window.location.pathname === "/cart") {
      //   window.location.reload();
      // } else {
      //   // Router.navigate("/cart");
      // }
    } else {
      toast({
        description:
          "There was an error adding your product to cart! Please try again!",
        status: "error",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  } catch (error) {
    toast({
      title: error.response.data.message,
      status: "warning",
      position: "top-right",
      duration: 5000,
      isClosable: true,
    });
  }
  return <ToastContainer />;
}
