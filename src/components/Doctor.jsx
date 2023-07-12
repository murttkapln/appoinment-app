import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";

const Doctor = ({id, name, dep, img, setModal, modal,setDoctor }) => {
  const handleClick = (e) => {
    setModal(!modal);
    setDoctor(e.currentTarget.id)

  };
  return (
    <>
      <Col>
        {!modal && <AddModal />}
        <Card
          style={{ width: "10rem", height: "12rem" }}
          className="border-0 m-auto"
        >
          <Card.Img
            onClick={handleClick}
            variant="top"
            id={id}
            src={img}
            className="img-thumbnai btn btn-outline-danger"
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title style={{ fontSize: "1rem" }}>{name}</Card.Title>
            <Card.Text>{dep}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Doctor;
