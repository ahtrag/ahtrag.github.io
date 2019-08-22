import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Loading from "../../components/Loading";

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
    alignItems: "center"
  },
  title: {
    color: "white"
  }
});

const LoadingComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <Loading color="white" random={false}/>
          </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Loading Component</h2>
          </div>

          <div className={classes.code} />
          <Loading color="white" random={false} />
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default LoadingComponent;
