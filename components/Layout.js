import Footer from "./footer/Footer";
import NavHeader from "./navigation/NavHeader";

const Layout = ({ children }) => {
  return (
    <>
      <NavHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
