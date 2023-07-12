import { Container } from "react-bootstrap"


const AppoitmentList = ({patient,day,consulted,doctor, setAppoinment, appoinment}) => {
  // console.log(doctor);
  // console.log(day);
  return (
    <Container>
         <div className="cell">{doctor}</div>
         <div className="cell">{patient}</div>
         {/* <div className="cell">{day}</div> */}
         {/* <div className="cell">Time:{}</div> */}
         <div className="cell"><i></i></div>
         {/* <div className="cell">{}</div> */}
         
    </Container>
  )
}

export default AppoitmentList