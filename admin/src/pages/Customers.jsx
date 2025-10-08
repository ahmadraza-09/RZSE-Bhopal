import React, { useState } from "react";
import {
  Search,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Package,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { customers } from "../data/mockData";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Customers Management
              </h1>
              <p className="text-gray-600">
                View and manage customer information
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCustomers.map((customer) => (
                <div
                  key={customer.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-2xl font-bold">
                      {customer.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 truncate">
                        {customer.name}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">
                        {customer.id}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm truncate">{customer.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm">{customer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm">
                        Joined{" "}
                        {new Date(customer.joinedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-blue-600 mb-1">
                        <Package className="w-4 h-4" />
                        <span className="text-2xl font-bold">
                          {customer.totalBookings}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Bookings</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-green-600 mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-2xl font-bold">
                          {(customer.totalSpent / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Total Spent</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-gray-600">Last Service</p>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(customer.lastService).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredCustomers.length === 0 && (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-gray-600 text-lg">
                  No customers found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
