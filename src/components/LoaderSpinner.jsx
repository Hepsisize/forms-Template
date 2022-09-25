import { Box, CircularProgress } from "@mui/material";
import React from "react";

function LoaderSpinner({ spin }) {
  //write code here

  return (
    <>
      {spin && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default LoaderSpinner;
