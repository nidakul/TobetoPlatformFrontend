import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import ProfilePreInfoBox from '../../components/Profile/ProfilePreInfoBox/ProfilePreInfoBox'
import './profile.css'
import ProfileBox from '../../components/Profile/ProfileBox'
import ProfilePreInfo from '../../components/Profile/ProfilePreInfoBox/ProfilePreInfo'
import ProfileRoundItem from '../../components/Profile/ProfileRoundItem'
import ProfileMediaAccounts from '../../components/Profile/ProfileMediaAccounts'


type Props = {
}

const Profile = (props: Props) => {
  const png = process.env.PUBLIC_URL + `/images/png.png`;

  return (
    <Container>
      <Row>
        <Col className='col-4'>
          <Row>
            <Col className='col-12'>
              <ProfilePreInfoBox profilePhotoSrc='pp2.png' />
            </Col>
            <Col className='col-12'>
              <ProfileBox titleClass='profileBoxTitle' title='Hakkımda'>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eius corrupti tempora unde ea facilis! Ratione neque quibusdam fugiat doloremque.
                </Card.Text>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox titleClass='profileBoxTitle' title='Yetkinliklerim'>
                <div className='profileRoundItemCont'>
                  <ProfileRoundItem className="profileRoundItem">
                    {<Card.Text>HTML</Card.Text>}
                  </ProfileRoundItem>
                  <ProfileRoundItem className="profileRoundItem">
                    {<Card.Text>CSS</Card.Text>}
                  </ProfileRoundItem>
                  <ProfileRoundItem className="profileRoundItem">
                    {<Card.Text>JavaScript</Card.Text>}
                  </ProfileRoundItem>
                </div>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox titleClass='profileBoxTitle' title='Yabancı Diller'>
                <div className='profileRoundItemCont'>
                  <ProfilePreInfo cardContClass='profileLangCont' iconContClass='' headerClass='profileSkillName' valueClass='profileSkillLevel' iconSrc='globe.svg' header='İngilizce' value='Orta Seviye' />
                </div>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox titleClass='profileBoxTitle' title='Sertifikalarım'>
                <div className='profileRoundItemCont'>
                  <ProfileRoundItem className="profileRoundItem hover">
                    {<Card.Text className='profileCertificate'>Lorem, ipsum dolor.</Card.Text>}
                  </ProfileRoundItem>
                  <ProfileRoundItem className="profileRoundItem hover">
                    {<Card.Text className='profileCertificate'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>}
                  </ProfileRoundItem>
                </div>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox titleClass='profileBoxTitle' title='Medya Hesaplarım'>
                <div className='profileMediaCont'>
                  <ProfileMediaAccounts imageSrc="cv-github.svg" className='mediaAccountPhoto' />
                  <ProfileMediaAccounts imageSrc="cv-linkedn.svg" className='mediaAccountPhoto' />
                  <ProfileMediaAccounts imageSrc="cv-behance.svg" className='mediaAccountPhoto' />
                </div>
              </ProfileBox>
            </Col>
          </Row>
        </Col>

        <Col className='col-8' style={{ backgroundColor: 'blue' }}>
          <Row>
            <Col className='col-12'>Tobeto İşte Başarı Modeli</Col>
            <Col className='col-12'>Tobeto Seviye Testlerim</Col>
            <Col className='col-12'> Yetkinlik Rozetlerim</Col>
            <Col className='col-12'>Aktivite Haritam</Col>
            <Col className='col-12'>Eğitim Hayatım ve Deneyimlerim</Col>
          </Row>
        </Col>
      </Row>
    </Container>
    // <Link to={'/profilim/profilimi-duzenle'}>
    //   <div>Profile</div>
    // </Link>
  )
}

export default Profile