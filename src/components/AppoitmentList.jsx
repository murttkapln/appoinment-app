import { Container } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const AppoitmentList = ({
  patient,
  day,
  consulted,
  doctor,
  setAppoinment,
  appoinment,
}) => {
  // console.log(doctor);
  // console.log(day);
  return (
    <Container
      fluid
      className="rounded-4 bg-danger d-flex justify-content-between p-3 gap-5"
    >
      <div className="cell">
        <h4>{patient}</h4>
        <h6>{doctor}</h6>
      </div>

      <div className="cell">
        <p>Date:{day.toLocaleDateString()}</p>
        <p>Time:{day.getDate()}</p>
      </div>

      <div>
        <FaTimes role="button" />
      </div>

      {/* <div className="cell">Time:{}</div> */}

      {/* <div className="cell">{}</div> */}
    </Container>
  );
};

export default AppoitmentList;
