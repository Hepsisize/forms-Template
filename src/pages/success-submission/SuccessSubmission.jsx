import React from "react";
import { Fade, Paper, Slide, Stack, Typography, Zoom } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SuccessSubmission() {
  //write code here

  return (
    <Slide in timeout={600}>
      <Paper sx={{ p: 5, borderRadius: 10, my: 7 }}>
        <Stack alignItems="center" spacing={5}>
          <Zoom in timeout={1000}>
            <CheckCircleIcon sx={{ fontSize: "15rem" }} color="success" />
          </Zoom>
          <Fade in timeout={1500}>
            <Stack spacing={4}>
              <Typography color="success.main" variant="h3" textAlign="center">
                Congratulations
              </Typography>
              <Typography color="success.light" variant="h5" textAlign="center">
                The request for free ads for 7 months has been submitted
                successfully <br />
                You will receive a confirmation email for your submission,
                please check your inbox/Junk
              </Typography>
            </Stack>
          </Fade>
        </Stack>
      </Paper>
    </Slide>
  );
}

export default SuccessSubmission;
