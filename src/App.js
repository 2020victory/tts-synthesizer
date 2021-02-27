import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Text To Speech Synthesizer</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "70vh" }}
      >
        <Grid item>
          <TextField
            id="outlined-multiline-static"
            label="Text Input"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<GraphicEqIcon />}
          >
            Generate Audio
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
