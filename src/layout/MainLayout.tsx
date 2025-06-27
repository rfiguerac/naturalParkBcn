import { Outlet } from "react-router-dom";

import { NavegationBar } from "../components/Navbar";
import { Container } from "react-bootstrap";

export const MainLayout = () => {
  return (
    <>
      <NavegationBar />
      <Container className="" style={{marginTop:120}}>
        <Outlet />
      </Container>
    </>
  );
};
