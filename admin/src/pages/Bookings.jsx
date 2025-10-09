import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { bookings as initialBookings } from "../data/mockData";

const Bookings = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-700",
      confirmed: "bg-blue-100 text-blue-700",
      "in-progress": "bg-purple-100 text-purple-700",
      completed: "bg-green-100 text-green-700",
      cancelled: "bg-red-100 text-red-700",
    };
    return colors[status] || colors.pending;
  };

  const updateStatus = (bookingId, newStatus) => {
    setBookings(
      bookings.map((b) =>
        b.id === bookingId ? { ...b, status: newStatus } : b
      )
    );
    if (selectedBooking?.id === bookingId) {
      setSelectedBooking({ ...selectedBooking, status: newStatus });
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Bookings Management
              </h1>
              <p className="text-gray-600">
                View and manage all service bookings
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by customer, booking ID, or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                        Booking ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                        Customer
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                        Service
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                        Status
                      </th>
                      {/* <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                        Amount
                      </th> */}
                      <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {booking.id}
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900">
                            {booking.customerName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.phone}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900">{booking.service}</p>
                          <p className="text-sm text-gray-600">
                            {booking.applianceBrand}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900">
                            {new Date(
                              booking.preferredDate
                            ).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.preferredTime}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              booking.status
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        {/* <td className="px-6 py-4 font-semibold text-gray-900">
                          ₹{booking.amount}
                        </td> */}
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => setSelectedBooking(booking)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedBooking && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBooking(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b sticky top-0 bg-white flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Booking Details
              </h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">
                    Customer Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">
                          {selectedBooking.customerName.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {selectedBooking.customerName}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{selectedBooking.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{selectedBooking.email}</span>
                    </div>
                    <div className="flex items-start space-x-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                      <span className="text-sm">{selectedBooking.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">
                    Service Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Service Type</p>
                      <p className="font-medium text-gray-900">
                        {selectedBooking.service}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Appliance Brand</p>
                      <p className="font-medium text-gray-900">
                        {selectedBooking.applianceBrand}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        Scheduled Date & Time
                      </p>
                      <p className="font-medium text-gray-900">
                        {new Date(
                          selectedBooking.preferredDate
                        ).toLocaleDateString()}{" "}
                        - {selectedBooking.preferredTime}
                      </p>
                    </div>
                    {selectedBooking.assignedTechnician && (
                      <div>
                        <p className="text-sm text-gray-600">
                          Assigned Technician
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedBooking.assignedTechnician}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  Issue Description
                </h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                  {selectedBooking.issueDescription}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{selectedBooking.amount}
                  </p>
                </div>
                <div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      selectedBooking.status
                    )}`}
                  >
                    {selectedBooking.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t">
                {selectedBooking.status === "pending" && (
                  <button
                    onClick={() =>
                      updateStatus(selectedBooking.id, "confirmed")
                    }
                    className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Confirm Booking</span>
                  </button>
                )}
                {selectedBooking.status === "confirmed" && (
                  <button
                    onClick={() =>
                      updateStatus(selectedBooking.id, "in-progress")
                    }
                    className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Clock className="w-5 h-5" />
                    <span>Mark In Progress</span>
                  </button>
                )}
                {selectedBooking.status === "in-progress" && (
                  <button
                    onClick={() =>
                      updateStatus(selectedBooking.id, "completed")
                    }
                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Mark Completed</span>
                  </button>
                )}
                {selectedBooking.status !== "completed" &&
                  selectedBooking.status !== "cancelled" && (
                    <button
                      onClick={() =>
                        updateStatus(selectedBooking.id, "cancelled")
                      }
                      className="flex-1 bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Cancel Booking
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookings;
