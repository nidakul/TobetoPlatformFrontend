import React, { useEffect, useState } from "react";
import "./educationDetailContent.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import courseService from "../../../services/courseService";
import {
  AccordionEventKey,
  AccordionSelectCallback,
} from "react-bootstrap/esm/AccordionContext";
import { GetCourseResponseItem } from "../../../models/responses/course/getCourseResponse";
import { GetAsyncLessonsByCourseIdItem } from "../../../models/responses/course/getAsyncLessonsByCourseId";
import SyncLessonDetail from "./SyncLesson/SyncLessonDetail";
import FormattedTime from "../../../utilities/Helpers/FormattedTime";
import LessonVideoDetailCard from "../LessonVideoDetail/LessonVideoDetailCard";
import {
  GetAsyncLessonByUserId,
} from "../../../models/responses/userProfile/getAsyncLessonByUserId";
import userProfileService from "../../../services/userProfileService";
import { useAuthContext } from "../../../contexts/AuthContext";

type Props = {
  educationDetailId?: number;
};

const EducationDetailContent = (props: Props) => {
  const { educationDetailId } = props;
  const completedIcon = "https://res-console.cloudinary.com/dbsfoxbch/media_explorer_thumbnails/e1b79d9d550dbd3f9a70b29a227bf5c1/detailed";
  const [activeKey, setActiveKey] = useState<string | null>("0");
  const { userId } = useAuthContext();
  const [courses, setCourses] = useState<GetCourseResponseItem[]>([]);
  const [asyncLessons, setAsyncLessons] = useState<
    GetAsyncLessonsByCourseIdItem[]
  >([]);
  const [profileLesson, setProfileLesson] = useState<GetAsyncLessonByUserId[]>(
    []
  );

  const [selectedAsyncLessonId, setSelectedAsyncLessonId] = useState<
    number | null
  >(null);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  const fetchEducationDetail = async () => {
    try {
      const result = await courseService.getAll(0, 40);
      const filteredCourses = result.data.items.filter(
        (course) => course.educationPathId === educationDetailId
      );
      setCourses(filteredCourses);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchProfileLessons = async () => {
    try {
      const response = await userProfileService.getAsyncLessonByUserId(
        Number(userId)
      );
      setProfileLesson(response.data.asyncLessonItem);
    } catch (error) {
      console.error("Error fetching user profile lessons:", error);
    }
  };
  
  const handleAccordionClick: AccordionSelectCallback = (
    eventKey: AccordionEventKey
  ) => {
    setActiveKey(typeof eventKey === "string" ? eventKey : null);
  };
  
  const handleHeaderClick = async (courseId: number) => {
    try {
      const asyncResponse = await courseService.getAsyncLessonsByCourseId(
        courseId
      );
      const asyncLessonsData = asyncResponse.data.asyncLessons;
      if (asyncLessonsData.length > 0) {
        setAsyncLessons(asyncLessonsData);
        setSelectedAsyncLessonId(null);
      }
    } catch (error) {
      console.error("Error fetching async lessons:", error);
    }
  };

  const handleSubtitleClick = async (asyncLessonId: number) => {
    setSelectedAsyncLessonId(asyncLessonId);
  };

  useEffect(() => {
    if (courses.length === 1 && courses[0] && courses[0].id) {
      setSelectedCourseId(courses[0].id);
    } else if (courses.length > 1 && asyncLessons.length > 0) {
      setSelectedAsyncLessonId(asyncLessons[0].id);
    }

    if (courses.length > 0) {
      const firstCourseId = courses[0].id;
      if (asyncLessons.length === 0) {
        handleHeaderClick(firstCourseId);
      }
    }
  }, [courses, asyncLessons]);

  useEffect(() => {
    fetchEducationDetail();
// }, [educationDetailId, userId]); 
}, []); 

useEffect(() => {
  fetchProfileLessons();
}, [profileLesson]); 
//console.log(profileLesson, " profileLesson");


  return (
    <Container>
      <div className="accordion-container">
        <Row className="activity-row">
          <Col className="col-lg-5">
            <Accordion activeKey={activeKey} onSelect={handleAccordionClick}>
              {courses &&
                courses.length > 0 &&
                courses.map((educationCourses, index) => (
                  <AccordionItem key={index} eventKey={index.toString()}>
                    <AccordionHeader
                      className="education-title"
                      onClick={() => handleHeaderClick(educationCourses.id)}
                    >
                      {educationCourses.name}
                    </AccordionHeader>
                    <div>
                      {asyncLessons.map((lesson, lessonIndex) => (
                        <AccordionBody
                          key={lessonIndex}
                          className="education-subtitle"
                          role="button"
                          onClick={() => handleSubtitleClick(lesson.id)}
                        >
                          <div>
                            {lesson.name}
                            <AccordionBody className="education-type">
                              {lesson.lessonType} -{" "}
                              {<FormattedTime time={lesson.time} />}
                            </AccordionBody>
                            {profileLesson.map((profileLessons, index) => (
                              <div key={index}>
                                {profileLessons.isWatched && lesson.id == profileLessons.asyncLessonId &&(
                                  <img
                                    className="completed-icon"
                                    src={completedIcon}
                                    alt="Completed"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionBody>
                      ))}
                    </div>
                  </AccordionItem>
                ))}
            </Accordion>
          </Col>

          <Col>
            <Row>
              {selectedAsyncLessonId && (
                <LessonVideoDetailCard asyncLessonId={selectedAsyncLessonId} />
              )}
              {selectedCourseId !== null && !selectedAsyncLessonId && (
                <SyncLessonDetail courseId={selectedCourseId} />
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EducationDetailContent;
