// FormContainer.jsx
import React, { useState } from 'react';
import Login from './Login';
import Password from './Password';
import BillingInfo from './BillingInfo';

const FormContainer = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log('Submitting form with data:', formData); // Log the form data

    try {
      const response = await fetch('http://localhost:3000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        alert('Message sent successfully!');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); step === 3 ? handleSubmit(e) : handleNext(); }}>
    {step === 1 && <Login formData={formData} handleChange={handleChange} handleNext={handleNext} />}
    {step === 2 && <Password formData={formData} handleChange={handleChange} handleNext={handleNext} />}
    {step === 3 && (
      <BillingInfo
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit} // Pass handleSubmit to BillingInfo
      />
    )}
  </form>
  );
};

export default FormContainer;
