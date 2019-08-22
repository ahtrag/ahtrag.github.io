import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
    margin: "50px"
  }
});

const Home = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>THIS IS ASH-UI DOCUMENTATION</h1>
      <br />
      <p>
        This repository created by{" "}
        <a
          style={{ color: "white", fontWeight: 700 }}
          href="https://github.com/sastrawanikadek"
        >
          Kadek Sastrawan
        </a>{" "}
        and{" "}
        <a
          style={{ color: "white", fontWeight: 700 }}
          href="https://github.com/ahtrag"
        >
          Gartha Prasidhiyanta
        </a>
      </p>
      <br />
      <p>
        The purpose of this repository is to create our own component based on
        Material-Ui Component from Google
      </p>
      <br />
      <p>Created with React with Love ♥</p>
    </div>
  );
};

export default Home;
