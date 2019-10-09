import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants'
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
        fontSize: 22,
        textAlign: "center",
        fontWeight: "200"
    },
    subTitleLabel: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    input: {
        fontSize: 14,
        color: 'black',
        backgroundColor: "white",
        height: 50,
        marginVertical: 15,
        marginHorizontal: 20,
        borderColor: "black",
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 4,
        overflow: 'hidden',
        padding: 16,
        textAlign: "left",
        borderRadius: 10,
    },
    submitBtn: {
        backgroundColor: COLORS.COFFEE_BROWN,
        height: 55,
        marginHorizontal: 20,
        borderColor: "black",
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 4,
        overflow: 'hidden',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50
    },
    submitBtnLabel: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "100"
    },

});