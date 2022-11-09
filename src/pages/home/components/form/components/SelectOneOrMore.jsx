import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
} from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import { FormContext } from "../../../../../context/Form-context";
import { FORM_ACTIONS as ACTIONS } from "../../../../../reducers/formValuesReducer";

function SelectOneOrMore({
  keyName = "",
  options = {},
  required = false,
  label = "",
}) {
  //! Important integrations when using this component
  //todo: change the validation before submitting the form

  const { setFormInfo } = useContext(FormContext);

  const [checkOptions, setCheckOptions] = useState(options);
  const handleChange = event => {
    setCheckOptions(prev => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  useEffect(() => {
    // write code here
    let arrayOfSelectedOptions = [];
    for (const option in checkOptions) {
      if (checkOptions[option]) arrayOfSelectedOptions.push(option);
    }

    setFormInfo({
      type: ACTIONS.BASIC_ACTION,
      key: keyName,
      payload: arrayOfSelectedOptions,
    });
    // eslint-disable-next-line
  }, [checkOptions]);

  return (
    <FormControl
      component="fieldset"
      sx={{
        border: "2px solid",
        borderColor: "primary.main",
        borderRadius: "10px",
        p: "10px",
        m: 3,
      }}
    >
      <FormLabel
        component="legend"
        required={required}
        sx={{ px: 2, fontWeight: "bold", color: "primary.main" }}
      >
        {label}{" "}
      </FormLabel>
      <FormGroup>
        <Grid container>
          {Object.entries(checkOptions).map(([key]) => (
            <Grid item key={key} xs={12} sm={6} md={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkOptions.key}
                    onChange={handleChange}
                    name={key}
                  />
                }
                label={key}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </FormControl>
  );
}

export default SelectOneOrMore;
