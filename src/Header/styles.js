import constants from "../constants";

const styles = {
  root: {
    backgroundColor: constants.colors.gray,
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "22mm",
    width: "100%"
  },
  name: {
    fontSize: constants.text.header,
    flex: 2,
    display: "flex",
    alignItems: "flex-end"
  },
  contact: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start"
  },
  mail: {
    color: "white"
  }
};

export default styles;
