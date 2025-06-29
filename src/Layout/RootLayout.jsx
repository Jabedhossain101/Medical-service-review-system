import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import Toggle from '../Pages/Shared/Toggle';

const RootLayout = () => {
  return (
    <div>
      <div className=" mx-auto">
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
