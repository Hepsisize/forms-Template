import { Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import RenderErrors from "../../../../components/RenderErrors";
import SubmitButton from "../../../../components/SubmitButton";
import { FormContext } from "../../../../context/Form-context";
import { produceHTML } from "../../../../utils/produceHTML";
import validateForm from "../../../../utils/validateFormFields";
import FormBody from "./components/FormBody";

function MyForm() {
  //write code here
  const EMAIL_SUBJECT = "Free registration confirmation";
  const { formValues, errors, setErrors } = useContext(FormContext);
  const { email, logo, productPhotos, bannerPhoto } = formValues;

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    //TODO: Modify the validate function
    const ErrorsArray = validateForm(formValues);
    const isErrors = ErrorsArray.length > 0;
    if (isErrors) {
      setErrors(ErrorsArray);
      window.scrollTo(0, 0);
      return;
    }

    const msg = {
      to: email,
      bcc: [
        {
          email: "pro@hepsisize.net",
          name: "dev mail",
        },
        {
          email: "ads@hepsisize.net",
          name: "Hepsisize",
        },
      ],
      from: {
        email: "ads@hepsisize.net",
        name: "Hepsisize",
      },
      attachments: [...logo, ...bannerPhoto, ...productPhotos],
      subject: `${EMAIL_SUBJECT} (Received✅)`,
      html: produceHTML(formValues),
    };

    //TODO: put the POST endpoint in the env file
    const url = process.env.REACT_APP_SEND_EMAIL_SERVER_ENDPOINT;
    const headers = {
      headers: {
        "Content-Type": "application/json",
        //TODO: modify server api key in the env file
        api: process.env.REACT_APP_SEND_EMAIL_SERVER_API,
      },
      method: "POST",
      body: JSON.stringify(msg),
    };

    try {
      setIsLoading(true);
      setErrors([]);

      const res = await fetch(url, headers);
      const data = await res.json();

      if (!data.ok) throw new Error(`(${res.status}): ${data.msg}`);
      navigate("/success-submission");
    } catch (error) {
      console.error(error.message);
      setErrors([error.message]);
      window.scrollTo(0, 0);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Paper sx={{ p: { xs: 2, md: 5 }, borderRadius: "10px", my: 7 }}>
      <RenderErrors errors={errors} />

      <form onSubmit={handleSubmit}>
        {/* TODO: Render the form content here */}
        <FormBody />
        {/* TODO: Render the form content here */}

        <SubmitButton />
        <LoaderSpinner spin={isLoading} />
      </form>
    </Paper>
  );
}

export default MyForm;
