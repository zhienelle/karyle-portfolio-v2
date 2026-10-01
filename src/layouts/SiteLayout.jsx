import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar.jsx';
import { ScrollToTop } from '../components/ScrollToTop.jsx';

export function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}
