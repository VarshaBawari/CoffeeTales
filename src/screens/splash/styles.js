import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: 15,
        marginBottom: 15
    },
    subTitleLabel: {
        color: "white",
        fontSize: 30
    }
});