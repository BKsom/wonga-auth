import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Outlet />
    </div>
  );
};
