import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Divider from "../../components/Divider";

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

const DividerComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <Divider
              variant="middle"
              style={{ backgroundColor: "white", height: "2px" }}
            />
          </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Divider Component</h2>
          </div>

          <div className={classes.code} />
          <Divider
            variant="middle"
            style={{ backgroundColor: "white", height: "2px" }}
          />
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default DividerComponent;
