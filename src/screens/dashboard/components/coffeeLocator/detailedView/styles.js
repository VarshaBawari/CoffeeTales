import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white", alignItems: "flex-end" },
    innerContainer: { flex: 1, backgroundColor: "white", borderTopLeftRadius: 10, borderTopRightRadius: 10, },
    imagebanner: { width: "100%", height: 250, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
    dataContainer: { marginRight: 15, marginLeft: 15, marginTop: 15 },
    title: { fontWeight: "bold", fontSize: 16, color: "#335569", paddingTop: 10 },
    ratingContainer: { flexDirection: "row", alignItems: "center", marginTop: 5, },
    ratingText: { fontSize: 14, color: "black", marginRight: 5 },
    ratingInnerContainer: {
        alignSelf: "flex-start",
        backgroundColor: "transparent",
        marginRight: 5
    },
    ratingLabel: { fontSize: 12, color: "black" },
    webView: { marginTop: 20, height: 250, width: "100%" },
    bar: { position: "absolute", right: 0, top: 0, backgroundColor: "rgba(0,0,0,0.5)", width: "100%" },
    closeIcon: {
        alignSelf: "flex-end", width: 30, height: 30, marginTop: 15, marginRight: 15,
        tintColor: "white"
    }

});