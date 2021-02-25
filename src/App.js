import {AppBar, Toolbar, Typography, TextField} from '@material-ui/core';

function App() {
  return (
    <>
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h5">Text To Speech Synthesizer</Typography>
    </Toolbar>
    </AppBar>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </>
  );
}

export default App;
