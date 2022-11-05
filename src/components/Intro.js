import { Card, Container, Button } from "react-bootstrap"
// import { Col, Container, Row, Button } from "react-bootstrap"

// const Intro = () => {
//   return (
//     <div className="intro">
//       <Container className="text-white text-center d-flex justify-content-center align-items-center">
//         <Row>
//           <Col>
//             <div className="title">NOBAR WITH ME</div>
//             <div className="title">ABDEHI</div>
//             <div className="introButton mt-4 text-center">
//               <Button className="" variant="dark" href="#trending">Check List Film</Button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }
const Intro = () => {
  return (
    <div id="Introo" className="intro">
      <Container className="text-black text-center d-flex justify-content-center align-items-center">
        <Card>
            <Card.Body className="mt-4 mb-4">
            <Card.Title>Spesial Nobar Film</Card.Title>
            <Card.Text>
              Nobar film yang lagi <strong> trending </strong> dan <strong>terupdate</strong> saat ini 
            </Card.Text>
          </Card.Body>
          <Button className="" variant="dark" href="#trending">Check List Film</Button>
        </Card>
      </Container>
    </div>
  )
}

export default Intro
