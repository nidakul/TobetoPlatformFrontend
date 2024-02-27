import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import ProfilePreInfoBox from "../../components/Profile/ProfileLeft/ProfilePreInfoBox/ProfilePreInfoBox";
import "./profile.css";
import ProfileBox from "../../components/Profile/ProfileBox";
import ProfilePreInfo from "../../components/Profile/ProfileLeft/ProfilePreInfoBox/ProfilePreInfo";
import ProfileRoundItem from "../../components/Profile/ProfileLeft/ProfileRoundItem";
import ProfileMediaAccounts from "../../components/Profile/ProfileLeft/ProfileMediaAccounts";
import ProfileSuccessModel from "../../components/Profile/ProfileRight/ProfileSuccessModel/ProfileSuccessModel";
import { Link } from "react-router-dom";
import ProfileBadge from "../../components/Profile/ProfileRight/ProfileBadge";
import ProfileExam from "../../components/Profile/ProfileRight/ProfileExam";
import ProfileEducationMap from "../../components/Profile/ProfileRight/ProfileEducationMap";
import ProfileHeatMap from "../../components/Profile/ProfileRight/ProfileHeatMap";
import { useAuthContext } from "../../contexts/AuthContext";
import userProfileService from "../../services/userProfileService";
import {
  useProfileContext,
} from "../../contexts/ProfileContext";
import { formatDate } from "@fullcalendar/core";

type Props = {};

