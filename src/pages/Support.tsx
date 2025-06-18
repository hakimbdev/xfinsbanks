import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Support request submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '', priority: 'medium' });
  };

  const supportMethods = [
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+234 8062558567",
      availability: "Mon-Fri: 9:00 AM - 6:00 PM (WAT)",
      response: "Immediate response during business hours"
    },
    {
      icon: <Mail className="h-8 w-8 text-green-600" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@xfinsbanks.com",
      availability: "24/7",
      response: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on website",
      availability: "Mon-Fri: 9:00 AM - 6:00 PM (WAT)",
      response: "Instant response"
    }
  ];

  const commonIssues = [
    {
      category: "Account & Access",
      issues: [
        "Can't log into my account",
        "Forgot password",
        "Account verification issues",
        "Payment processing problems"
      ]
    },
    {
      category: "Course & Learning",
      issues: [
        "Can't access course materials",
        "Video playback issues",
        "Download problems",
        "Course progress not saving"
      ]
    },
    {
      category: "Trading & Signals",
      issues: [
        "Not receiving trading signals",
        "Signal delivery delays",
        "Platform compatibility issues",
        "Trading tool access problems"
      ]
    },
    {
      category: "Technical Issues",
      issues: [
        "Website not loading",
        "Mobile app problems",
        "Browser compatibility",
        "Performance issues"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-lg text-gray-600">
              We're here to help you succeed in your forex trading journey
            </p>
          </div>

          {/* Support Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {supportMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-gray-900">{method.contact}</p>
                  <p className="text-gray-600 flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {method.availability}
                  </p>
                  <p className="text-gray-600">{method.response}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="medium">Medium - Account or course issue</option>
                      <option value="high">High - Urgent technical problem</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your issue or question in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">support@xfinsbanks.com</p>
                    <p className="text-gray-600">info@xfinsbanks.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+234 8062558567</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM (WAT)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600">
                      Suite 302A Bahamas Plaza<br />
                      Gudu Market, Abuja<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Emergency Support</h3>
                  <p className="text-blue-800 text-sm">
                    For urgent technical issues during non-business hours, please email us with "URGENT" in the subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Issues & Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commonIssues.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> Before contacting support, please check our FAQ page as many common questions are already answered there.
              </p>
            </div>
          </div>

          {/* Response Times */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Response Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-blue-100">Immediate response during business hours</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-blue-100">Within 24 hours</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-blue-100">Instant response during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 