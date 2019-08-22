import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Paper from "../../components/Paper";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px"
  },
  code: {
    marginTop: 36
  },
  component: {
    width: 500,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px"
  },
  title: {
    color: "white"
  },
  paper: {
    width: 500,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const PaperComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <Paper 
              style={{
                width: 500,
                height: 250,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              elevation="mid">
              This is Paper
            </Paper>
          </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Paper Component</h2>
          </div>

          <div className={classes.code} />
          <Paper className={classes.paper} elevation="mid">
            This is Paper
          </Paper>
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default PaperComponent;
