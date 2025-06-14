import { useState } from "react"
import { SettingsForm } from "../Components/settings-form"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile Settings" },
    { id: "notifications", label: "Notifications" },
    { id: "security", label: "Security" },
    { id: "preferences", label: "Preferences" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div>
        <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                activeTab === tab.id ? "bg-white text-gray-950 shadow-sm" : "hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "profile" && (
          <div className="mt-4">
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Profile Settings</h2>
                <p className="text-gray-600">Update your profile information and contact details</p>
              </div>
              <div className="p-6">
                <SettingsForm />
              </div>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="mt-4">
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Notification Preferences</h2>
                <p className="text-gray-600">Choose how you want to be notified about updates</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Project Submissions</h4>
                    <p className="text-sm text-gray-600">Get notified when students submit projects</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Messages</h4>
                    <p className="text-sm text-gray-600">Get notified about new messages</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="mt-4">
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Security Settings</h2>
                <p className="text-gray-600">Manage your password and security preferences</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Change Password</h4>
                  <div className="space-y-2">
                    <input type="password" placeholder="Current Password" className="w-full p-2 border rounded" />
                    <input type="password" placeholder="New Password" className="w-full p-2 border rounded" />
                    <input type="password" placeholder="Confirm New Password" className="w-full p-2 border rounded" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="mt-4">
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Application Preferences</h2>
                <p className="text-gray-600">Customize your dashboard experience</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Language</h4>
                  <select className="w-full p-2 border rounded">
                    <option>English</option>
                    <option>Urdu</option>
                  </select>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Time Zone</h4>
                  <select className="w-full p-2 border rounded">
                    <option>Pakistan Standard Time (PST)</option>
                    <option>UTC</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Dark Mode</h4>
                    <p className="text-sm text-gray-600">Switch to dark theme</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
