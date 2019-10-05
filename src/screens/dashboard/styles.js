import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    backgroundImage: {
        resizeMode: 'cover',
        width: null,
        height: null,
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'column',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleLabel: {
        color: "white",
        fontSize: 50,
        textAlign: "center",
    },
    subTitleLabel: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 50,
    },
    input: {
        fontSize: 14,
        color: 'black',
        backgroundColor: "white",
        height: 150,
        marginVertical: 20,
        borderColor: "black",
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 4,
        overflow: 'hidden',
        padding: 10,
        textAlign: "left",
        borderRadius: 10,
        textAlignVertical: "top"
    },
    submitBtn: {
        backgroundColor: "#5e422f",
        height: 55,
        marginVertical: 30,
        marginHorizontal: 40,
        borderColor: "black",
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 4,
        overflow: 'hidden',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    submitBtnLabel: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "100"
    },
    topBar: { height: 10, backgroundColor: "#335569", justifyContent: "center" },
    subContainer: { flex: 1, marginTop: 20 },
    tabIcon: { width: 20, height: 20, },
    tabContainer: { flex: 1, backgroundColor: "transparent" }
});