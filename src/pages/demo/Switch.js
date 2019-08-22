import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Switch from "../../components/Switch";

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

const ModalComponent = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    active: "On"
  });
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <Switch
              switchValues={["On", "Off"]}
              active={state.active}
              onSwitch={value => setState({ ...state, active: value })}
              style={{ background: "white" }}
            />
        </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Switch Component</h2>
          </div>

          <div className={classes.code} />
          <Switch
            switchValues={["On", "Off"]}
            active={state.active}
            onSwitch={value => setState({ ...state, active: value })}
            style={{ background: "white" }}
          />
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default ModalComponent;
