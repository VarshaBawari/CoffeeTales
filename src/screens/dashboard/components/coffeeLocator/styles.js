import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    tabContainer: { flex: 1, backgroundColor: "transparent", },
    listContainer: { backgroundColor: "transparent", marginVertical: 20, marginHorizontal: 20 },
    itemContainer: { backgroundColor: "white", marginBottom: 20, borderRadius: 10, },
    locationImage: { width: 115, height: 115, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, },
    dataContainer: { flex: 1, marginLeft: 15, marginRight: 15, height: 115 },
    title: { fontWeight: "bold", fontSize: 16, color: "#335569", paddingTop: 10 },
    descriptionComponent: { paddingLeft: 15, paddingRight: 15, marginBottom: 15 },
    ratingContainer: { flexDirection: "row", alignItems: "center", marginTop: 5, },
    ratingText: { fontSize: 14, color: "black", marginRight: 5 },
    ratingInnerContainer: {
        alignSelf: "flex-start",
        backgroundColor: "transparent",
        marginRight: 5
    },
    ratingLabel: { fontSize: 12, color: "black" }
});