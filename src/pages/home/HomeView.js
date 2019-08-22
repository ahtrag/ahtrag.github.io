import React from "react";
import { globalStyles } from "../../utils/styles";
import { createUseStyles } from "react-jss";

//Icon
import GithubCircleIcon from "mdi-react/GithubCircleIcon";

//Component
import Paper from "../../components/Paper";
import AppDrawer from "../../components/AppDrawer";
import IconButton from "../../components/IconButton";
import Tooltip from "../../components/Tooltip";

//Demo
import Home from "../demo/Home";
import AppDrawerComponent from "../demo/AppDrawer";
import AvatarComponent from "../demo/Avatar";
import ButtonComponent from "../demo/Button";
import DividerComponent from "../demo/Divider";
import DrawerComponent from "../demo/Drawer";
import GridComponent from "../demo/Grid";
import IconButtonComponent from "../demo/IconButton";
import LoadingComponent from "../demo/Loading";
import ModalComponent from "../demo/Modal";
import PaperComponent from "../demo/Paper";
import SelectComponent from "../demo/Select";
import SwitchComponent from "../demo/Switch";
import TextInputComponent from "../demo/TextInput";
import TooltipComponent from "../demo/Tooltip";

const useStyles = createUseStyles({
  github: {
    color: "white"
  },
  menuComponent: {
    color: "black"
  },
  icon: {
    height: 35,
    width: 35
  }
});
const useGlobalStyles = createUseStyles(globalStyles);

const HomeView = props => {
  const classes = useStyles();
  const styles = useGlobalStyles();

  const switchContent = () => {
    switch (props.location.hash) {
      case "":
        return <Home />;
      case "#/AppDrawer":
        return <AppDrawerComponent />;
      case "#/Avatar":
        return <AvatarComponent />;
      case "#/Button":
        return <ButtonComponent />;
      case "#/Divider":
        return <DividerComponent />;
      case "#/Drawer":
        return <DrawerComponent />;
      case "#/Grid":
        return <GridComponent />;
      case "#/IconButton":
        return <IconButtonComponent />;
      case "#/Loading":
        return <LoadingComponent />;
      case "#/Modal":
        return <ModalComponent />;
      case "#/Paper":
        return <PaperComponent />;
      case "#/Select":
        return <SelectComponent />;
      case "#/Switch":
        return <SwitchComponent />;
      case "#/TextInput":
        return <TextInputComponent />;
      case "#/Tooltip":
        return <TooltipComponent />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={styles.posRelative}>
      <AppDrawer
        showMenu
        title="Ash-Ui"
        profile={
          <Tooltip label="Our Github">
            <IconButton
              className={classes.github}
              onClick={() =>
                (window.location.href = "https://github.com/ahtrag/ash-ui")
              }
            >
              <GithubCircleIcon />
            </IconButton>
          </Tooltip>
        }
        menuList={{ data: menus, className: classes.menuComponent }}
      >
        <Paper
          style={{
            height: "100vh",
            width: "100%",
            background: "linear-gradient(to right, #3f4c6b, #606c88)"
          }}
        >
          {switchContent()}
        </Paper>
      </AppDrawer>
    </div>
  );
};

const menus = [
  {
    label: "AppDrawer",
    to: "#/AppDrawer",
    divider: false
  },
  {
    label: "Avatar",
    to: "#/Avatar",
    divider: false
  },
  {
    label: "Button",
    to: "#/Button",
    divider: false
  },
  {
    label: "Divider",
    to: "#/Divider",
    divider: false
  },
  // {
  //   label: "Drawer",
  //   to: "#/Drawer",
  //   divider: false
  // },
  {
    label: "IconButton",
    to: "#/IconButton",
    divider: false
  },
  {
    label: "Loading",
    to: "#/Loading",
    divider: false
  },
  {
    label: "Modal",
    to: "#/Modal",
    divider: false
  },
  {
    label: "Paper",
    to: "#/Paper",
    divider: false
  },
  {
    label: "Select",
    to: "#/Select",
    divider: false
  },
  {
    label: "Switch",
    to: "#/Switch",
    divider: false
  },
  {
    label: "TextInput",
    to: "#/TextInput",
    divider: false
  },
  {
    label: "Tooltip",
    to: "#/Tooltip",
    divider: false
  }
];

export default HomeView;
