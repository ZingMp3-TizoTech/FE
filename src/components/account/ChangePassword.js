import { Button } from "react-bootstrap";
import React,{useState} from "react";
import { Form } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";
import "./changepassword.css"
import { Modal } from "bootstrap";
const ChangePassword=()=>{
 
  return(
  <>
    <div className="form" >
    <div  className="form-change" >
    <Form className="form-body">
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control style={{
        marginLeft:"30px"
      }} plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
    <Form.Label column sm="2" style={{
     whiteSpace: "nowrap"
  }}>
      Password Old
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" style={{
        maxWidth:"200px",
        marginLeft:"30px"
      }} />
    </Col>
    
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2" style={{
     whiteSpace: "nowrap"
  }}>
      Password New
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password New" style={{
        maxWidth:"200px",
        marginLeft:"30px"
      }} />
    </Col>
   
  </Form.Group>
  <div className="btn-group">
    <div className="btn-change"> <Button className="btn btn-success ">
    <a >Change</a>
    </Button></div>
    <div className="btn-change"> <Button className="btn btn-secondary ">
    <a >Cancel</a>
    </Button></div>
   
    </div>
</Form>
</div>

</div>
  </>
  )
}

export default ChangePassword