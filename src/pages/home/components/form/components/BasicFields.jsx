import React from "react";
import _ from "lodash";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../../../../../context/Form-context";
import { FORM_ACTIONS as ACTIONS } from "../../../../../reducers/formValuesReducer";

const txtFieldsInfo = [
  {
    label: "Name - Surname",
    placeholder: "ex. Aslan Ahmet",
    name: "name",
    type: "text",
    required: true,
  },
  [
    {
      label: "Your Full Address / business address",
      placeholder: "Write the full address",
      name: "address",
      type: "text",
      required: true,
      mdsize: 6,
    },
    {
      label: "Country",
      placeholder: "ex. Turkey",
      name: "country",
      type: "text",
      required: true,
      mdsize: 3,
    },
    {
      label: "Province",
      placeholder: "ex. Istanbul",
      name: "province",
      type: "text",
      required: true,
      mdsize: 3,
    },
  ],
  {
    label: "GSM",
    placeholder: "ex. +91xxxxxxxx",
    name: "GSM",
    type: "tel",
    required: true,
  },
  {
    label: "Email",
    placeholder: "ex. example@email.com",
    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "Company website",
    placeholder: "ex. https://hepsisize.net",
    name: "website",
    type: "url",
    required: false,
    helperText: (
      <Typography component="span" color="primary" fontStyle="italic">
        {`Should start with https://`}
      </Typography>
    ),
  },
];

function BasicFields() {
  //write code here
  const { setFormInfo } = useContext(FormContext);
  const changeFormValues = e => {
    const { value: payload, name: key } = e.target;
    const action = { type: ACTIONS.BASIC_ACTION, key, payload };
    setFormInfo(action);
  };
  const handleChange = _.debounce(changeFormValues, 500);

  return (
    <>
      {txtFieldsInfo.map((infoField, index) => {
        if (Array.isArray(infoField)) {
          /* for the array of address fields */
          return (
            <Box key={index}>
              <Grid container spacing={2}>
                {infoField.map(field => (
                  <Grid item key={field.name} xs={12} md={field.mdsize}>
                    <TextField {...field} onChange={handleChange} fullWidth />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        } else {
          /* for the rest of fields */
          return (
            <TextField
              {...infoField}
              key={infoField.name}
              onChange={handleChange}
            />
          );
        }
      })}
    </>
  );
}

export default BasicFields;
