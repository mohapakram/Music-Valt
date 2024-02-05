"use client";
import { colors } from "../../config/theme";
import { Grid } from "@mui/material";

export default ({ children }: { children: React.ReactNode }) => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-end"
    spacing={2}
    height={"102vh"}
    sx={{ background: colors.black, padding: "25px" }}
  >
    <Grid item>{children}</Grid>
  </Grid>
);
