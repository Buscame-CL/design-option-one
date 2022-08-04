import {
  AdjustmentsIcon,
  ChatAltIcon,
  ClockIcon,
  CollectionIcon,
  EyeOffIcon,
  HomeIcon,
  InformationCircleIcon,
  StatusOfflineIcon,
  UserGroupIcon,
  XIcon
} from '@heroicons/react/outline';
import React, { forwardRef, useEffect, useRef } from 'react';

const Sidebar = forwardRef((props, ref) => {
  const sidebarList = useRef(null);

  // @ts-ignore
  const closeSidebar = () => ref.current.classList.remove('open');

  useEffect(() => {
    const sidebarToggle = document.querySelector('.sidebarToggle');

    const hideSidebar = (e) => {
      if (sidebarList.current.contains(e.target) || sidebarToggle.contains(e.target)) {
        return;
      }
      // @ts-ignore
      ref.current.classList.remove('open');
    };
    window.addEventListener('click', hideSidebar);
    return () => window.removeEventListener('click', hideSidebar);
  }, []);

  return (
    // @ts-ignore
    <div className="sidebar" ref={ref}>
      <ul ref={sidebarList}>
        <li className="ilogo">
          <img src="/media/logo-name-crop.png" alt="Buscame.CL logo" />
          <button className="icon closeSidebar" onClick={closeSidebar}>
            <XIcon />
          </button>
        </li>
        <li>
          <HomeIcon /> Home
        </li>
        <li>
          <ClockIcon /> Busquedas Anteriores
        </li>
        <li>
          <CollectionIcon /> PDF's
        </li>
        <li>
          <StatusOfflineIcon /> Busquedas Offline
        </li>
        <hr />
        <li>
          <AdjustmentsIcon /> Configuracion
        </li>
        <li>
          <UserGroupIcon /> Privacidad & Datos
        </li>
        <li>
          <InformationCircleIcon /> Suporte & Ayuda
        </li>
        <li>
          <ChatAltIcon /> Envia tu Feedback
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
