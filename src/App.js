import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import { useState } from "react";
import { fetchAudio } from "./services";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const HOST = "https://ed12ae190e78.ngrok.io";

function App() {
  const classes = useStyles();
  const [blob, setBlob] = useState(null);
  const [key, setKey] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const getAudio = () => {
    fetchAudio(`${HOST}/audio/file/${text}`, (data) => {
      if (data) {
        setLoading(false);
        setBlob(data);
        setKey(text.replace(" ", "") + Date.now().toString());
      } else if (data === undefined) {
        setLoading(true);
      } else {
        console.log("failed");
        setLoading(false);
      }
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Text To Speech Synthesizer</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 10 }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          style={{ minHeight: "90vh" }}
          spacing={2}
        >
          <Grid item>
            <TextField
              label="Text Input"
              multiline
              rows={4}
              variant="outlined"
              color="secondary"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<GraphicEqIcon />}
              onClick={getAudio}
              disabled={loading}
            >
              Generate Audio
            </Button>
          </Grid>
          {blob && (
            <>
              <Grid item>
                <audio key={key} controls>
                  <source src={blob} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </Grid>
              <Grid item>
                <Link
                  color="primary"
                  className={classes.button}
                  href={blob}
                  download={"audio.wav"}
                >
                  Download
                </Link>
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </>
  );
}

export default App;
