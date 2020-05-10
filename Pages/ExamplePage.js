import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,Layout, Text, Button } from '@ui-kitten/components';
import StyleSheet from '../assets/Styles/ExamplePageStyle'
import DeviceStorage from '../Operations/DeviceStorageOperations'
import CustomNavigation from '../Operations/NavigationOperations';

export default function ExamplePage({ navigation })
{
    function logout()
    {
        //For remove login token from device.
        DeviceStorage.RemoveValue("applicationName_isLoggedIn");

        //Redirect to login page.
        //History reset with navigation.
        //For disable to go back function.
        CustomNavigation.Navigate(navigation, "MainPage", true);
    }

    return(
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={StyleSheet.body}>
                <Text>Example Text</Text>
                <Button 
                    style={StyleSheet.logoutButton} 
                    status='info'
                    onPress={() => logout()}
                >
                    Logout
                </Button> 
            </Layout>
        </ApplicationProvider>
    )
};
