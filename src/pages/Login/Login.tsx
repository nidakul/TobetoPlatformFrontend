import React, { useContext, useEffect } from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import { Container, Image, Row } from "react-bootstrap";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AppForm from "../../components/Login/AppForm";
import { Form, Formik } from "formik";
import FormikInput from "../../utilities/FormikInput";
import { UserInformationValidationMessageRule } from "../../constants/Validations/validationMessageRules";
import { AuthContext } from "../../contexts/AuthContext";
import { userLoginRequest } from "../../models/requests/user/userLoginRequest";
import { object } from "yup";
import UserService from "../../services/userService";

type Props = { formClassName?: string };

const Login = (props: Props) => {
  const validationSchema = object({
    email: UserInformationValidationMessageRule.email,
    password: UserInformationValidationMessageRule.password,
  });
  const authContext: any = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues: userLoginRequest = {
    email: "",
    password: "",
  };
  useEffect(() => {
    // Kullanıcı girişi başarılı olduktan sonra çalışacak kodlar
    if (authContext.auth?.isAuthenticated) {
      navigate("/platform");
    }
  }, [authContext.auth]);

  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="div">
          <div className="center">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const userService = new UserService();
                userService
                  .loginUser(values)
                  .then((result) => {
                    authContext.setAuth({
                      isAuthenticated: true,
                      token: result.data.accessToken.token,
                    });

                    console.log("Kullanıcı başarıyla kaydedildi:", result.data);
                    localStorage.setItem(
                      "token",
                      result.data.accessToken.token
                    );
                  })
                  .catch((error) => {
                    console.error(
                      "Kullanıcı girişi sırasında hata oluştu:",
                      error
                    );
                  });
              }}
            >
              <Form className={props.formClassName}>
                <Row>
                  <Image
                    className="login-form-img"
                    src="/images/tobeto-logo.png"
                  />
                </Row>
                <Row>
                  <FormikInput
                    type="text"
                    name="email"
                    label=""
                    placeHolder="E-posta"
                  />
                  <FormikInput
                    type="password"
                    name="password"
                    label=""
                    placeHolder="Şifre"
                  />
                </Row>
                <Row className="row-btn">
                  <button
                    type="submit"
                    className="button-save py-2 mb-3 mt-4 d-inline-block"
                  >
                    Giriş Yap
                  </button>
                </Row>
              </Form>
            </Formik>
            <Link className="forget-pass-btn" to="/sifremi-unuttum">
              Şifremi Unuttum
            </Link>
          </div>
          <div className="center">
            <span>
              Henüz üye değil misin?{" "}
              <Link className="register-btn" to="/kayit-ol">
                Kayıt Ol
              </Link>
            </span>
          </div>
        </div>
      </LoginPageBox>
      <LoginPageBox className="app-box">
        <AppForm />
      </LoginPageBox>
    </Container>
  );
};

export default Login;
