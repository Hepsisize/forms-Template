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
          keyName="checkbox options"
          label="checkbox"
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
            Other: false,
          }}
        />
        <SelectOneOrMore
          required
          isRadio
          keyName="radio options"
          label="Radio"
          options={[
            "Export",
            "Import",
            "Wholesaler",
            "Retailer",
            "Manufacturer",
            "Producer",
            "Freelancer",
            "Agency",
            "Service provider",
            "Distributor",
            "Non-profit organization",
            "Other",
          ]}
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
