import React, { useState } from "react";
import { Save, Bell, Lock, Globe, Mail, LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useAdminAuth } from "../contexts/AuthContext";

const Settings = () => {
  const { logout, adminUser } = useAdminAuth();
  const [settings, setSettings] = useState({
    siteName: "Repair Zone",
    siteEmail: "admin@gmail.com",
    sitePhone: "+91 98765 43210",
    siteAddress: "123 Service Street, Tech City, IN 400001",
    emailNotifications: true,
    smsNotifications: true,
    bookingNotifications: true,
    reviewNotifications: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Settings
              </h1>
              <p className="text-gray-600">Manage your application settings</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-2 text-blue-600" />
                  General Settings
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={settings.siteName}
                      onChange={(e) =>
                        setSettings({ ...settings, siteName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={settings.siteEmail}
                      onChange={(e) =>
                        setSettings({ ...settings, siteEmail: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={settings.sitePhone}
                      onChange={(e) =>
                        setSettings({ ...settings, sitePhone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={settings.siteAddress}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          siteAddress: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Bell className="w-6 h-6 mr-2 text-blue-600" />
                  Notification Settings
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      key: "emailNotifications",
                      label: "Email Notifications",
                      desc: "Receive notifications via email",
                    },
                    {
                      key: "smsNotifications",
                      label: "SMS Notifications",
                      desc: "Receive notifications via SMS",
                    },
                    {
                      key: "bookingNotifications",
                      label: "Booking Notifications",
                      desc: "Get notified about new bookings",
                    },
                    {
                      key: "reviewNotifications",
                      label: "Review Notifications",
                      desc: "Get notified about new reviews",
                    },
                  ].map((notif) => (
                    <div
                      key={notif.key}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {notif.label}
                        </h3>
                        <p className="text-sm text-gray-600">{notif.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[notif.key]}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              [notif.key]: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Save Settings</span>
              </button>
              <button
                onClick={logout}
                className="flex items-center justify-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-300 bg-red-600 cursor-pointer text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
