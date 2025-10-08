import React from "react";
import {
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  Star,
  Activity,
  MessageSquare,
  Bell,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import {
  dashboardStats,
  recentActivity,
  revenueData,
  serviceDistribution,
  contacts,
} from "../data/mockData";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: dashboardStats.totalBookings,
      change: "+12%",
      icon: Calendar,
      color: "blue",
    },
    {
      title: "Total Revenue",
      value: `₹${(dashboardStats.totalRevenue / 1000).toFixed(0)}K`,
      change: "+18%",
      icon: DollarSign,
      color: "green",
    },
    {
      title: "Total Customers",
      value: dashboardStats.totalCustomers,
      change: "+8%",
      icon: Users,
      color: "purple",
    },
    {
      title: "New Quiries",
      value: dashboardStats.newQuiries,
      change: "+0.2",
      icon: MessageSquare,
      color: "yellow",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      yellow: "bg-yellow-100 text-yellow-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex justify-between item-center">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Dashboard Overview
                </h1>
                <p className="text-gray-600">
                  Welcome back! Here's what's happening today.
                </p>
              </div>

              <div>
                <Bell className="cursor-pointer" />
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg ${getColorClasses(
                        stat.color
                      )}`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-green-600 text-sm font-semibold flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue and Service Distribution */}
            {/* <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Monthly Revenue
                </h2>
                <div className="space-y-4">
                  {revenueData.map((data, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600 font-medium">
                        {data.month}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div className="w-48 bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-blue-800 h-3 rounded-full"
                            style={{
                              width: `${(data.revenue / 60000) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-gray-900 font-semibold w-20 text-right">
                          ₹{(data.revenue / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Service Distribution
                </h2>
                <div className="space-y-4">
                  {serviceDistribution.map((service, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {service.service}
                        </span>
                        <span className="text-sm text-gray-600">
                          {service.bookings} bookings
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                            style={{
                              width: `${(service.bookings / 45) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          ₹{(service.revenue / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Recent Activity and Quick Stats */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 pb-4 border-b last:border-0"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          activity.type === "booking"
                            ? "bg-blue-100 text-blue-600"
                            : activity.type === "completion"
                            ? "bg-green-100 text-green-600"
                            : activity.type === "payment"
                            ? "bg-purple-100 text-purple-600"
                            : activity.type === "review"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        <Activity className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">
                          {activity.action}
                        </p>
                        <p className="text-sm text-gray-600">{activity.user}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Quick Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">Pending</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {dashboardStats.pendingBookings}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Completed Today</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {dashboardStats.completedToday}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-700">Satisfaction</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {dashboardStats.customerSatisfaction}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Monthly Target</h3>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-100">₹125K / ₹150K</span>
                      <span className="font-semibold">83%</span>
                    </div>
                    <div className="w-full bg-blue-900 rounded-full h-3">
                      <div
                        className="bg-white h-3 rounded-full"
                        style={{ width: "83%" }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-blue-100">
                    ₹25K remaining to reach monthly target
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
