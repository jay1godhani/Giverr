import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkOutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Mvxg5SAwKgp7O99WVtwinZdqEDGZem5CInTSvBOHhqFhcHO03qPVrYFRIY4ZPBb8DBYqjRDw0vZeAADhE0vvrFd00dnuhIf0Y"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(`orders/createPaymentIntent/${id}`);

        setClientSecret(res.data.clientSecret);

        console.log("clientSecretkey : ", clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
