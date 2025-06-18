import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, TrendingUp, Award, Shield, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert Education',
      description: 'Learn from seasoned forex professionals with years of market experience.'
    },
    {
      icon: Users,
      title: 'Personal Mentorship',
      description: 'Get one-on-one guidance tailored to your trading style and goals.'
    },
    {
      icon: TrendingUp,
      title: 'Live Trading Signals',
      description: 'Access real-time trading signals from our expert analysis team.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Join thousands of successful traders who have achieved consistent profits.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Master the art of protecting your capital with advanced risk strategies.'
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'Learn to trade major currency pairs across international markets.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Forex Trading with
              <span className="text-yellow-400 block">xFins Banks Academy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your financial future with expert forex education, personalized mentorship, 
              and proven trading strategies from industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mentorship"
                className="bg-yellow-500 hover:bg-yellow-600 text-white-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Register Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/signals"
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Get Trading Signals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose xFins Banks Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive forex education with hands-on mentorship and real-time market insights 
              to help you become a successful trader.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Photo */}
      <section className="flex justify-center items-center py-8 bg-white">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg"
            alt="CEO"
            className="mx-auto rounded-full shadow-lg w-40 h-40 object-cover border-4 border-blue-700"
          />
          <h2 className="mt-4 text-2xl font-bold text-blue-900">Meet Our CEO</h2>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect learning path for your forex trading journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mentorship Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Forex Mentorship</h3>
              <p className="text-blue-100 mb-6">
                Get personalized guidance from expert traders. Choose between virtual or physical mentorship sessions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Virtual Mentorship</span>
                  <span className="font-semibold">$50</span>
                </div>
                <div className="flex justify-between">
                  <span>Physical Mentorship</span>
                  <span className="font-semibold">$75</span>
                </div>
              </div>
              <Link
                to="/mentorship"
                className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Join the Mentorship <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Signals Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Trading Signals</h3>
              <p className="text-green-100 mb-6">
                Access real-time forex trading signals from our expert analysis team and boost your trading success.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Signal Access</span>
                  <span className="font-semibold">$35</span>
                </div>
                <div className="text-green-100 text-sm">
                  • Real-time notifications
                  • Expert analysis
                  • Risk management tips
                </div>
              </div>
              <Link
                to="/signals"
                className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Signals <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the achievements of our students and the impact of our mentorship program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Certificates */}
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750148578/278598357_136782558898093_1520794420140711116_n_y1lwef.png" alt="Mentorship Certificate 1" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750148578/480946637_671067505492616_8574909241593473290_n_czjtv7.jpg" alt="Mentorship Certificate 2" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750148578/488925589_702448945687805_1773178982632362923_n_khqxby.jpg" alt="Mentorship Certificate 3" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Videos */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/cX8lceDShz8" title="Success Story Video 1" allowFullScreen className="w-full h-64 rounded-xl shadow-lg"></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/OXUxnntzJ9M" title="Success Story Video 2" allowFullScreen className="w-full h-64 rounded-xl shadow-lg"></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/1QTWfNcv3nQ" title="Success Story Video 3" allowFullScreen className="w-full h-64 rounded-xl shadow-lg"></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/RLcVStqla-Q" title="Success Story Video 4" allowFullScreen className="w-full h-64 rounded-xl shadow-lg"></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/Px-5OHSd-8I" title="Success Story Video 5" allowFullScreen className="w-full h-64 rounded-xl shadow-lg"></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/GJwuoti81G4" title="Success Story Video 6" allowFullScreen className="w-full h-64 rounded-xl shadow-lg"></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/RLcVStqla-Q" title="Success Story Video 7" allowFullScreen className="w-full h-64 rounded-xl shadow-lg"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Community & Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See real results and community engagement from our students and traders.
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

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Forex Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of successful traders and take the first step towards financial freedom.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
