import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard content will go here */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard</h2>
          <p className="text-gray-600">
            This is where you'll be able to track your progress and access your trading tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 