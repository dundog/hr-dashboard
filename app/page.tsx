"use client";

import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Overview of your HR management system
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Employees", value: "48" },
            { title: "On Leave Today", value: "5" },
            { title: "Pending Requests", value: "3" },
            { title: "Departments", value: "6" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40 transition"
            >
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-3xl font-bold mt-3 text-gray-800">
                {item.value}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Activity Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/40"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              John submitted a leave request
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              Sarah approved a leave request
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
              New employee added to Sales department
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
