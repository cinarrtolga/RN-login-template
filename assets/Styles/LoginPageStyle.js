  
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
    loginPageArea: {
        marginTop: SCREEN_HEIGHT * (2 / 10)
    },
    loginPageLogoArea: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginPageInputArea: {

    },
    applicationLogo: {
        width: 150,
        height: 150
    },
    loginButton: {
        marginTop: 15
    },
    linkArea: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkAreaItems: {
        color: '#61dafb',
        fontSize: 15,
        paddingTop: 3,
        paddingBottom: 3
    }
});