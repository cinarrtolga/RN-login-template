import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Input, Button } from '@ui-kitten/components';
import StyleSheet from '../assets/Styles/ResetPasswordPageStyle';
import CustomNavigation from '../Operations/NavigationOperations';

export default function ResetPasswordPage({ navigation })
{
    //Variables for password reset and validation.
    const [emailorPassword, setEmailorPassword] = useState("");
    const [buttonDisabledStatus, setButtonDisabledStatus] = useState(true);

    useEffect(() => {
        //Simple input validation
        //You can change here with presented some npm packages.
        if(emailorPassword.length > 3)
        {
            setButtonDisabledStatus(false);
        } else {
            setButtonDisabledStatus(true);
        }

    }, [emailorPassword, buttonDisabledStatus]);    
    
    //This method for remember password.
    function rememberPassword()
    {
        //Reset password code
        //Web Api etc.
            
        //After reset password, redirecting login page.
        CustomNavigation.Navigate(navigation, "LoginPage", false);
    }

    return(
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={StyleSheet.body}>
                <Layout style={StyleSheet.resetPasswordPageArea}>
                    <Layout style={StyleSheet.resetPasswordPageLogoArea}>
                        <Image 
                            style={StyleSheet.applicationLogo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                            }}
                        />
                    </Layout>
                    <Layout style={StyleSheet.resetPasswordPageInputArea}>
                        <Input
                            placeholder='Username or E-mail'
                            value={emailorPassword}
                            onChangeText={value => 
                            {
                                setEmailorPassword(value);
                            }}
                        />
                        <Button 
                            style={StyleSheet.resetButton} 
                            status='info'
                            disabled= {buttonDisabledStatus}
                            onPress={() => rememberPassword()}
                        >
                            Reset
                        </Button>
                    </Layout>
                </Layout>    
            </Layout>
        </ApplicationProvider>
    )
};
