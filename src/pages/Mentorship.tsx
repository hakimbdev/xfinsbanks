
import React, { useState } from 'react';
import { CheckCircle, Video, Users, Clock, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaystackPayment from '../components/PaystackPayment';
import { useToast } from '../hooks/use-toast';

const Mentorship = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handlePaymentSuccess = (response: any, type: string, amount: number) => {
    console.log('Payment successful:', response);
    toast({
      title: "Payment Successful!",
      description: `Your ${type} mentorship payment of ₦${amount.toLocaleString()} has been processed. You will receive access details via email.`,
    });
    
    // Here you would typically store the payment info in your backend
    localStorage.setItem('mentorship_payment', JSON.stringify({
      reference: response.reference,
      type: type,
      amount: amount,
      email: email,
      date: new Date().toISOString()
    }));
  };

  const handlePaymentClose = () => {
    toast({
      title: "Payment Cancelled",
      description: "Your payment was cancelled. You can try again anytime.",
      variant: "destructive"
    });
  };

  const generateReference = (type: string) => {
    return `xfins_${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const mentorshipOptions = [
    {
      type: 'Virtual',
      price: 50000,
      icon: Video,
      features: [
        'Live video sessions via Zoom',
        'Screen sharing for chart analysis',
        'Recorded sessions for review',
        'WhatsApp support group access',
        'Trading journal review',
        'Risk management strategies',
        'Market analysis techniques',
        'Psychology of trading'
      ],
      popular: false
    },
    {
      type: 'Physical',
      price: 120000,
      icon: Users,
      features: [
        'In-person training sessions',
        'Direct hands-on guidance',
        'Real-time market observation',
        'Physical trading materials',
        'Networking opportunities',
        'Advanced trading setups',
        'Professional trading environment',
        'Exclusive physical workshops'
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Forex Mentorship Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get personalized guidance from expert forex traders. Choose between virtual or physical mentorship 
              sessions tailored to your learning style and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Email Input Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your email to proceed with payment
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
      </section>

      {/* Mentorship Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mentorshipOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  option.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-gray-900 text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${option.popular ? 'pt-16' : ''}`}>
                  <div className="flex items-center mb-6">
                    <option.icon className="h-12 w-12 text-blue-700 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {option.type} Mentorship
                      </h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-blue-700">₦{option.price.toLocaleString()}</span>
                        <span className="text-gray-500 ml-2">per session</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {email ? (
                    <PaystackPayment
                      amount={option.price}
                      email={email}
                      reference={generateReference(option.type.toLowerCase())}
                      onSuccess={(response) => handlePaymentSuccess(response, option.type, option.price)}
                      onClose={handlePaymentClose}
                    >
                      <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                        Pay Now - ₦{option.price.toLocaleString()}
                      </button>
                    </PaystackPayment>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg cursor-not-allowed"
                    >
                      Enter Email Above to Pay
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Gain from Our Mentorship
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-16 w-16 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Sessions scheduled around your availability with both weekday and weekend options.
              </p>
            </div>
            
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Mentors</h3>
              <p className="text-gray-600">
                Learn from certified professionals with 10+ years of forex trading experience.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-16 w-16 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Access</h3>
              <p className="text-gray-600">
                Join our exclusive community of traders for ongoing support and networking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentorship;
