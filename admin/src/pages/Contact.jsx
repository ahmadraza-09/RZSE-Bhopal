import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Search,
  Filter,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { contacts as mockContacts } from "../data/mockData";

const Contact = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  // Update status in mock data
  const updateContactStatus = (contactId, newStatus) => {
    const updatedContacts = contacts.map((contact) =>
      contact._id === contactId
        ? { ...contact, status: newStatus, updatedAt: new Date().toISOString() }
        : contact
    );
    setContacts(updatedContacts);

    if (selectedContact && selectedContact._id === contactId) {
      setSelectedContact({ ...selectedContact, status: newStatus });
    }
  };

  // Delete contact in mock data
  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact._id !== contactId
    );
    setContacts(updatedContacts);

    if (selectedContact && selectedContact._id === contactId) {
      setSelectedContact(null);
    }
  };

  // Filtered contacts
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !statusFilter || contact.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Status helpers
  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-600";
      case "responded":
        return "bg-yellow-100 text-yellow-600";
      case "resolved":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "new":
        return <Clock size={16} />;
      case "responded":
        return <MessageSquare size={16} />;
      case "resolved":
        return <CheckCircle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const statusCounts = {
    new: contacts.filter((c) => c.status === "new").length,
    responded: contacts.filter((c) => c.status === "responded").length,
    resolved: contacts.filter((c) => c.status === "resolved").length,
    total: contacts.length,
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Contact Queries
              </h3>
              <p className="text-gray-600">
                Manage customer inquiries and feedback
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Queries</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {statusCounts.total}
                  </p>
                </div>
                <MessageSquare className="h-8 w-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {statusCounts.new}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Responded</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {statusCounts.responded}
                  </p>
                </div>
                <MessageSquare className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Resolved</p>
                  <p className="text-2xl font-bold text-green-600">
                    {statusCounts.resolved}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search queries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">All Status</option>
                  <option value="new">New</option>
                  <option value="responded">Responded</option>
                  <option value="resolved">Resolved</option>
                </select>
                <Filter
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
            </div>
          </div>

          {/* Contact List & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b">
                <h4 className="font-semibold text-gray-800">
                  Queries ({filteredContacts.length})
                </h4>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {filteredContacts.length === 0 ? (
                  <div className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No contact queries found</p>
                  </div>
                ) : (
                  filteredContacts.map((contact) => (
                    <div
                      key={contact._id}
                      onClick={() => setSelectedContact(contact)}
                      className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        selectedContact?._id === contact._id
                          ? "bg-blue-50 border-blue-200"
                          : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-gray-800 truncate">
                          {contact.name}
                        </h5>
                        <div
                          className={`flex items-center space-x-1 px-2 py-1 text-xs rounded-full ${getStatusColor(
                            contact.status
                          )}`}
                        >
                          {getStatusIcon(contact.status)}
                          <span className="capitalize">{contact.status}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 truncate">
                        {contact.subject}
                      </p>
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                        {contact.message}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{contact.email}</span>
                        <span>
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {selectedContact ? (
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Contact Details
                  </h4>
                  <div className="flex space-x-2 mb-4 flex-wrap gap-2">
                    <button
                      onClick={() =>
                        updateContactStatus(selectedContact._id, "new")
                      }
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        selectedContact.status === "new"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                      }`}
                    >
                      New
                    </button>
                    <button
                      onClick={() =>
                        updateContactStatus(selectedContact._id, "responded")
                      }
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        selectedContact.status === "responded"
                          ? "bg-yellow-600 text-white"
                          : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                      }`}
                    >
                      Responded
                    </button>
                    <button
                      onClick={() =>
                        updateContactStatus(selectedContact._id, "resolved")
                      }
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        selectedContact.status === "resolved"
                          ? "bg-green-600 text-white"
                          : "bg-green-100 text-green-600 hover:bg-green-200"
                      }`}
                    >
                      Resolved
                    </button>
                    <button
                      onClick={() => deleteContact(selectedContact._id)}
                      className="px-3 py-1 text-sm rounded-lg transition-colors bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="space-y-4">
                    <p>
                      <strong>Name:</strong> {selectedContact.name}
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${selectedContact.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {selectedContact.email}
                      </a>
                    </p>
                    {selectedContact.phone && (
                      <p>
                        <strong>Phone:</strong>{" "}
                        <a
                          href={`tel:${selectedContact.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {selectedContact.phone}
                        </a>
                      </p>
                    )}
                    <p>
                      <strong>Subject:</strong> {selectedContact.subject}
                    </p>
                    <p>
                      <strong>Message:</strong> {selectedContact.message}
                    </p>
                    <p>
                      <strong>Status:</strong> {selectedContact.status}
                    </p>
                    <p>
                      <strong>Created:</strong>{" "}
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </p>
                    <p>
                      <strong>Last Updated:</strong>{" "}
                      {new Date(selectedContact.updatedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Select a query to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
