import { createTheme } from "@mui/material/styles";

const theme = createTheme({
 palette: {
   primary: {
     main: "#56903A",
   },
 },
 components: {
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    }
  }
 }
});

export default theme