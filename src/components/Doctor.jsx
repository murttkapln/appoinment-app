import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";

const Doctor = ({ name, dep, img, setModal, modal }) => {
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <>
      {!modal && <AddModal/>}
      <Col>
        <Card
          onClick={handleClick}
          style={{ width: "14rem", height: "16rem" }}
          className="border-5 border-success m-auto"
          role="button"
          >
          <Card.Img variant="top" src={img} className="img-thumbnail" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{dep}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Doctor;
