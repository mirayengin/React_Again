import Language from "./Language"
import Container from "react-bootstrap/Container";
import {data} from '../helpers/data';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Card = () => {
  console.log(data);
  return (
    <Container  className="rounded-4 mt-4" style = {{background : "#f48b29"}}>
      <h1>Languages</h1>
      <Row>
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index} >
              {/* // <Language lang={lang} /> //! bu destrıc yapılmayan sekli */}
                <Language {...lang} /> 

            </Col>
        )
      })}
      </Row>
     </Container>
      )

}

export default Card