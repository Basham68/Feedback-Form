import React ,{ useState }  from 'react';
import { makeStyles,Typography, Select ,Paper ,FormControl ,MenuItem ,InputLabel } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paperControl: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    }
  }));

const FeedbackForm = () => {
    const classes = useStyles();


    const [questions, setQuestions] = useState([
        { id:1, ques:"Dolor deserunt tempor consectetur ipsum."},
        { id:2, ques:"Dolor deserunt tempor consectetur ipsum."},
        { id:3, ques:"Dolor deserunt tempor consectetur ipsum."},
        { id:4, ques:"Dolor deserunt tempor consectetur ipsum."},
        { id:5, ques:"Dolor deserunt tempor consectetur ipsum."},
        { id:6, ques:"Dolor deserunt tempor consectetur ipsum."},
        { id:7, ques:"Dolor deserunt tempor consectetur ipsum."},
    ]);

    const [branches, setBranches] = useState([
        { name:'mangalore' , id: 1 },
        { name:'udupi' , id: 2 },
        { name:'surathkal' , id: 3 }
    ]);
    
      const [stores, setStores] = useState([
        { name: 'falnir', branch_id: 1 , id: 1 },
        { name: 'pandeshwar', branch_id: 1 , id: 2 },
        { name: 'atttawar', branch_id: 1 , id: 3 },
        { name: 'udupi', branch_id: 2 , id: 4 },
        { name: 'manipal', branch_id: 2 , id: 5 },
        { name: 'krishnapur', branch_id: 3 , id: 6 },
        { name: 'katipalla', branch_id: 3 , id: 7 },
      ]);
    
    const [currentStore, setCurrentStore] = useState('');
    
    const [currentBranch, setcurrentBranch] = useState('');

      const handleBranchChange = (event) => {
        setcurrentBranch(event.target.value);
      };
    
      const handleStoreChange = (event) => {
        setCurrentStore(event.target.value);
    };
    
    const handleChange = (id, value) => {
        value? (console.log("for question with id " + id + " the rating is " + value))
            : (
                console.log("please qive some rating")
            )
    }
    

    const handleClick = () => {
        console.log(currentBranch, currentStore);
    }
    return ( 
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="branch">Branch </InputLabel>
                <Select labelId="branch" id="simple-select-branch" value={currentBranch} onChange={handleBranchChange} >
                    {branches.map(branch => {
                        return (
                        <MenuItem key= {branch.id} value={branch.name}>{ branch.name}</MenuItem>
                        )
                    }) }
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="store">Store</InputLabel>
                <Select labelId="store" id="simple-select-store" value = { currentStore } onChange={handleStoreChange} >
                    {stores.map(store => {
                        return (
                        <MenuItem key= {store.id} value={store.name}>{ store.name}</MenuItem>
                        )
                    }) }
                </Select>
            </FormControl>

            {questions.map(question => {
                return (
                    <Paper key={question.id} elevation={3} className={classes.paperControl} >
                        <Typography>{question.ques}</Typography>
                        <Rating required size="large" onChange={(e, value) => handleChange(question.id, value)} />
                    </Paper>
                )
            })
            }
        
            <Button variant="contained" color="primary" className={ classes.buttonStyle} onClick ={ handleClick }> Primary </Button>
        </div> 
     );
}
 
export default FeedbackForm;











    
