  
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
    resetPasswordPageArea: {
        marginTop: SCREEN_HEIGHT * (2 / 10)
    },
    resetPasswordPageLogoArea: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resetPasswordPageInputArea: {

    },
    applicationLogo: {
        width: 150,
        height: 150
    },
    resetButton: {
        marginTop: 15
    }
});