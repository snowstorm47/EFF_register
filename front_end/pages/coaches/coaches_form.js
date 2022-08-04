import { Grid } from "@mui/material";
import {TextField} from "@mui/material";
import {FormLabel} from "@mui/material";
import {RadioGroup} from "@mui/material";
import {FormControlLabel} from "@mui/material";
import{ Radio } from "@mui/material";
import{ MenuItem }from "@mui/material";
import {Select} from "@mui/material";
import{ FormControl} from "@mui/material";
import{ InputLabel} from "@mui/material";
import UploadFile from "../components/uploadfile";

const Coachesform = () => {
  const dateLimit = new Date();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return ( 
    <Grid container spacing={2}>

    <h2> Personal Information </h2>

    <Grid item xs={12}>

    <p> please fill out all the personal information about your coaches on the below form. </p>

    </Grid>


      
    <Grid item xs={12}>

<UploadFile/>

</Grid>


        <Grid item xs={12}>
        <TextField
          placeholder='Type your firstname here'
          name='firstname'
          label='firstname'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder='Type your middlename here'
          name='middlename'
          label='middlename'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder='Type your lastname here'
          name='lastname'
          label='lastname'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>


      
      <Grid item xs={12}>

    
<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group"
>
<FormControlLabel value="female" control={<Radio />} label="Female" />
<FormControlLabel value="male" control={<Radio />} label="Male" />

</RadioGroup>

</Grid>

      <Grid item xs={12}>
        <TextField
          placeholder='Type your email here'
          name='email'
          label='email'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder='Type your nationality here'
          name='nationality'
          label='nationality'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder='Type your placeofbirth here'
          name='placeofbirth'
          label='placeofbirth'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>

      <Grid item xs={12}>
        <TextField
          type='date'
          name='birthdate'
          id='birthdate'
          label='Birthdate'
          helperText='You need to be at least 18 years old'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10)
          }}
          required
          fullWidth
        />
      </Grid>


      <Grid item xs={12}>
        <TextField
          placeholder='Type your passportnumber here'
          name='passportnumber'
          label='passportnumber'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>


      <Grid item xs={12}>

          <h2>Educational Information</h2>
          <p> Below are a set of questions for the educational information for registartion </p>

      </Grid>


          <Grid item xs={12}>
            <FormControl sx={{ width: 400 }}>
            <InputLabel>Educational State</InputLabel>
            <Select 
            id="coachEducationalLevel"
            onChange={handleChange}
            fullwidth
            >
              <MenuItem> First Level </MenuItem>
              <MenuItem> Second Level </MenuItem>
              <MenuItem> CAF D Coach </MenuItem>
              <MenuItem> CAF C Coach </MenuItem>
              <MenuItem>CAF B Coach</MenuItem>
              <MenuItem>CAF A Coach</MenuItem>
              <MenuItem>CAF Pro Coach</MenuItem>

            </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
        <TextField
          placeholder='Type your certificationID here'
          name='certificationID'
          label='certificationID'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>


      <Grid item xs={12}>
        <TextField
          type='date'
          name='CertificationTaken'
          id='CertificationTaken'
          label='CertificationTaken'
          helperText='please add the correct date'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10)
          }}
          required
          fullWidth
        />
      </Grid>



      <Grid item xs={12}>
        <TextField
          placeholder='Type the place of certificate concdede here'
          name='placeofcertificateconceded'
          label='placeofcertificateconceded'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
       
      </Grid>

<Grid item xs={12}>
        <TextField
          id='experiance'
          label='experiance'
         
          name='eperiance'
          placeholder='Type few words about you'
          variant='outlined'
          margin='normal'
          multiline
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            maxLength: 200
          }}
          fullWidth
          rows={3}
        />
      </Grid>

</Grid>




   );
}
 
export default Coachesform;