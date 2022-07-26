import { MenuAlt1Icon, MoonIcon, SearchIcon, SparklesIcon, SunIcon, UserCircleIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Apps from '../components/Apps';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const router = useRouter();
  const toggleSwitch = useRef(null);
  const appDiv = useRef(null);
  const sidebarRef = useRef(null);
  const searchInput = useRef(null);
  const searchBox = useRef(null);
  const [searchType, setSearchType] = useState(true);

  const toggleTheme = (e: any) => {
    e.preventDefault();
    appDiv.current.classList.toggle('dark');
    toggleSwitch.current.classList.toggle('dark');
  };

  const openSidebar = (e: any) => {
    e.preventDefault();
    sidebarRef.current.classList.add('open');
  };

  const search = (e: any) => {
    e.preventDefault();
    const query = searchInput.current.value;
    if (!query) {
      searchInput.current.focus();
    } else {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="app" ref={appDiv}>
      <Head>
        <title>Buscame.CL</title>
        <link
          rel="icon"
          href="/media/ico.png"
        />
      </Head>

      <header>
        <Sidebar ref={sidebarRef} />
        <span>
          <button className="sidebarToggle icon" onClick={openSidebar}>
            <MenuAlt1Icon />
          </button>
          <ul className="nav">
{/*           // <li>Images</li>
            // <li>Videos</li>
            // <li>News</li>
// <li>Explore</li>*/}
          </ul>
        </span>
        <span>
          <div className="themeToggle icon" ref={toggleSwitch} onClick={toggleTheme}>
            <SunIcon className="sun" />
            <MoonIcon className="moon" />
          </div>
          {/* <Apps />*/}
          <div className="user">
            <UserCircleIcon />
            <span className="uid">
              <span className="top">My Account</span>
            </span>
          </div>
        </span>
      </header>

      <main>
        <div className="logo">
          <img src="/media/logo-crop.png" alt="buscame logo" />
          <img className="shadow" src="/media/logo-crop.png" alt="buscame logo" />
        </div>
        <div className="searchContainer">
          <form onSubmit={search} className="search" ref={searchBox}>
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Digite nombre o RUT"
              ref={searchInput}
              onFocus={() => searchBox.current.classList.add('focus')}
              onBlur={() => searchBox.current.classList.remove('focus')}
            />
            <button type="submit">
              <span>Buscame</span>
              <SearchIcon className="searchIcon" />
            </button>
          </form>
          <button className="lucky" onClick={() => setSearchType(!searchType)}>
            {searchType ? "Busqueda por Persona Natural" : "Busqueda por Persona Juridica"}
          </button>
        </div>
      </main>
    </div>
  );
}
