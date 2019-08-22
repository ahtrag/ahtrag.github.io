import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import IconButton from "../../components/IconButton";
import AccountIcon from "mdi-react/AccountIcon";

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

const IconButtonComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <IconButton>
              <AccountIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Icon Button Component</h2>
          </div>

          <div className={classes.code} />
          <IconButton>
            <AccountIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default IconButtonComponent;
