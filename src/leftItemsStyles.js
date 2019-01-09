import constants from "./constants";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "space-evenly",
    "@media (min-width: 600px)": {
      alignItems: "flex-end"
    },
    paddingTop: "1vh"
  },
  title: {
    fontSize: constants.text.sectionHeader
  }
};

export default styles;
