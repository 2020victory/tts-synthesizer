import {Grid, AppBar, Toolbar, Typography, TextField, IconButton} from '@material-ui/core';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

function App() {

  return (
    <>
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h5">Text To Speech Synthesizer</Typography>
    </Toolbar>
    </AppBar>
    <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: "70vh"}}>
    <Grid item>
      <TextField id="outlined-basic" label="Text Input" variant="outlined" color="primary" />
    </Grid>
    <Grid item>
    <IconButton color="primary" aria-label="download">
      <GetAppRoundedIcon />
    </IconButton>
    <IconButton color="secondary" aria-label="play">
      <PlayCircleOutlineRoundedIcon />
    </IconButton>
    </Grid>
    </Grid>
    </>
  );
}

export default App;
