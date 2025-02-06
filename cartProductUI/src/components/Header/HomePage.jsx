import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { CiSearch } from "react-icons/ci";
import "../Header/homePage.css";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";

function HomePage() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navb">
      <Container fluid>
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <InputGroup className="search_input">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-button"
            />
            <Button variant="outline-secondary" id="search-button">
              <CiSearch />
            </Button>
          </InputGroup>

          <Nav className="nav_info">
            <div className="nav_cart">
              <div>
                <PiShoppingCart size={36} />
              </div>
              <div className="cart_badge">8</div>
            </div>
            <div className="nav_wish">
              <div>
                <MdFavoriteBorder size={34} />
              </div>
              <div className="cart_wish">8</div>
            </div>
            <div>
              <FaRegCircleUser size={30} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomePage;
