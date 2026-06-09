import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BusinessLineSwitcher: React.FC = () => {
  const { pathname } = useLocation();
  const isCourier = pathname.startsWith('/courier');
  const isNemt = pathname.startsWith('/nemt');

  const base = 'px-4 py-1.5 text-sm font-semibold rounded-full transition-all';
  const active = 'bg-brand-600 text-white shadow-md';
  const inactive = 'text-slate-600 hover:text-brand-600';

  return (
    <div className="flex items-center bg-slate-100 rounded-full p-1">
      <Link to="/courier" className={`${base} ${isCourier ? active : inactive}`}>
        Courier
      </Link>
      <Link to="/nemt" className={`${base} ${isNemt ? active : inactive}`}>
        NEMT
      </Link>
    </div>
  );
};

export default BusinessLineSwitcher;
