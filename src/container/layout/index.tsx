import { Outlet } from "react-router-dom";

import { Header, Footer } from "src/container";
import { StyledLayoutContainer } from "./styled";

const Layout = () => {
  return (
    <StyledLayoutContainer>
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </StyledLayoutContainer>
  );
};

export default Layout;
