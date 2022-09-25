import { Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import RenderErrors from "../../../../components/RenderErrors";
import SubmitButton from "../../../../components/SubmitButton";
import { FormContext } from "../../../../context/Form-context";
import { produceHTML } from "../../../../utils/produceHTML";
import validateForm from "../../../../utils/validateFormFields";

function MyForm() {
  //write code here
  //todo: change email subject
  const EMAIL_SUBJECT = "Request 7 month free ads";
  const { formValues } = useContext(FormContext);
  //TODO: get right keys
  const { email } = formValues;
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const msg = {
      to: email,
      bcc: [
        {
          email: "pro@hepsisize.net",
          name: "dev mail",
        },
        {
          email: "ads@hepsisize.net",
          name: "management",
        },
      ],
      from: {
        email: "ads@hepsisize.net",
        name: "Hepsisize",
      },
      subject: `${EMAIL_SUBJECT} (Received✅)`,
      html: produceHTML(formValues),
    };
    //TODO: put the POST endpoint in the env file
    const url = process.env.REACT_APP_SEND_EMAIL;
    const headers = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(msg),
    };

    //TODO: Modify the validate function
    const ErrorsArray = validateForm(formValues);
    const isErrors = ErrorsArray.length > 0;
    if (isErrors) {
      setErrors(ErrorsArray);
      window.scrollTo(0, 0);
      return;
    }

    try {
      setIsLoading(true);
      setErrors([]);

      const res = await fetch(url, headers);
      const data = await res.json();

      if (!data.success) throw new Error(`(${res.status}): ${data.result}`);
      navigate("/success-submission");
    } catch (error) {
      console.error(error.message);
      setErrors([error.message]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Paper sx={{ p: 5, borderRadius: 10, my: 7 }}>
      <RenderErrors errors={errors} />

      <form onSubmit={handleSubmit}>
        {/* TODO: Render the form content here */}

        <SubmitButton />
        <LoaderSpinner spin={isLoading} />
      </form>
    </Paper>
  );
}

export default MyForm;
