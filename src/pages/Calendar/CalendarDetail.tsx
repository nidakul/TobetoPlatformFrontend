import React from "react";
import Calendar from "./Calendar";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import "./calendar.css";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { Container } from "react-bootstrap/lib/Tab";

type Props = {};
const CalendarDetail = (props: Props) => {
  const calendarProps = {
    id: "1",
    title: ".net & react full stack",
    instructor: "Engin Demirog",
    start: new Date().toISOString().split("T")[0] + "T13:15:00",
  };
  return (
    <div>
      <Row className="mt-5">
        <Col xs={3}>
          <div className="filter-left equal-box">
            <div className="d-flex flex-column">
              <label className="label-header">Eğitim arama</label>
              <input
                type="text"
                placeholder="Eğitim arayın.."
                className="cal-filter-input"
              />
            </div>
            <div className="d-flex flex-column">
              <label className="label-header">Eğitmen</label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Eğitmen arayın...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Engin Demirog</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Halit Enes Kalaycı
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">İrem hoca</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex flex-column">
              <label className="label-header">Eğitim Durumu</label>
              <div className="check-class">
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Bitmiş dersler"
                        id={`inline-${type}-1`}
                      />
                      <br />
                      <Form.Check
                        inline
                        label="Devam eden dersler"
                        id={`inline-${type}-1`}
                      />
                      <br />
                      <Form.Check
                        inline
                        label="Satın alınmış dersler"
                        id={`inline-${type}-1`}
                      />
                      <br />
                      <Form.Check
                        inline
                        label="Başlanmamış dersler"
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={9}>
          <Calendar {...calendarProps} />
        </Col>
      </Row>
    </div>
  );
};

export default CalendarDetail;