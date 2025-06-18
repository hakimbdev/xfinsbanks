import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, DollarSign, BookOpen, Users, Shield } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General Questions",
      icon: <HelpCircle className="h-5 w-5" />,
      items: [
        {
          question: "What is xFins Banks Forex Academy?",
          answer: "xFins Banks Forex Academy is a comprehensive forex trading education platform that provides expert guidance, proven strategies, and mentorship to help traders master the art of forex trading and achieve financial success."
        },
        {
          question: "Who can join the academy?",
          answer: "Our academy is open to anyone interested in learning forex trading, from complete beginners to experienced traders looking to improve their skills. We offer programs suitable for all skill levels."
        },
        {
          question: "Do I need prior trading experience?",
          answer: "No prior trading experience is required. Our programs are designed to take you from beginner to advanced levels, with structured learning paths that build your knowledge progressively."
        },
        {
          question: "What makes xFins Banks different from other forex academies?",
          answer: "We offer personalized mentorship, proven trading strategies, real-time market analysis, and a supportive community. Our instructors are experienced traders who have achieved consistent success in the forex markets."
        }
      ]
    },
    {
      category: "Courses & Education",
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        {
          question: "What courses do you offer?",
          answer: "We offer a comprehensive curriculum including Forex Fundamentals, Technical Analysis, Risk Management, Advanced Trading Strategies, and specialized courses on specific currency pairs and market conditions."
        },
        {
          question: "How long does it take to complete a course?",
          answer: "Course duration varies depending on the program. Basic courses typically take 4-6 weeks, while advanced programs may take 8-12 weeks. You can learn at your own pace with lifetime access to course materials."
        },
        {
          question: "Are the courses available online?",
          answer: "Yes, all our courses are available online through our learning platform. You can access them anytime, anywhere, and learn at your own convenience."
        },
        {
          question: "Do you provide course materials?",
          answer: "Yes, all courses include comprehensive materials including video lessons, PDF guides, trading templates, and practice exercises. You'll also get access to our trading tools and resources."
        }
      ]
    },
    {
      category: "Mentorship & Support",
      icon: <Users className="h-5 w-5" />,
      items: [
        {
          question: "What is included in the mentorship program?",
          answer: "Our mentorship program includes one-on-one coaching sessions, personalized trading plans, regular progress reviews, direct access to experienced mentors, and ongoing support throughout your trading journey."
        },
        {
          question: "How often can I meet with my mentor?",
          answer: "Mentorship frequency depends on your chosen program. Typically, you'll have weekly or bi-weekly sessions, plus access to your mentor for urgent questions during market hours."
        },
        {
          question: "Are the mentors experienced traders?",
          answer: "Yes, all our mentors are experienced forex traders with proven track records. They have successfully traded the markets for years and are certified to provide professional guidance."
        },
        {
          question: "Can I get support outside of scheduled sessions?",
          answer: "Yes, premium mentorship programs include access to our support team and community forums where you can get help with questions and connect with other traders."
        }
      ]
    },
    {
      category: "Trading Signals",
      icon: <DollarSign className="h-5 w-5" />,
      items: [
        {
          question: "What are trading signals?",
          answer: "Trading signals are specific entry and exit recommendations for forex trades, based on our technical and fundamental analysis. They include entry price, stop loss, take profit levels, and market reasoning."
        },
        {
          question: "How accurate are your trading signals?",
          answer: "While we strive for high accuracy, no trading signals are 100% guaranteed. Our signals are based on thorough analysis and have shown consistent performance, but forex trading always involves risk."
        },
        {
          question: "How often do you provide signals?",
          answer: "We provide signals based on market opportunities, typically 3-5 signals per week. Signal frequency may vary depending on market conditions and volatility."
        },
        {
          question: "Do you provide signals for all currency pairs?",
          answer: "We focus on major and minor currency pairs that offer the best trading opportunities. Our signals cover EUR/USD, GBP/USD, USD/JPY, and other liquid pairs."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      icon: <DollarSign className="h-5 w-5" />,
      items: [
        {
          question: "How much do your programs cost?",
          answer: "Our pricing varies depending on the program and level of support. We offer different packages ranging from basic courses to premium mentorship programs. Contact us for current pricing information."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans to make our programs accessible. You can choose from monthly installments or pay in full with a discount."
        },
        {
          question: "Is there a money-back guarantee?",
          answer: "We offer a satisfaction guarantee for our educational programs. If you're not satisfied within the first 30 days, we'll work with you to address your concerns or provide a refund."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including credit/debit cards, bank transfers, and digital payment platforms. All payments are processed securely through our payment partners."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: <Shield className="h-5 w-5" />,
      items: [
        {
          question: "What if I have technical issues with the platform?",
          answer: "Our technical support team is available to help with any platform-related issues. You can contact us via email, phone, or through our support chat system."
        },
        {
          question: "Can I access the platform on mobile devices?",
          answer: "Yes, our learning platform is mobile-responsive and can be accessed on smartphones and tablets. However, for the best experience, we recommend using a desktop or laptop for trading activities."
        },
        {
          question: "What are the system requirements?",
          answer: "Our platform works on all modern browsers (Chrome, Firefox, Safari, Edge). You'll need a stable internet connection and a device with basic video streaming capabilities."
        },
        {
          question: "How do I reset my password?",
          answer: "You can reset your password using the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our forex trading academy
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    {category.icon}
                    <span className="ml-2">{category.category}</span>
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="px-6 py-4">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 hover:bg-gray-50"
                        >
                          <h3 className="text-lg font-medium text-gray-900 pr-4">
                            {item.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="mt-4 pl-2">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-blue-100 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="space-y-4">
              <p className="text-blue-100">
                <strong>Email:</strong> support@xfinsbanks.com
              </p>
              <p className="text-blue-100">
                <strong>Phone:</strong> +234 8062558567
              </p>
              <p className="text-blue-100">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (WAT)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 