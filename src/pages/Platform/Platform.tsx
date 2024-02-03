import React from "react";
import TobetoPlatformItem from "../../components/Platform/TobetoPlatformItem";
import PlatformTab from "../../components/Platform/PlatformTab/PlatformTab";
import { Col, Container, Row } from "react-bootstrap";
import "./platform.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Exams from "../../components/Exam/Exams";

type Props = {};

const Platform = (props: Props) => {
  return (
    <>
      <Container className="main-cont">
        <Row className="justify-content-center align-items-center">
          <Col className="col-12 col-md-12">
            <Container>
              <Row>
                  <Col className="col-12 text-center mt-5">
                    <div className="mw-5xl mx-auto">
                      <h3>
                        <label className="text-secondary-platform">TOBETO</label>
                        <label className="fw-normal text-info1">'ya</label>
                        <label className="fw-normal text-info1">hoş geldin</label>
                      </h3>
                      <h4 className="fw-normal text-info1 text-info2">Pair 1</h4>
                    </div>
                    <TobetoPlatformItem
                      // imageClass="dot-purple-svg"
                      // imageSrc="dot-purple.e0e5c9d8.svg"
                      text="Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!"
                    />
                  </Col>
              </Row>
              <Row className="content-cont">
                  <TobetoPlatformItem
                    imageClass="ist-kod-png"
                    imageSrc="istanbulKodluyor.png"
                    text="Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al."
                  />
                  <label className="header-text-quot mb-4">
                    Aradığın <span className="quot">"</span>İş<span className="quot">"</span>  Burada!
                  </label>
                  <PlatformTab />
              </Row> 
            </Container>
            <Container className="content-cont">
              <Exams />
            </Container>
            <br></br>
            <Container>
              <ProfileCard />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Platform;