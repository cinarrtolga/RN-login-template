import { AsyncStorage } from 'react-native';

const CustomNavigation = {
    Navigate: function(navigationLibrary ,toNavigate, isReset)
    {
        //This time out for navigation delay
        //If I don't use this block, page is coming late. 
        //About react-navigation.
        setTimeout(() => {
            if(isReset)
            {
                navigationLibrary.reset({
                    index: 0,
                    routes: [{ name: toNavigate }],
                });
            }else {
                navigationLibrary.navigate(toNavigate, { navigationLibrary });
            }
        }, 100);
    }
}

export default CustomNavigation;