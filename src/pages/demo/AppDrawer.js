import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import AppDrawer from "../../components/AppDrawer";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";

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
    marginLeft: 245
  },
  appBar: {
    background: "black"
  },
  title: {
    color: "white"
  }
});

const AppDrawerComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactCodeSnippet
        lang="jsx"
        code={`
        <div>
          <AppDrawer
            showMenu
            title="Title"
            profile={<GithubCircleIcon />}
            className={classes.appBar}
          />
        </div>`}
      >
        <div className={classes.component}>
          <div className={classes.title}>
            <h2>AppDrawer Component</h2>
          </div>

          <div className={classes.code}>
            <AppDrawer
              showMenu
              title="Title"
              profile={<GithubCircleIcon />}
              className={classes.appBar}
            />
          </div>
        </div>
      </ReactCodeSnippet>
    </div>
  );
};

export default AppDrawerComponent;
