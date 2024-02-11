import React from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import "./educationOffcanvas.css";
import EducationDetailAboutComp from "./EducationDetailAboutComp";
import {
  categoryIcon,
  companyIcon,
  languageIcon,
  subcategoryIcon,
} from "../../../utilities/Constants/iconsList";

type Props = {
  imageUrl: string;
  educationName: string;
  educationType: string;
  timeSpent: string;
  category: string;
  language: string;
  subcategory: string;
  company: string;
  likeCount: number;
  point: number;
  button: boolean;
  show: boolean;
  hide: () => void;
};

const EducationOffcanvas = (props: Props) => {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.hide}
      placement="end"
      backdrop={true}
      scroll={true}
    >
      <Offcanvas.Header>
        <Container>
          <i className="sg-icon sg-delete close" />
          <Row>
            <Col lg={2}>
              <div className="image-area">
                <img src={props.imageUrl} />
              </div>
            </Col>
            <Col lg={6} className="course-drawer-header-info">
              <h3 className="education-detail-name">{props.educationName}</h3>
              <span className="new-tag blue">{props.educationType}</span>
              <span className="course-detail-info">
                <img
                  className="sg-icon sg-stopwatch"
                  src="/images/stopwatch.png"
                />
                {props.timeSpent}
              </span>
              <Col lg={12} className="like">
                <div className="education-like-area">
                  <img className="education like-img" src="/images/heart.svg" />
                  <span className="like-area-span">{props.likeCount}</span>
                </div>
              </Col>
            </Col>
            <Col lg={4}>
              <Col lg={12} className="course-drawer-button-area">
                {props.button && (
                  <button className="education-btn">EĞİTİME GİT</button>
                )}
              </Col>
              <Row className="course-drawer-status">
                <Col lg={12}>
                  <span className="course-status-info text-green ">
                    <i className="sg-like" />
                    <label>Tebrikler, tamamladın!</label>
                  </span>
                  <span className="course-status-score text-green">
                    {props.point} PUAN
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container>
          <div className="info-section row">
            <EducationDetailAboutComp
              {...categoryIcon}
              educationAboutData={props.category}
            />
          </div>
          <div className="info-section row">
            <EducationDetailAboutComp
              {...languageIcon}
              educationAboutData={props.language}
            />
          </div>
          <div className="info-section row">
            <EducationDetailAboutComp
              {...subcategoryIcon}
              educationAboutData={props.subcategory}
            />
          </div>
          <div className="info-section row">
            <EducationDetailAboutComp
              {...companyIcon}
              educationAboutData={props.company}
            />
          </div>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default EducationOffcanvas;
