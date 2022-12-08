import React from 'react';
import { Grid } from '@mui/material';
import TeamCard from '../items/TeamCard';

const Team = () => {
  return (
    <section>
      <Grid container spacing={3}>
        {Array(8).fill(
          <Grid item xs={12} md={4}>
            <TeamCard
              position="Product Designer"
              name="Product Designer"
              description="asdadadasdasdadasdasdasdasd"
              />
          </Grid>
        )}
      </Grid>
    </section>
  )
}

export default Team