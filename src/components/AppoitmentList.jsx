import { Container } from "react-bootstrap"


const AppoitmentList = ({patient,day,consulted,doctor, setAppoinment, appoinment}) => {
  // console.log(doctor);
  console.log(day);
  return (
    <Container>
          <div>
            <ul>
            <h3>{doctor}</h3>
            <h6>{patient}</h6>
            </ul>
            <ul>
              <li>Date:{day}</li>
            </ul>
          </div>
    </Container>
  )
}

export default AppoitmentList