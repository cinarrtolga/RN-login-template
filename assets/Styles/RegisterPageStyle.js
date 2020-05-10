  
import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    body: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        paddingLeft: 20,
        paddingRight: 20
    },
    registerPageArea: {
        marginTop: SCREEN_HEIGHT * (3 / 20)
    },
    registerPageLogoArea: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerPageInputArea: {

    },
    applicationLogo: {
        width: 150,
        height: 150
    },
    registerButton: {
        marginTop: 15
    },
    formHeaderArea: {
        marginBottom: 20
    },
    formHeader: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#61dafb'
    },
    noticeArea: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noticeText: {
        color : 'gray',
        fontSize: 14
    },
    standartButtonColor: {
        color: '#61dafb',
        textDecorationLine: "underline",
    }
});