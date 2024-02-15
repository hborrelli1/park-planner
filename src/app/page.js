'use client'

import React, {useState} from 'react';
import { Button, TextField, RadioGroup, FormControlLabel, Radio, Grid, Typography, Autocomplete } from '@mui/material';
import {BASE_URL, STATES} from './constants.js'
import Image from "next/image";
import { Box } from '@mui/system';
import styles from "./page.module.css";

export default function Home() {
  const [stateValue, setStateValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleStateSelect = (e, state) => {
    setStateValue(state.id)
  }

  const handleStateSearch = () => {
    fetchParkData('stateCode', stateValue)
  }

  const handleQueryChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleQuerySearch = () => {
    fetchParkData('q', searchValue)
  }

  const fetchParkData = async (type, query) => {
    try {
      const response = await fetch(`${BASE_URL}/parks?api_key=${process.env.NEXT_PUBLIC_NATIONAL_PARK_SERVICE_API_KEY}&${type}=${query}`);
      const jsonData = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const stateOptions = Object.keys(STATES).map(key => ({label: `${STATES[key]}`, id: key}));

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <h1>Park Planner</h1>
          <h2>A guide to help you plan your next national park visit.</h2>
        </div>
      </div>
      <Grid container direction="row">
        <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '50px'}}>
          <Typography>Search parks by state:</Typography>
          <Autocomplete
            fullWidth
            options={stateOptions}
            renderInput={(params) => <TextField {...params} label="State" />}
            value={stateValue} 
            onChange={handleStateSelect}
          />
          <Button variant="contained" onClick={handleStateSearch} >Search</Button>
        </Grid>
        <Grid item xs={6}  sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '50px'}}>
          <Typography>Search For parks</Typography>
          <TextField fullWidth value={searchValue} onChange={handleQueryChange} />
          <Button variant="contained" onClick={handleQuerySearch} >Search</Button>
        </Grid>
      </Grid>
    </div>
  );
}
