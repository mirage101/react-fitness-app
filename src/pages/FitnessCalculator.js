import {useState} from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Grid, Typography } from '@mui/material';
import { fetchData, fitnessCalcOptions } from '../utils/fetchData';
const FitnessCalculator = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(100);
  const [activityLevel, setActivityLevel] = useState('level_1');
  const [data, setData] = useState({
    BMR: 0,
    goals: {},
  });

  const handleCalculateCalories = async () => {
    const calcDailyCals = "https://fitness-calculator.p.rapidapi.com/dailycalorie";
    
    
    try {
      const calcDailyCalsData = await fetchData(`${calcDailyCals}?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`, fitnessCalcOptions);
      
      setData(calcDailyCalsData.data);

    } catch (error) {
      console.error('Error fetching data:', error);
      // console.log(calcDailyCalsData);
      // Handle the error as needed
    }

    
  };
  return (
    <>
     <Grid container
    direction="column"
    justifyContent="space-between"
    alignItems="flex-start"
    spacing={3}
    >
      <Grid item xs={4}>
        <Typography variant="h3">Daily calory requirements</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Height (cm)"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Weight (kg)"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Activity Level</InputLabel>
          <Select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <MenuItem value="level_1">Sedentary: little or no exercise</MenuItem>
            <MenuItem value="level_2">Exercise 1-3 times/week</MenuItem>
            <MenuItem value="level_3">Exercise 4-5 times/week</MenuItem>
            <MenuItem value="level_4">Daily exercise or intense exercise 3-4 times/week</MenuItem>
            <MenuItem value="level_5">Intense exercise 6-7 times/week</MenuItem>
            <MenuItem value="level_6">Very intense exercise daily, or physical job</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" onClick={handleCalculateCalories}>
          Calculate Calories
        </Button>
      </Grid>
      <Grid item xs={12}>
      {console.log(data)}
      Daily BMR: {data.BMR} kcal
      {console.log(data.goals)}
      </Grid>
      <Grid item xs={12}>
  Goals:<br/>
  {data.goals && Object.keys(data.goals).length > 0 ? (
    <ul>
      {Object.keys(data.goals).map((goal) => (
        <li key={goal}>
          {goal}:
          {data.goals[goal] && typeof data.goals[goal] === 'object' ? (
            <>
            {data.goals[goal]['loss weight'] ? ` ${data.goals[goal]['loss weight']} - ${data.goals[goal]['calory']} kcal` : ` ${data.goals[goal]['gain weight']} - ${data.goals[goal]['calory']} kcal`

            }
            </>
          ) : (
            // Handle the case where there are no nested properties
            ` - ${data.goals[goal]} kcal`
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p>No goals available</p>
  )}
</Grid>


    </Grid>
    <Grid container
    direction="column"
    justifyContent="space-between"
    alignItems="flex-start"
    spacing={3}
    >
      <Grid item xs={4}>
        <Typography variant="h3">Burned Calorie From Activity calculator</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>List Activities</InputLabel>
          <Select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <MenuItem value="level_1">Sedentary: little or no exercise</MenuItem>
            <MenuItem value="level_2">Exercise 1-3 times/week</MenuItem>
            <MenuItem value="level_3">Exercise 4-5 times/week</MenuItem>
            <MenuItem value="level_4">Daily exercise or intense exercise 3-4 times/week</MenuItem>
            <MenuItem value="level_5">Intense exercise 6-7 times/week</MenuItem>
            <MenuItem value="level_6">Very intense exercise daily, or physical job</MenuItem>
          </Select>
        </FormControl>
      </Grid> 
    TBD

    </Grid>
    </>
   
  )
}

export default FitnessCalculator
