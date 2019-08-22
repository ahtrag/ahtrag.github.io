import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Avatar from "../../components/Avatar";

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
    width: 600,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "white"
  }
});

const AvatarComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
          <div>
            <Avatar
              src="https://avatars0.githubusercontent.com/u/583231?s=460&v=4"
              alt="Octocat"
              size={100}
            />
          </div>
        `}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>Avatar Component</h2>
          </div>
          <div className={classes.code} />
          <Avatar
            src="https://avatars0.githubusercontent.com/u/583231?s=460&v=4"
            alt="Octocato"
            size={100}
          />
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default AvatarComponent;
