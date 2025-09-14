import { useState } from 'react';
import { Building2, User, Phone, Mail, Info, HelpCircle, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface RegisterPageProps {
  onRegister: (data: any) => void;
}

export function RegisterPage({ onRegister }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    username: '',
    phone: '',
    email: ''
  });
  const [activeTab, setActiveTab] = useState<'register' | 'about' | 'help' | 'contact'>('register');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && formData.username && formData.phone && formData.email) {
      onRegister(formData);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1626470159396-8a6b361ab3a7"
          alt="Factory background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Building2 size={32} className="text-white" />
          </div>
          <h1 className="text-white text-2xl mb-1">Vidyutrack ⚡</h1>
          <p className="text-gray-400 text-sm">Smart Industrial Energy Manager</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-around mb-6">
          <button 
            className={`text-sm font-medium px-3 py-2 rounded-lg ${activeTab === 'register' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
          <button 
            className={`text-sm font-medium px-3 py-2 rounded-lg ${activeTab === 'about' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('about')}
          >
            About Us
          </button>
          <button 
            className={`text-sm font-medium px-3 py-2 rounded-lg ${activeTab === 'help' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('help')}
          >
            Help
          </button>
          <button 
            className={`text-sm font-medium px-3 py-2 rounded-lg ${activeTab === 'contact' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 border border-gray-700/50 shadow-2xl">
          {activeTab === 'register' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName" className="text-gray-300 text-sm mb-2 block">Company Name</Label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                      className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="username" className="text-gray-300 text-sm mb-2 block">Username</Label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter username"
                      value={formData.username}
                      onChange={(e) => handleChange('username', e.target.value)}
                      className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300 text-sm mb-2 block">Phone</Label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300 text-sm mb-2 block">Email</Label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white rounded-xl py-3 transition-all duration-200 shadow-lg hover:shadow-xl">
                Register Company
              </Button>
            </form>
          )}

          {activeTab === 'about' && (
            <div className="text-gray-300 space-y-4">
              <h2 className="text-white text-lg flex items-center space-x-2">
                <Info className="text-teal-400" /> <span>About Vidyutrack</span>
              </h2>
              <p>Vidyutrack is a Smart Industrial Energy Manager that helps factories monitor, analyze, and optimize their energy usage. It provides dashboards, AI-powered suggestions, alerts, and predictive forecasts to reduce costs and save energy.</p>
              
              <h3 className="text-white mt-4">Requirements:</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Industrial IoT sensors for machine energy tracking</li>
                <li>Internet connectivity (Wi-Fi or 4G/5G)</li>
                <li>Factory registration on the app</li>
              </ul>

              <h3 className="text-white mt-4">Products:</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl border border-gray-700">
                  <span>⚡ Smart Energy IoT Sensor</span>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center space-x-1">
                    <ShoppingCart size={16} /> <span>Buy</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl border border-gray-700">
                  <span>📟 Industrial Controller Device</span>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center space-x-1">
                    <ShoppingCart size={16} /> <span>Buy</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl border border-gray-700">
                  <span>🌱 Carbon Monitoring Add-on</span>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center space-x-1">
                    <ShoppingCart size={16} /> <span>Buy</span>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'help' && (
            <div className="text-gray-300 space-y-3">
              <h2 className="text-white text-lg flex items-center space-x-2">
                <HelpCircle className="text-teal-400" /> <span>Help Center</span>
              </h2>
              <p className="text-sm">💡 Need assistance? Here are some FAQs:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>How to register my company? → Fill the form in Register tab</li>
                <li>How to monitor energy? → Use Dashboard after login</li>
                <li>How to save energy? → Follow AI suggestions in Profile</li>
              </ul>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="text-gray-300 space-y-3">
              <h2 className="text-white text-lg">📞 Contact Us</h2>
              <p className="text-sm">Have questions? Reach out:</p>
              <ul className="text-sm space-y-1">
                <li>Email: support@vidyutrack.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Hyderabad, India</li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © 2025 Vidyutrack. All rights reserved.
        </p>
      </div>
    </div>
  );
}