const Profile = (props: Props) => {
  const {
    userDetails,
    AddUserDetails,
    addSkillsToUserDetails,
    addInfoToUserDetails,
    addSocialMediaAccountToUserDetails,
  } = useProfileContext();
  const { userId } = useAuthContext();
  const [successModel, setSuccessModel] = useState<boolean>(false);
  

  const fetchUserInformation = async (userId: number) => {
    try {
      const result = await userProfileService.getByUserId(userId);
      // setUserInformation(result.data);
      addInfoToUserDetails(result.data);
    } catch (error) {
      console.log("Kullanıcı profili bulunamadı.", error);
    }
  };

  const fetchUserDetails = async (userId: number) => {
    try {
      const result = await userProfileService.getUserDetails(userId);

      AddUserDetails({
        ...result.data,
        birthDate: formatDate(result.data.birthDate),
      });
    } catch (error) {
      console.log("Kullanıcı profili bulunamadı.", error);
    }
  };

  const fetchSkillbyUserId = async (userId: number) => {
    try {
      const result = await userProfileService.getSkillByUserId(userId);
      console.log(result.data.skillDtoItems);
      addSkillsToUserDetails(result.data.skillDtoItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchSocialMediaAccountByUserId = async (userId: number) => {
    try {
      const result = await userProfileService.getSocialMediaAccountByUserId(userId);
      console.log(result.data.socialMediaAccountsItems);
      addSocialMediaAccountToUserDetails(result.data.socialMediaAccountsItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const socialMediaAccountImage = (accountId: number): string => {
    switch (accountId) {
        case 1:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709033485/instagram-icon-logo-free-png_zhnpdh.svg"; //Instagram
        case 2:
            return  "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709034955/twitter_circle-512_bwzh59.svg"; //Twitter   
        case 3:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593590/cv-linkedn_ctqmta.svg"; // LinkedIn
        case 4:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-behance_izytxl.svg"; // Behance
        case 5:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709035073/02-dribbble-512_p2eunc.svg"; //Dribble
        case 6:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-github_foneym.svg"; // GitHub
        default:
            return "https://example.com/default-image.jpg"; // Varsayılan resim URL'si
    }
}

  useEffect(() => {
    fetchUserInformation(Number(userId));
    fetchUserDetails(Number(userId));
    fetchSkillbyUserId(Number(userId));
    fetchSocialMediaAccountByUserId(Number(userId));
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} style={{ textAlign: "right" }}>
          <Link to={"/profilim/profilimi-duzenle"}>
            <span className="profileEditButton"></span>
          </Link>
          <span className="profileShareButton"></span>
        </Col>
      </Row>
      <Row>
        {/* PROFILE LEFT START */}
        <Col className="col-4">
          <Row>
            <Col className="col-12">
              <ProfilePreInfoBox profilePhotoSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708374477/tobetouserlogo_aekd7i.png" />
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Hakkımda">
                <Card.Text>{userDetails.description}</Card.Text>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Yetkinliklerim">
                <div className="profileRoundItemCont">
                  {userDetails.skillDtoItems &&
                    userDetails.skillDtoItems.map((skill) => (
                      <ProfileRoundItem className="profileRoundItem">
                        {<Card.Text>{skill.skillName}</Card.Text>}
                      </ProfileRoundItem>
                    ))}
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Yabancı Diller">
                <div className="profileRoundItemCont">
                  <ProfilePreInfo
                    cardContClass="profileLangCont"
                    iconContClass=""
                    headerClass="profileSkillName"
                    valueClass="profileSkillLevel"
                    iconSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593240/globe_amwg5s.svg"
                    header="İngilizce"
                    value="Orta Seviye"
                  />
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Sertifikalarım">
                <div className="profileRoundItemCont">
                  <ProfileRoundItem className="profileRoundItem hover">
                    {
                      <Card.Text className="profileCertificate">
                        Lorem, ipsum dolor.
                      </Card.Text>
                    }
                  </ProfileRoundItem>
                  <ProfileRoundItem className="profileRoundItem hover">
                    {
                      <Card.Text className="profileCertificate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Card.Text>
                    }
                  </ProfileRoundItem>
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Medya Hesaplarım">
                <div className="profileMediaCont">
                  {userDetails.socialMediaAccountItems && userDetails.socialMediaAccountItems.map((sma)=> (
                    <ProfileMediaAccounts
                    imageSrc={socialMediaAccountImage(Number(sma.socialMediaCategoryId))}
                    className="mediaAccountPhoto"
                    Link={sma.mediaUrl}
                  />
                  ))}
                </div>
              </ProfileBox>
            </Col>
          </Row>
        </Col>
        {/* PROFILE LEFT END */}
        {/* PROFILE RIGHT START */}
        <Col className="col-8">
          <Row>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Tobeto İşte Başarı Modelim"
              >
                {successModel ? (
                  <ProfileSuccessModel />
                ) : (
                  <div className="successModelDefault">
                    <p>
                      İşte Başarı Modeli Değerlendirmesiyle yetkinliklerini ölç
                    </p>
                    <button>Başla</button>
                  </div>
                )}
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Tobeto Seviye Testlerim"
              >
                <div className="profileExamsCont">
                  <ProfileExam
                    profileExamName="Herkes için Kodlama 1B Değerlendirme Sınavı"
                    profileExamDate="12-10-2023"
                    profileExamPoint="88.00"
                  />
                  <ProfileExam
                    profileExamName="Front End"
                    profileExamDate="12-10-2023"
                    profileExamPoint="88.00"
                  />
                  <ProfileExam
                    profileExamName="Herkes için Kodlama 1B Değerlendirme Sınavı"
                    profileExamDate="17-11-2023"
                    profileExamPoint="88.00"
                  />
                  <ProfileExam
                    profileExamName="Back End"
                    profileExamDate="17-11-2023"
                    profileExamPoint="88.00"
                  />
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Yetkinlik Rozetlerim"
              >
                <div className="profileBadgeMainCont">
                  <ProfileBadge imageSrc="istanbulkodluyorbadge.jpg" />
                  <ProfileBadge imageSrc="isbecerileribadge.jpg" />
                  <ProfileBadge imageSrc="isyönetimibecerileribadge.jpg" />
                  <ProfileBadge imageSrc="isyönetimibecerileribadge2.jpg" />
                  <ProfileBadge imageSrc="kisiselgelisimbadge.jpg" />
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Aktivite Haritam">
                <ProfileHeatMap />
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Eğitim Hayatım ve Deneyimlerim"
              >
                <ProfileEducationMap />
              </ProfileBox>
            </Col>
          </Row>
        </Col>
        {/* PROFILE RIGHT END */}
      </Row>
    </Container>
  );
};

export default Profile;
