import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK_VARIANT,
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
        height: 50,
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
        backgroundColor: COLORS.COFFEE_BROWN,
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
});