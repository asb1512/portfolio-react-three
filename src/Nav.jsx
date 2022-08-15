import React, { useEffect } from 'react';

export default function Nav({
  page,
  setPage,
}) {
  console.log('page:', page);
  useEffect(() => {

  }, [page]);

  return (
    <nav>
      <h2
        className={page === 'home' ? 'selected' : ''}
        onClick={() => setPage('home')}
      >
        A|–|B
      </h2>
      <h2
        className={page === 'about' ? 'selected': ''}
        onClick={() => setPage('about')}
      >
        about
      </h2>
      <h2
        className={page === 'work' ? 'selected': ''}
        onClick={() => setPage('work')}
      >
        work
      </h2>
      <h2
        className={page === 'contact' ? 'selected': ''}
        onClick={() => setPage('contact')}
      >
        contact
      </h2>
    </nav>
  );
}
