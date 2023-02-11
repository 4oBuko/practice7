import React from "react";
import TextField from "../../../components/TextField";
// todo: move to components to the app
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const IllustrationForm = () => {
  return (
    <>
      <h2>Hello</h2>
      <div>
        <TextField id="filled-basic" label="User ID" variant="filled" />
      </div>
      <div>
        <FormLabel id="demo-radio-buttons-group-label">AI Generated</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="false"
          name="radio-buttons-group"
        >
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      </div>
      <div>
        <TextField id="filled-basic" label="Name" variant="filled" />
      </div>
    </>
  );
};

export default IllustrationForm;