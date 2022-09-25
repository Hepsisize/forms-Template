import { Alert } from "@mui/material";
import React from "react";

function RenderErrors({ errors }) {
  //write code here

  return (
    <>
      {errors.length > 0 &&
        errors.map((err, index) => (
          <Alert severity="error" sx={{ my: 2 }} key={index}>
            {err}
          </Alert>
        ))}
    </>
  );
}

export default RenderErrors;
