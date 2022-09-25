import { Button, Typography } from "@mui/material";
import React from "react";

function SubmitButton() {
  //write code here

  return (
    <Button
      type="submit"
      variant="contained"
      size="large"
      sx={{ my: 3 }}
      fullWidth
    >
      <Typography variant="h6">Submit request</Typography>
    </Button>
  );
}

export default SubmitButton;
