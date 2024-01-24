import { Container, Card, Row, Col } from "react-bootstrap";
import ExpensesBars from "./ExpensesBars";
import SVG from "./SVG";

const ChartContainer = () => {

  return (
    <>
    <Container className="d-flex justify-content-center mb-3">
      <Card style={{ width: '40rem' }} className='mt-5 card1 d-flex'>
          <Row className='d-flex align-items-center'>
            <Col>
              <div>
                <h6>My Balance</h6>
                <p>$921.48</p>
              </div>
            </Col>

            <Col xs={2}>
              <SVG />
            </Col>
          </Row>
      </Card>
    </Container>

    <Container className="d-flex align-items-center justify-content-center">
    

      <Card style={{ width: '40rem', height: '26rem' }}>

        <Card.Title>Spending - Last 7 days</Card.Title>

        <Card.Body>
           <ExpensesBars />
        </Card.Body>
        
      </Card>
    </Container>
    </>
  );
};

export default ChartContainer;
