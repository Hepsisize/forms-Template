import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  Box,
  CardActionArea,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../../../../../context/Form-context";
import { FORM_ACTIONS as ACTIONS } from "../../../../../reducers/formValuesReducer";
import { arrayOfAttachments, totalSize } from "../../../../../utils/files";
import RenderErrors from "../../../../../components/RenderErrors";

function UploadPhotos({
  title = "",
  keyName = "",
  maxFiles = 3,
  maxSize = 2,
  conditions = [],
}) {
  //write code here

  const { setFormInfo, formValues } = useContext(FormContext);
  const [attachmentError, setAttachmentError] = useState(null);

  async function viewDetails(e) {
    setAttachmentError(null);
    const files = e.target.files;
    let filesArray = [];

    // Validate then putting only files in a new array to allow array methods to work
    for (const file in files) {
      // next round if the index is NAN "length / item"
      if (isNaN(file)) continue;

      // validate extension
      const fileName = files[file].name;
      const fileExtensionLowerCase = fileName.split(".")[1].toLowerCase();
      const allowedExtensions = ["jpg", "jpeg", "png"];
      if (allowedExtensions.every(ext => ext !== fileExtensionLowerCase)) {
        setAttachmentError("JPG, JPEG and PNG are only allowed format");
        filesArray = [];
        break;
      }

      filesArray.push(files[file]);
    }

    const filesCount = filesArray.length;
    const filesSize = totalSize(filesArray);

    // validate quantity and size then save files into the state.
    if (filesCount > maxFiles || filesSize > maxSize) {
      const errorMsg =
        filesCount > maxFiles
          ? `You choose ${filesCount} files but maximum ${maxFiles} ${
              maxFiles > 1 ? "photos are" : "photo is"
            } allowed`
          : `total size should be less than ${maxSize} MB but got ${filesSize} MB.`;
      setAttachmentError(errorMsg);
      e.target.value = "";
      return;
    } else if (filesArray.length > 0) {
      arrayOfAttachments(filesArray).then(payload =>
        setFormInfo({ type: ACTIONS.BASIC_ACTION, key: keyName, payload })
      );
    }
  }
  return (
    <Box
      sx={{
        border: "2px solid lightGrey",
        borderRadius: "10px",
        p: { xs: 1, md: 3 },
      }}
    >
      {attachmentError && <RenderErrors errors={[attachmentError]} />}
      <Grid
        container
        spacing={5}
        sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
      >
        {/* upload button */}
        <Grid item xs={12} md={6}>
          <CardActionArea sx={{ p: 2 }}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              disableRipple
              sx={{ width: "100%" }}
            >
              <input
                hidden
                multiple
                accept="image/*"
                type="file"
                onChange={viewDetails}
              />
              <Grid
                container
                direction="column"
                sx={{
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Grid item xs={12}>
                  <Stack direction="row" alignItems="center">
                    <AddAPhotoIcon sx={{ width: "40px", height: "40px" }} />
                    <Typography ml={1} fontWeight="bold" textAlign="left">
                      {title}
                    </Typography>
                  </Stack>
                </Grid>

                {/* conditions */}
                {conditions.length && (
                  <Grid item xs={12} mt={2}>
                    {conditions.map((condition, i) => (
                      <Typography
                        key={i}
                        ml={2}
                        color="primary"
                        textAlign="left"
                      >
                        - {condition}
                      </Typography>
                    ))}
                  </Grid>
                )}
              </Grid>
            </IconButton>
          </CardActionArea>
        </Grid>

        {/* selected files */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="column"
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Grid item>
              <Typography color="primary" variant="h6">
                Selected {`${maxFiles > 1 ? "photos" : "photo"}`}:
              </Typography>
            </Grid>
            <Grid item>
              {formValues[keyName]?.map((file, i) => (
                <Typography key={i}>{file.filename}</Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UploadPhotos;
