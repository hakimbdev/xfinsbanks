
import React from 'react';

interface PaystackPaymentProps {
  amount: number;
  email: string;
  reference: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
  children: React.ReactNode;
}

const PaystackPayment: React.FC<PaystackPaymentProps> = ({
  amount,
  email,
  reference,
  onSuccess,
  onClose,
  children
}) => {
  const handlePayment = () => {
    // Check if PaystackPop is available
    if (typeof window !== 'undefined' && (window as any).PaystackPop) {
      const handler = (window as any).PaystackPop.setup({
        key: 'pk_live_08872d8ac9a8cc854cce88f6a5f7bac7da9b8d06', // Paystack public key
        email: email,
        amount: amount * 100, // Paystack expects amount in kobo (smallest currency unit)
        ref: reference,
        onClose: function(){
          onClose();
        },
        callback: function(response: any){
          onSuccess(response);
        }
      });
      handler.openIframe();
    } else {
      // Fallback if Paystack is not loaded
      alert('Payment system is not available. Please try again later.');
    }
  };

  return (
    <div onClick={handlePayment} className="cursor-pointer">
      {children}
    </div>
  );
};

export default PaystackPayment;
