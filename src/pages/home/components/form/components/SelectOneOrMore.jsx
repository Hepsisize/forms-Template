import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  TextField,
} from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import { FormContext } from "../../../../../context/Form-context";
import { FORM_ACTIONS as ACTIONS } from "../../../../../reducers/formValuesReducer";

function SelectOneOrMore({
  keyName = "",
  options,
  required = false,
  label = "",
  isRadio = false,
}) {
  //! Important integrations when using this component
  //todo: change the validation before submitting the form
  //todo: if you will add the other key. The first letter should be capital (Other)
  const { setFormInfo } = useContext(FormContext);
  const [isOther, setIsOther] = useState(false);

  //^ checkboxes case logic
  const [checkboxOptions, setCheckboxOptions] = useState({
    ...options,
    otherValue: "",
  });

  const handleSelectCheckboxOption = e => {
    const { checked, name } = e.target;
    setCheckboxOptions(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  //^ radio case logic
  const [checkedRadio, setCheckedRadio] = useState("");

  const handleSelectRadioOption = e => {
    const value = e.target.value;
    setCheckedRadio(value);
  };

  //^ both cases logic
  // change isOther state
  useEffect(() => {
    let shouldBeOther = false;
    if (isRadio) {
      shouldBeOther = checkedRadio.includes("Other");
    } else {
      shouldBeOther = checkboxOptions.Other;
    }
    setIsOther(shouldBeOther);
    // eslint-disable-next-line
  }, [checkboxOptions.Other, checkedRadio]);

  // store the Other value for both cases
  const handleOtherEntry = e => {
    const value = `Other: ${e.target.value}`;
    if (isRadio) {
      setCheckedRadio(value);
    } else {
      setCheckboxOptions(prev => ({ ...prev, otherValue: value }));
    }
  };

  // store the data in the context
  useEffect(() => {
    if (isRadio) {
      setFormInfo({
        type: ACTIONS.BASIC_ACTION,
        key: keyName,
        payload: checkedRadio,
      });
    } else {
      let arrayOfSelectedOptions = [];
      for (const option in checkboxOptions) {
        // check if Other key is true and there is something written in otherValue key
        if (option === "Other" && option && checkboxOptions.otherValue)
          arrayOfSelectedOptions.push(checkboxOptions.otherValue);
        // push the key names for the rest of object keys
        else if (
          checkboxOptions[option] &&
          option !== "Other" &&
          option !== "otherValue"
        )
          arrayOfSelectedOptions.push(option);
      }

      setFormInfo({
        type: ACTIONS.BASIC_ACTION,
        key: keyName,
        payload: arrayOfSelectedOptions,
      });
    }
    // eslint-disable-next-line
  }, [checkboxOptions, checkedRadio]);

  // ^ check the options for first time
  useEffect(() => {
    if (isRadio && !options.includes("Other"))
      console.error("Options prop should have 'Other' element");
    if (!isRadio && options.Other === undefined)
      console.error("Options prop should have 'Other : false'");
    // eslint-disable-next-line
  }, []);
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
          {isRadio
            ? options.map((radioOption, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={checkedRadio.includes(radioOption)}
                        onChange={handleSelectRadioOption}
                        name={radioOption}
                        value={radioOption}
                      />
                    }
                    label={radioOption}
                  />
                </Grid>
              ))
            : // eslint-disable-next-line
              Object.entries(checkboxOptions).map(([key]) => {
                if (key !== "otherValue")
                  return (
                    <Grid item key={key} xs={12} sm={6} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxOptions.key}
                            onChange={handleSelectCheckboxOption}
                            name={key}
                            value={checkboxOptions.key}
                          />
                        }
                        label={key}
                      />
                    </Grid>
                  );
              })}
          <Grid item xs={12}>
            {isOther && (
              <TextField label="Others" fullWidth onChange={handleOtherEntry} />
            )}
          </Grid>
        </Grid>
      </FormGroup>
    </FormControl>
  );
}

export default SelectOneOrMore;
