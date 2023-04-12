import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../../utils/newRequest";

const Success = () => {
  const { search } = useLocation();

  const navigate = useNavigate();

  const params = new URLSearchParams(search);
  const paymentIntent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("orders", { paymentIntent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  });

  return (
    <div>
      Payment Success ! . You are being redirected to the order page.Please do
      not close the page{" "}
    </div>
  );
};

export default Success;
