import constants from "./constants";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "3mm",
    paddingLeft: "10mm"
  },
  title: {
    fontSize: constants.text.sectionHeader
  },
  item: {
    paddingTop: "3mm",
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
    paddingTop: "2mm"
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
