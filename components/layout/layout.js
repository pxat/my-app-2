import TopMenu from "./topmenu";

const Layout = ({ children }) => (
  <>
    <TopMenu />
    <main>{children}</main>
  </>
);

export default Layout;
