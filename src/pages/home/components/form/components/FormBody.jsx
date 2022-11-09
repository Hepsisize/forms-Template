import { Box, Stack } from "@mui/material";
import BasicFields from "./BasicFields";
import React from "react";
import SelectOneOrMore from "./SelectOneOrMore";
import UploadPhotos from "./UploadPhotos";

function FormBody() {
  //write code here

  return (
    <Box>
      <Stack spacing={3}>
        <BasicFields />
        <SelectOneOrMore
          required
          keyName="jobTypes"
          label="Select job type/s"
          options={{
            Export: false,
            Import: false,
            Wholesaler: false,
            Retailer: false,
            Manufacturer: false,
            Producer: false,
            Freelancer: false,
            Agency: false,
            "Service provider": false,
            Distributor: false,
            "Non-profit organization": false,
          }}
        />
        <UploadPhotos
          title="test"
          keyName="testPhotos"
          maxFiles={2}
          conditions={["First condition", "Second condition"]}
        />
      </Stack>
    </Box>
  );
}

export default FormBody;
