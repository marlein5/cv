import constants from "./constants";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  flag: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    top: "10vh"
  },
  content: {
    marginLeft: "10vw",
    marginRight: "10vw",
    marginBottom: "5vw",
    maxWidth: "210mm",
    flexDirection: "column",
    "@media (min-width: 600px)": {
      display: "flex",
      flexDirection: "row"
    }
  },
  leftColumn: {
    display: "flex",
    "@media (min-width: 600px)": {
      display: "block",
      flex: 1
    }
  },
  rightColumn: {
    "@media (min-width: 600px)": {
      flex: 4
    }
  }
};

export default styles;
