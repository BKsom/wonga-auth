import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { LogOut, User, Mail, UserCircle } from 'lucide-react';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl tracking-tight text-slate-900">
              Dashboard
            </h1>
            <p className="text-slate-600 mt-1">
              Welcome back, {user.firstName}
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-slate-300 hover:bg-slate-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </Button>
        </div>

        {/* User Info Card */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <div className="p-8">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <UserCircle className="w-12 h-12 text-white" />
              </div>

              {/* User Details */}
              <div className="flex-1">
                <h2 className="text-xl text-slate-900 mb-6">
                  Account Information
                </h2>

                <div className="space-y-5">
                  {/* Full Name */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 mb-1">Full name</p>
                      <p className="text-slate-900">
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 mb-1">Email address</p>
                      <p className="text-slate-900">{user.email}</p>
                    </div>
                  </div>

                  {/* Account ID */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-slate-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 mb-1">Account ID</p>
                      <p className="text-slate-900 font-mono text-sm">{user.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm text-slate-600">Status</p>
            </div>
            <p className="text-slate-900">Active</p>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <p className="text-sm text-slate-600">Member since</p>
            </div>
            <p className="text-slate-900">
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <p className="text-sm text-slate-600">Account type</p>
            </div>
            <p className="text-slate-900">Standard</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
