import { Container, Row } from "react-bootstrap";
import Doctor from "../components/Doctor";
import { doctorData } from "../helpers/data";
import { useState } from "react";
import AppoitmentList from "../components/AppoitmentList";
import AddModal from "../components/AddModal";
import { appointmentData } from "../helpers/data";

const Home = () => {
  const [appoinment, setAppoinment] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [doctor , setDoctor ] = useState("")

  return (
    <Container className="text-center">
      <h1 className="text-danger fw-bold">HOSPITAL</h1>
      <h4>Our Doctors</h4>
      <Row
        xs="2"
        md="3"
        lg="4"
        className="justify-content-evenly g-2"
      >
        {doctorData.map((doctor) => (
          <Doctor
            key={doctor.id}
            {...doctor}
            setModal={setShowForm}
            modal={showForm}
            setDoctor={setDoctor}
          />
        ))}
      </Row>
      <>
      <h2 className="diplay-6 fw-bold">Appoinment List</h2>
      {appointmentData.map((appoinmentInfo) => (
        <AppoitmentList
          key={appoinmentInfo.id}
          {...appoinmentInfo}
          appoinment={appoinment}
          setAppoinment={setAppoinment}
        />
      ))}</>
      
      <AddModal setModal={setShowForm} modal={showForm} doctor={doctor}  />
    </Container>
  );
};

export default Home;
