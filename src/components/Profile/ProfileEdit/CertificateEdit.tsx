import React from "react";
import { Container, Form } from "react-bootstrap";
import { Formik } from "formik";
import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Tus from "@uppy/tus";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import toastr from "toastr"
import { ProfileSertificateListHeaders, uploadCertificateHeader, uploadFileText } from "../../../utilities/Constants/constantValues";

type Props = {};

const CertificateEdit = (props: Props) => {
  const initialValues = {};

    const uppy = new Uppy();

    uppy
      .use(Dashboard, {
        showProgressDetails: true,
        proudlyDisplayPoweredByUppy: true,
      })
      
    uppy
      .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/", limit: 6 });

    uppy.on("complete", (result) => {
      if (result.failed.length === 0) {
        console.log("Upload successful");
      } else {
        console.warn("Upload failed");
      }
      console.log("successful files:", result.successful);
      console.log("failed files:", result.failed);
    });

    const handleShow = () =>{
      (uppy.getPlugin('Dashboard') as any).openModal();
    }
    

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Container>
            <label className="header-text">{uploadCertificateHeader}</label>
            <div className="row certificate">
              <div className="col-12 tobeto-light-bg ">
                <div className="upload-area">
                  <div className="cursor-pointer">
                    <label htmlFor="fileInput">
                      <img
                        className="upload-area-image"
                        src={process.env.PUBLIC_URL + "/images/upload-file.svg"}
                        alt="Upload Area"
                        onClick={handleShow}
                      />
                    </label>
                    {/* <input
                      style={{ display: "none" }}
                      
                    /> */}
                  </div>
                  
                  <label className="uploadText">{uploadFileText}</label>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="table-responsive-sm">
              <table className="mt-8 corpTable table">
                <thead>
                  <tr>
                    <th>{ProfileSertificateListHeaders.fileName}</th>
                    <th className="text-center">{ProfileSertificateListHeaders.fileType}</th>
                    <th>{ProfileSertificateListHeaders.date}</th>
                    <th style={{ textAlign: "center" }}>{ProfileSertificateListHeaders.process}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nida Kul - Herkes İçin Kodlama - 1A.jpg</td>
                    <td className="png_icon text-center"></td>
                    <td>11.01.2024</td>
                    <td>
                      <button className=" btn fileIcon" onClick={()=>{toastr.info("Dosya indiriliyor")}}>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/fileIcon.svg"
                          }
                          alt="File Icon"
                          style={{ width: 50 }}
                        />
                      </button>
                      <button className=" btn trashIcon" onClick={()=>{toastr.error("Dosya kaldırıldı")}}>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/trashIcon.svg"
                          }
                          alt="Trash Icon"
                          style={{ width: 50 }}
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default CertificateEdit;