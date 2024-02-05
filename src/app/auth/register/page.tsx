import Button from "@/components/Button/Button";
import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";

export default function ButtonUsage() {
  return (
    <Box>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Typography color="white">
            Enjoy your free music library now.
          </Typography>
        </Grid>
        <Grid item>
          <Button size="large">Register</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
