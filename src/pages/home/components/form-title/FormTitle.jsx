import { Box, Typography } from "@mui/material";
import React from "react";

function FormTitle() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Form Title
      </Typography>
      <Typography variant="h3" textAlign="center" color="text.secondary">
        Some sentence
      </Typography>
    </Box>
  );
}

export default FormTitle;
