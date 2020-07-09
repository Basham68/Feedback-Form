import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const handleChange = (e) => {

};

 const SimpleSelect = () => {

  const classes = useStyles();

  return (
    <div>
      <FormControl className = { classes.formControl } >
        <InputLabel id="branch">Branch</InputLabel>
        <Select
          labelId="branch"
          id="branch"
          //  value={age}
          onChange={handleChange}
          renderValue={(value) => ` ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>

      <FormControl className = { classes.formControl } >
      <InputLabel id="store">Store</InputLabel>
      <Select
        labelId="store"
        id="store"
        //  value={age}
        onChange={handleChange}
        renderValue={(value) => ` ${value}`}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
    </FormControl>
      </div>
  )
}

export default SimpleSelect