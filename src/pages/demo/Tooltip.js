import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";

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

const TooltipComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <Tooltip label="Tooltip">
              <Button
                variant="contained"
                onClick={() => console.log("Click 1 time")}
                style={{ background: "black" }}
              >
                Hover Me
              </Button>
            </Tooltip>
          </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Tooltip Component</h2>
          </div>

          <div className={classes.code} />
          <Tooltip label="Tooltip">
            <Button
              variant="contained"
              onClick={() => console.log("Click 1 time")}
              style={{ background: "black" }}
            >
              Hover Me
            </Button>
          </Tooltip>
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default TooltipComponent;
