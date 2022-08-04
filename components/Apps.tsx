import { ViewGridIcon } from '@heroicons/react/outline';
import React, { useEffect, useRef } from 'react';

const Apps = () => {
  const appsList = useRef(null);
  const appsToggle = useRef(null);

  const closeApps = (e: any) => {
    if (!appsList.current.contains(e.target)) {
      appsList.current.classList.remove('open');
      appsToggle.current.classList.remove('open');
    }
  };
  const toggleApps = (e: any) => {
    e.preventDefault();
    appsList.current.classList.toggle('open');
    appsToggle.current.classList.toggle('open');
  };

  useEffect(() => {
    window.addEventListener('click', closeApps);
    return () => window.removeEventListener('click', closeApps);
  }, []);

  return (
    <div className="apps" ref={appsList}>
    </div>
  );
};

export default Apps;
