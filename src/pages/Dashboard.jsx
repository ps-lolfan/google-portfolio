import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h2 className="text-2xl font-bold">Google Prep</h2>
        <ul className="mt-5 space-y-3">
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">DSA Tracker</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">System Design</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Mock Interviews</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-semibold">Welcome to Your Google Prep Dashboard</h1>
        <div className="mt-5 grid grid-cols-3 gap-4">
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Daily Goals</h2>
            <p className="text-gray-600">Track your daily targets and achievements.</p>
          </div>
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">DSA Progress</h2>
            <p className="text-gray-600">Log & review LeetCode problems solved.</p>
          </div>
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">System Design</h2>
            <p className="text-gray-600">Notes and HLD/LLD diagrams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
