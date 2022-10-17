import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";
import { useRouter } from "next/router";

import { mainMenu as menuLinks, site } from "../../config/index";

const MenuItem = ({ title, path, subMenu, id }) => {
  const router = useRouter();
  if (subMenu) {
    const activeChild = subMenu.find((item) => {
      if (router.pathname == item.path) {
        return true;
      }
      return false;
    });
    return (
      <NavDropdown title={title} id={`dropdown-${id}`} active={activeChild}>
        {subMenu.map((item, index) => (
          <DropdownItem {...item} key={index} />
        ))}
      </NavDropdown>
    );
  }

  return (
    <Link href={path} passHref>
      <Nav.Link active={router.pathname === path}>{title}</Nav.Link>
    </Link>
  );
};

const DropdownItem = ({ title, path, divider }) => {
  const router = useRouter();
  if (divider) {
    return <NavDropdown.Divider />;
  }

  return (
    <Link href={path} passHref>
      <NavDropdown.Item active={router.pathname === path}>
        {title}
      </NavDropdown.Item>
    </Link>
  );
};

const TopMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{site.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            {menuLinks.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenu;