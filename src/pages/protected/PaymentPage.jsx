import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/protected/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from 'react-router-dom';
import axios from "axios"; // Make sure to import axios if you're using it for HTTP requests

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const [paymentInfo, setPaymentInfo] = useState({ username: '', plan: '' });

  useEffect(() => {
      if (location.state) {
          setPaymentInfo(location.state);
      }
  }, [location]);
  useEffect(() => {

      const publishableKey =  "pk_test_51OUNa5G9oNaqIQuvVojDvxLK4IgFzbSlEbWGUvXHm6VlNA6Rmrk9MGNBiEHHgsl8WMbjovkR3ajxcFhGpEF3S7Te00LOKqmAv4"
      setStripePromise(loadStripe(publishableKey));

  }, []);

  useEffect(() => {
    axios.post("http://localhost:5000/create-payment-intent", {
      username: paymentInfo.username, // Use the username
      subscriptionInfo: paymentInfo.plan,
    })
    .then(response => {
      // Assuming your endpoint returns the clientSecret like { clientSecret: "..." }
      setClientSecret(response.data.clientSecret);
      console.log(response.data.clientSecret); // Log the clientSecret from the response
    })
    .catch(error => console.error("Error fetching clientSecret:", error)); // Handle any errors
  }, []); // The empty dependency array means this effect runs once on mount
  

  return (
<div className="flex min-h-screen">
  {/* Payment Elements Section with a White Background - Now a third of the screen */}
  <div className="w-1/3 flex flex-col justify-top items-center bg-white p-6 shadow-lg mt-20">
  <h1 className="text-[42px] font-bold text-gray-800 mb-4 font-sans">Checkout</h1>
<p className="text-md text-gray-600 mb-8 font-sans">Complete your payment securely.</p>

    <div className="w-full max-w-sm">
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm paymentInfo={paymentInfo} />
        </Elements>
      )}
    </div>
  </div>

  {/* Checkout Amount Section with a Gray or Black Background - Takes the remaining space */}
  <div className="flex-1 flex flex-col justify-top items-center bg-gray-50 p-6">
  <div className="p-8 max-w-md w-full mt-20">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Checkout Summary</h2>
    
    {/* Item Description */}
    <div className="flex justify-between items-center mb-4">
      <span className="text-lg text-gray-700">Item:</span>
      <span className="text-lg text-gray-900">Product Name</span>
    </div>
    
    {/* Amount */}
    <div className="flex justify-between items-center mb-4">
      <span className="text-lg text-gray-700">Amount:</span>
      <span className="text-lg text-gray-900">$XX.XX</span>
    </div>
    
    {/* Subtotal */}
    <div className="flex justify-between items-center mb-4">
      <span className="font-semibold text-lg text-gray-700">Subtotal:</span>
      <span className="font-semibold text-lg text-gray-900">$XX.XX</span>
    </div>
    

  </div>
</div>

</div>






  );
}

export default Payment;