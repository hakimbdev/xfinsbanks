import React, { useState } from 'react';
import { TrendingUp, CheckCircle, Bell, BarChart, Shield, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaystackPayment from '../components/PaystackPayment';
import { useToast } from '../hooks/use-toast';

const Signals = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handlePaymentSuccess = (response: any) => {
    console.log('Payment successful:', response);
    toast({
      title: "Payment Successful!",
      description: "Your signal access payment of ₦56,000 has been processed. You will receive access details via email within 5 minutes.",
    });
    
    // Store payment info
    localStorage.setItem('signals_payment', JSON.stringify({
      reference: response.reference,
      amount: 56000,
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

  const generateReference = () => {
    return `xfins_signals_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const signalFeatures = [
    'Real-time trading signals via WhatsApp/Telegram',
    'Entry and exit points clearly marked',
    'Stop loss and take profit levels',
    'Risk management recommendations',
    'Market analysis with each signal',
    'Success rate tracking and statistics',
    '24/7 signal delivery during market hours',
    'Expert commentary on market conditions'
  ];

  const benefits = [
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Get signals delivered instantly to your phone via WhatsApp or Telegram.'
    },
    {
      icon: BarChart,
      title: 'High Accuracy',
      description: 'Our signals maintain a 75%+ success rate based on historical performance.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Every signal includes proper risk management guidelines and position sizing.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Signals are generated and delivered within seconds of market opportunities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TrendingUp className="h-16 w-16 text-green-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Forex Trading Signals
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Access professional-grade forex trading signals from our expert analysis team. 
              Boost your trading success with real-time market insights and actionable trade recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">See Our Results & Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results and engagement from our signals community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750147103/WhatsApp_Image_2025-03-13_at_11.32.05_8581b9cb_lt1r8q.jpg" alt="Ad 1" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750147105/WhatsApp_Image_2025-03-23_at_14.52.35_46851bf2_ypuj5k.jpg" alt="Ad 2" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750147104/WhatsApp_Image_2025-04-09_at_13.44.05_490949ed_sibqm1.jpg" alt="Ad 3" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750146396/GBPUSD_2025-06-16_13-53-17_thugea.png" alt="Ad 4" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750147295/WhatsApp_Image_2025-06-16_at_18.15.15_c575a5fa_ydslnl.jpg" alt="Ad 5" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750147103/WhatsApp_Image_2025-03-12_at_13.37.03_7bc11dfa_vfybrh.jpg" alt="Ad 6" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750147104/WhatsApp_Image_2025-04-09_at_13.44.05_490949ed_sibqm1.jpg" alt="Ad 7" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Email Input Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your email to get signal access
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
        </div>
      </section>

      {/* Signal Package */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Premium Signal Access</h2>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-5xl font-bold">₦56,000</span>
                <span className="text-green-200 ml-2">monthly</span>
              </div>
              <p className="text-green-100">
                Unlimited access to all trading signals and market analysis
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What's Included:</h3>
              <ul className="space-y-4 mb-8">
                {signalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {email ? (
                <PaystackPayment
                  amount={56000}
                  email={email}
                  reference={generateReference()}
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentClose}
                >
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                    Get Signal Access - ₦56,000/month
                  </button>
                </PaystackPayment>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg cursor-not-allowed"
                >
                  Enter Email Above to Subscribe
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Trading Signals?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert analysts use advanced technical analysis and market intelligence to deliver 
              high-quality trading signals that can help improve your trading performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Signals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sample Trading Signals
            </h2>
            <p className="text-xl text-gray-600">
              Here's what our premium signals look like
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">EUR/USD - BUY</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  ACTIVE
                </span>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><strong>Entry:</strong> 1.0850</p>
                <p><strong>Stop Loss:</strong> 1.0820</p>
                <p><strong>Take Profit:</strong> 1.0920</p>
                <p><strong>Risk/Reward:</strong> 1:2.3</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Strong bullish momentum after breaking resistance. Target ECB announcement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">GBP/JPY - SELL</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  CLOSED +65 PIPS
                </span>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><strong>Entry:</strong> 185.20</p>
                <p><strong>Stop Loss:</strong> 185.50</p>
                <p><strong>Take Profit:</strong> 184.55</p>
                <p><strong>Risk/Reward:</strong> 1:2.2</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Bearish divergence on 4H chart with resistance rejection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signals;
