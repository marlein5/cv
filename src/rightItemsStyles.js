import constants from "./constants";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1vh",
    "@media (min-width: 600px)": {
      paddingLeft: "5vh"
    }
  },
  title: {
    fontSize: constants.text.sectionHeader
  },
  item: {
    paddingTop: "1vh",
    display: "flex",
    flexDirection: "row"
  },
  itemLeft: {
    flex: 1,
    fontWeight: "bold",
    color: constants.colors.lightGray
  },
  itemRight: {
    flex: 8
  },
  itemTitle: {
    fontWeight: "bold"
  },
  itemSubTitle: {
    fontWeight: "bold",
    color: constants.colors.lightGray
  },
  itemContent: {
    textAlign: "justify",
    paddingTop: "1vh"
  },
  blue: {
    fontWeight: "bold",
    color: constants.colors.blue
  },
  pink: {
    fontWeight: "bold",
    color: constants.colors.pink
  },
  orange: {
    fontWeight: "bold",
    color: constants.colors.orange
  }
};

export default styles;
