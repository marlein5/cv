import constants from "../constants";

const styles = {
  root: {
    backgroundColor: constants.colors.gray,
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "30mm",
    width: "100%",
    marginBottom: "6mm"
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
