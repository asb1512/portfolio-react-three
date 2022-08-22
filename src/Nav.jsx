import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({
  page,
  setPage,
  pathname
}) {

  return (
    <nav>
      <Link
        to="/" 
        className={pathname === '/' ? 'selected' : ''}
      >
        A|–|B
      </Link>
      <Link
        to="/about"
        className={pathname === '/about' ? 'selected': ''}
      >
        about
      </Link>
      <Link
        to="/work"
        className={pathname === '/work' ? 'selected': ''}
      >
        work
      </Link>
      <Link
        to="/contact"
        className={pathname === '/contact' ? 'selected': ''}
      >
        contact
      </Link>
    </nav>
  );
}
