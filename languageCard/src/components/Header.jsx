import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import reactLogo from "../assets/react.svg";


const Header = () => {
  return (
    <Container>
      <Image fluid src={reactLogo} width="250px"/>
    </Container>
  )
}

export default Header