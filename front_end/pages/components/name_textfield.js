import { TextField } from "@mui/material";
const Name_textfield = () => {
    return ( 
        <TextField
        fullWidth
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        variant="standard"
      />
     );
}
 
export default Name_textfield;