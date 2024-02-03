import React, { useEffect, useState } from "react";
import TobetoPlatformBannerTop from "../Banner/BannerTop";
import { Container, Pagination } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import TobetoPlatformDropdown from "./Filter";

type Props = {
    dropdownName1: string,
    dropdownOpt1: string[],
    dropdownName2: string,
    dropdownOpt2: string[],
    typeBox?: boolean,
    filterBtn?: boolean,
};

const FilterBar = (props: Props) => {
  return (
    <>
      <Container>
        <div className="filter-section mt-3">
          <Row>
            <Col className="col-md-5 col-12 mb-4">
              <SearchBar />
            </Col>
            <Col>
              <TobetoPlatformDropdown
                dropdownName={props.dropdownName1}
                opt={props.dropdownOpt1}
                showDefaultOption={true}
              />
            </Col>
            <Col>
              <TobetoPlatformDropdown
                dropdownName={props.dropdownName2}
                opt={props.dropdownOpt2}
                showDefaultOption={true}
              />
            </Col>
            <Col>
              {props.filterBtn && <button className="filter-btn" />}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};


export default FilterBar;