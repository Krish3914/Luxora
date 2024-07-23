import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useLocation } from "react-router-dom";
const Payment = () => {
  const location = useLocation();
  const id = location.state.id;
  const prize = location.state.SELLprize * 100;
  const productname = location.state.productName;
  const _id = location.state._id;
  const payment = (token) => {
    const body = {
      token,
      _id,
      id,
      productname,
      prize,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch("https://shopping-backend-neon.vercel.app/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div id="payment_page">
      <StripeCheckout
        token={payment}
        stripeKey="pk_test_51OK7pRSIOJiY1NziSnmeuAJ7udLC2cVlchYfE0RezSLpJjb4PPCTGUfUCtginJS699g1ElVa55KQNMOyJCu8yUF500AoGEKRgT"
        name={productname}
        amount={prize}
        currency="INR"
      >
        <div
          style={{
            display: "flex",
            padding: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(203, 156, 156)",
            gap: "2rem",
          }}
        >
          <p>This payment will be a Test mode Not money needed</p>
          <p>If you face any problem please contact page builder on Github..</p>
          <h2 style={{ fontSize: 18, fontWeight: 500 }}>
            Contact:
            <a
              style={{ paddingLeft: 10, color: "gainsboro"}}
              href="https://www.linkedin.com/in/krish-agrawal-26jy/"
            >
              <img
                style={{
                  height: 20,
                  width: 20,
                  position: "relative",
                  left: 5,
                  top: 3,
                }}
                // href="./LinkedIn.jpg"
                // src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png"
                // src="https://pngtree.com/freepng/linkedin-icon-logo_3560501.html"
                src="https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-2.png"
                alt="LinkedIn"
              />{" "}
              ▪️{" "}Krish Agrawal
            </a>
          </h2>
          <button
            style={{
              width: 200,
              height: 40,
              boxShadow: "0 5px 5px rgba(0,0,0,0.5)",
            }}
          >
            PayNow
          </button>
        </div>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
