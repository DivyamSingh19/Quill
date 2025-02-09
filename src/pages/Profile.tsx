import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Link as LinkIcon, 
  Edit, 
  Camera,
  AtSign,
  Briefcase,
  Settings
} from 'lucide-react';

const Profile = () => {
  const [user] = useState({
    name: 'Sarah Wilson',
    username: '@sarahwilson',
    bio: "Product Designer | Art enthusiast | Coffee lover ☕️ Creating user-centered designs that bring joy and simplicity to people's lives.",
    email: 'sarah.wilson@example.com',
    location: 'San Francisco, CA',
    website: 'sarahwilson.design',
    joinDate: 'January 2024',
    role: 'Senior Product Designer',
    avatar: '/api/placeholder/150/150'
  });

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black text-white pt-2 px-2 py-2 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="relative group">
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-32 h-32 rounded-2xl object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <Camera className="w-6 h-6" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                  <p className="text-gray-400 text-lg">{user.username}</p>
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
              <p className="mt-4 text-gray-300 max-w-2xl">{user.bio}</p>
            </div>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex items-center gap-3 text-gray-300">
              <Briefcase className="w-5 h-5" />
              <span>{user.role}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <LinkIcon className="w-5 h-5" />
              <a href={`https://${user.website}`} className="hover:text-white transition-colors">
                {user.website}
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="w-5 h-5" />
              <span>Joined {user.joinDate}</span>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Settings */}
          <div className="bg-gray-900/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold">Account Settings</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Username</label>
                <input 
                  type="text" 
                  value={user.username}
                  className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  value={user.email}
                  className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Profile Settings */}
          <div className="bg-gray-900/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold">Profile Settings</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Bio</label>
                <textarea 
                  value={user.bio}
                  rows={3}
                  className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Location</label>
                <input 
                  type="text" 
                  value={user.location}
                  className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;