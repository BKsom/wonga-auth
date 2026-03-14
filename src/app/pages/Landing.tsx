import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { ShieldCheck } from 'lucide-react';

export const Landing = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl tracking-tight text-slate-900">
            Welcome Back
          </h1>
          <p className="text-slate-600">
            Sign in to access your account or create a new one to get started.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Button
            onClick={() => navigate('/login')}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate('/register')}
            variant="outline"
            className="w-full h-12 border-slate-300 hover:bg-slate-50"
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};
