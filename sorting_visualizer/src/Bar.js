import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme, height, width, color }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: color,
  height: height,
  width: width,
  lineHeight: "300%"
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Bar(props) {
  return (

      <Grid container spacing={0} sx={{ justifyContent: 'center'}} >
      {[darkTheme].map((theme, index) => (
          <ThemeProvider theme={theme}>
              {props.array.map((num) => (
                
			
		    num % 4 == 0 ? (
		    <Item height={35 * num + "px" } width={80/props.array.length + "%"} color={"DodgerBlue"} 
		      key={num} elevation={num} />
			) : ( 
			<Item height={35 * num + "px" } width={80/props.array.length + "%"} color={"black"}
                      key={num} elevation={num} />
			)

		    
		  
              ))}
          </ThemeProvider>
      ))}
	</Grid>
  );
}
