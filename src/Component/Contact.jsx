import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <section className="container-fluid" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Contact Us</h1>
              <p>
                Clearly communicate the benefits of subscribing, such as
                exclusive content <br />
                and breaking news.
              </p>
            </div>
          </div>
          <div className="row mt-5 cnt">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="left">
                <h3>Send your Query</h3>
                <h6>
                  Thank you for your interest. We look forward to hearing from
                  you soon.
                </h6>
                <div className="box">
                  <span>
                    <FaRegClock />
                  </span>
                  <div className="content">
                    <p>Hours Of Operation</p>
                    <p>Mon-Fri: 9AM - 5PM</p>
                  </div>
                </div>
                <div className="box">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <div className="content">
                    <p>24/7 Emergency Service</p>
                    <p>(205) 484-9624</p>
                  </div>
                </div>
                <div className="box">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <div className="content">
                    <p>Service</p>
                    <p>Birmingham, AL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Enter Your Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me " />
                  <Form.Text className="text-muted">
                    We'll never share your Detail with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
