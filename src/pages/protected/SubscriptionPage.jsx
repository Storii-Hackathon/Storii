// SubscriptionPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionPage = ({ username }) => {
  const navigate = useNavigate();

  const handleSubscriptionSelection = (plan) => {
    // Navigate to PaymentPage with plan details
    navigate('/payment', { state: { plan, username } });
  };

  return (
    <div>
      <h2>Subscription Management</h2>
      <button onClick={() => handleSubscriptionSelection('basic')}>Basic Plan</button>
      <button onClick={() => handleSubscriptionSelection('premium')}>Premium Plan</button>
      <button onClick={() => handleSubscriptionSelection('vip')}>VIP Plan</button>
    </div>
  );
};

export default SubscriptionPage;
