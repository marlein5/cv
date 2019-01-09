import constants from "../constants";

const styles = {
  root: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "10vh",
    width: "100%",
    marginBottom: "1vh",
    backgroundColor: constants.colors.gray
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
