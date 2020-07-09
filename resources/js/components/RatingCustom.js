import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});



const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RatingCustom() {

  const one = useStyles();
  const two = useStyles();
  const three = useStyles();
  const four = useStyles();
  const five = useStyles();

  return (
    <div>
      <Card className={one.root}>
      <CardContent>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">this is the question</Typography>
      <Rating
        name="customized-icons1"
       // defaultValue={2}
        getLabelText={(value) => customIcons[value].label}
        IconContainerComponent={IconContainer}
      />
    </Box>
      </CardContent>
    </Card>
    <br></br>

    <Card className={two.root}>
    <CardContent>
    <Box component="fieldset" mb={3} borderColor="transparent">
    <Typography component="legend">this is the question</Typography>
    <Rating
      name="customized-icons2"
     // defaultValue={2}
      getLabelText={(value) => customIcons[value].label}
      IconContainerComponent={IconContainer}
    />
  </Box>
    </CardContent>
  </Card>
  <br></br>

  <Card className={three.root}>
  <CardContent>
  <Box component="fieldset" mb={3} borderColor="transparent">
  <Typography component="legend">this is the question</Typography>
  <Rating
    name="customized-icons3"
   // defaultValue={2}
    getLabelText={(value) => customIcons[value].label}
    IconContainerComponent={IconContainer}
  />
</Box>
  </CardContent>
</Card>
<br></br>

<Card className={four.root}>
<CardContent>
<Box component="fieldset" mb={3} borderColor="transparent">
<Typography component="legend">this is the question</Typography>
<Rating
  name="customized-icons4"
 // defaultValue={2}
  getLabelText={(value) => customIcons[value].label}
  IconContainerComponent={IconContainer}
/>
</Box>
</CardContent>
</Card>
<br></br>

<Card className={five.root}>
<CardContent>
<Box component="fieldset" mb={3} borderColor="transparent">
<Typography component="legend">this is the question</Typography>
<Rating
  name="customized-icons5"
 // defaultValue={2}
  getLabelText={(value) => customIcons[value].label}
  IconContainerComponent={IconContainer}
/>
</Box>
</CardContent>
</Card>
<br></br>




    </div>
  );
}

