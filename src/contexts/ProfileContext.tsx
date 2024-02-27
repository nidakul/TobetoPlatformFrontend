import React, { createContext, useContext, useState } from "react";
import { ProfileContextModel } from "../models/contextModels/ProfileContextModel";
import { GetUserDetails } from "../models/responses/userProfile/getUserDetails";
import { GetSkillByUserId } from "../models/responses/userProfile/getSkillByUserId";
import { GetByUserId } from "../models/responses/user/getByUserId";
import { GetLanguageByUserId } from "../models/responses/userProfile/getLanguageByUserId";
import { getCertificateByUserId } from "../models/responses/certificate/getCertificatesByUserId";
import { GetExamByUserId } from "../models/responses/userProfile/getExamByUserId";
import { GetSocialMediaAccountByUserIdItem } from "../models/responses/userProfile/getSocialMediaAccountByUserId";

const initialState: ProfileContextModel = {
  userDetails: {
    userId: 0,
    userProfileId: 0,
    firstName: "",
    lastName: "",
    email: "",
    cityId: 0,
    districtId: 0,
    cityName: "",
    districtName: "",
    nationalIdentity: "",
    phone: "",
    birthDate: "",
    country: "",
    addressDetail: "",
    description: "",
    skillDtoItems: [],
    languageDtoItems: [],
    examDtoItems: [],
    socialMediaAccountsItems: [],
  },
  addInfoToUserDetails: () => {},
  addUserDetails: () => {},
  addSkillsToUserDetails: () => {},
  addLanguagesToUserDetails: () => {},
  addCertificatesToUserDetails: () => {},
  addExamsToUserDetails: () => {},
  addSocialMediaAccountsToUserDetails: () => {},
};

export const ProfileContext = createContext(initialState);

const ProfileProvider = (props: any) => {
  const [userDetails, setUserDetails] = useState(initialState.userDetails);
  
  const addInfoToUserDetails = (value: GetByUserId) => {
    // setUserDetails fonksiyonu aracılığıyla userDetails'ı güncelle
    setUserDetails((prevState: GetUserDetails) => ({
      ...prevState,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
    }));
  };
  const addUserDetails = (
    value: GetUserDetails | ((prevState: GetUserDetails) => GetUserDetails)
  ) => {
    setUserDetails(value);
  };

  const addSkillsToUserDetails = (skills: GetSkillByUserId[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      skillDtoItems: skills,
    }));
  };

  const addExamsToUserDetails = (exams: GetExamByUserId[]) => {
    console.log(exams)
    setUserDetails((prevState) => ({
      ...prevState,
      examDtoItems: exams,
    }));
  };

  const addSocialMediaAccountsToUserDetails = (socialMediaAccountsItems: GetSocialMediaAccountByUserIdItem[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      socialMediaAccountsItems: socialMediaAccountsItems,
    }))
  }

  const addLanguagesToUserDetails = (languages: GetLanguageByUserId[]) => {
    // setUserDetails fonksiyonu aracılığıyla userDetails'ı güncelle
    setUserDetails((prevState) => ({
      ...prevState,
      languageDtoItems: languages,
    }));
  };
  const addCertificatesToUserDetails = (certificates: getCertificateByUserId[]) => {
    // setUserDetails fonksiyonu aracılığıyla userDetails'ı güncelle
    setUserDetails((prevState) => ({
      ...prevState,
      certificatesDtoItems: certificates,
    }));
  };


  return (
    <ProfileContext.Provider
      value={{
        userDetails,
        addUserDetails,
        addSkillsToUserDetails,
        addInfoToUserDetails,
        addLanguagesToUserDetails,
        addCertificatesToUserDetails,
        addExamsToUserDetails,
        addSocialMediaAccountsToUserDetails,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

export const useProfileContext = () => useContext(ProfileContext);
