const styles = StyleSheet.create({
  //POST Card styles
  container: {
    flex: 1,
    alignItems: "center",
  },
  textTitles: {
    color: "black",
    fontSize: 18,
    fontWeight: "700",
    paddingHorizontal: 20,
    marginTop: 10,
    textShadowColor: "rgba(0, 0, 0, 1)",
    marginTop: 20,
  },
  image: {
    flex: 1,
    width: ITEM_WIDTH / 20,
    height: ITEM_WIDTH / 20,
    backgroundColor: "white",
    borderRadius: 2,
  },
  imageBackground: {
    flex: 1,
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
    color: "black",
  },
  textComment: {
    paddingHorizontal: 0,
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
    color: "black",
  },

  sightedSpecies: {
    paddingHorizontal: 25,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "700",
    marginTop: 10,
    color: "rgba(23,108,255,1)",
  },
  textBoxSocial: {
    flex: 1,
    backgroundColor: "rgba(23,108,255, 0.08)",
    margin: 20,
    borderRadius: 15,
    paddingHorizontal: 60,
    width: ITEM_WIDTH - ITEM_WIDTH / 8,
    height: 90,
    maxHeight: 55,
    alignSelf: "flex-start",
    marginHorizontal: 0,
  },
  textBoxPostCard: {
    flex: 1,
    backgroundColor: "rgba(23,108,255, 0.08)",
    margin: 20,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 80,
    width: ITEM_WIDTH - ITEM_WIDTH / 8,
    height: 55,
    alignSelf: "flex-start",
  },
  textBoxSpecies: {
    flex: 1,
    backgroundColor: "rgba(23,108,255, 0.08)",
    margin: 20,
    borderRadius: 15,
    paddingHorizontal: 0,
    paddingVertical: 5,
    width: ITEM_WIDTH - ITEM_WIDTH / 8,
    height: 530,
    alignSelf: "flex-start",
  },
});
