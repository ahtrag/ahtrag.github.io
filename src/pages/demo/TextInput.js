import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import TextInput from "../../components/TextInput";
import AccountIcon from "mdi-react/AccountIcon";
import EyeIcon from "mdi-react/EyeIcon";

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
    inputValue: ""
  });
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <TextInput
              label="Input"
              value={state.inputValue}
              id="Input"
              name="Input"
              placeholder="Input"
              variant="default"
              type="text"
              extra={{
                start: <AccountIcon style={{ color: "white" }} />,
                end: <EyeIcon style={{ color: "white" }} />
              }}
              onChange={e => setState({ ...state, inputValue: e.target.value })}
          />
        </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Text Input Component</h2>
          </div>
          <div className={classes.code} />
          <TextInput
            label="Input"
            value={state.inputValue}
            id="Input"
            name="Input"
            placeholder="Input"
            variant="default"
            type="text"
            extra={{
              start: <AccountIcon style={{ color: "white" }} />,
              end: <EyeIcon style={{ color: "white" }} />
            }}
            onChange={e => setState({ ...state, inputValue: e.target.value })}
          />
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default ModalComponent;
