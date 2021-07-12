import React,{useState} from 'react'
import { Container,Row,Col,FormGroup,Input,Button,Label,Form, FormFeedback } from 'reactstrap'
import "../../assets/css/lightbox.scss"

export default function DownloadReportLightbox(props) {
  const [contactNumberValid,setContactNumberValid] = useState(null)
  
  const handleInputChange = (event)=>{
      var a = /^\d{10}$/;  
        if (a.test(event.target.value)){
          setContactNumberValid(true)
        }   
        else{
          setContactNumberValid(false)
        }
  }
  const close = () =>{
    props.close(false)
  }
    return (
        <>
            <div className="lightbox-cover">
                <div className="lightbox-horizontal">
                <button className="close" onClick={close}>&times;</button>
                    <Row>
                      <Col md="6">
                        <img style={{width:"100%",height:"250px"}} src="images/bgcheck3.jpg"></img>
                      </Col>
                      <Col md="6">
                        <Form className="mt-2 d-flex justify-content-center align-items-center flex-column flex-wrap">
                        <h6>Download Report in one Click!</h6>
                        <FormGroup>
                          <Label for="downloadreport_billid">Bill Id</Label>
                          <Input size="sm" className="lightbox-input" id="downloadreport_billid" placeholder="Bill Id"></Input>
                        </FormGroup>
                        <FormGroup className="position-relative">
                          <Label for="downloadreport_contactnumber">Contact Number</Label>
                          <Input onChange={(event)=>{handleInputChange(event)}} valid={contactNumberValid} invalid={contactNumberValid=== null ? false:!contactNumberValid} size="sm" className="lightbox-input" id="downloadreport_contactnumber" placeholder="Contact Number"></Input>
                          {/* <FormFeedback id="downloadreport_contactnumber_feedback" valid={contactNumberValid} tooltip>Contact Number is Valid</FormFeedback> */}

                        </FormGroup>
                        <Button className="lightbox-button">Download Report</Button>
                        </Form>
                      </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}


// import React from 'react';
// import Popup from 'reactjs-popup';


// export default () => (
//   <Popup
//     trigger={<button className="button"> Open Modal </button>}
//     modal
//     nested
//   >
//     {close => (
//       <div className="modal">
//         
//         <div className="header"> Modal Title </div>
//         <div className="content">
//           {' '}
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
//           Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
//           delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
//           commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
//           explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             nested
//           >
//             <span>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//               magni omnis delectus nemo, maxime molestiae dolorem numquam
//               mollitia, voluptate ea, accusamus excepturi deleniti ratione
//               sapiente! Laudantium, aperiam doloribus. Odit, aut.
//             </span>
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log('modal closed ');
//               close();
//             }}
//           >
//             close modal
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>
// );