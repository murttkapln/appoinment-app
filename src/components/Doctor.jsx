import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";

const Doctor = ({ name, dep, img, setModal, modal}) => {
  const handleClick = (e) => {
    setModal(!modal);
  };
  return (
    <>
      <Col>
      {!modal && <AddModal/>}
        <Card
          onClick={handleClick}
          style={{ width: "10rem", height: "12rem" }}
          className="border-0 m-auto"
          >
          <Card.Img variant="top" src={img}  className="img-thumbnai btn btn-outline-danger" />
          <Card.Body  className="d-flex flex-column">
            <Card.Title style={{fontSize:"1rem"}}>{name}</Card.Title>
            <Card.Text>{dep}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Doctor;
