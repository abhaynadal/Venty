import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-inter min-h-screen bg-gradient-to-tl from-rose-300  to-rose-100 flex flex-col">
      <Navbar />
      <main className="flex-1 px-10 md:px-20 pt-20 mb-20">{children}</main>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
};

export default Layout;