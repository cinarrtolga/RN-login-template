import React, { useState, useLayoutEffect } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Input, Text, Button } from '@ui-kitten/components';
import StyleSheet from '../assets/Styles/LoginPageStyle';
import DeviceStorage from '../Operations/DeviceStorageOperations';
import CustomNavigation from '../Operations/NavigationOperations';
import LoadingSpinner from './Partials/LoadingSpinner'

//Using navigation property for redirect. This property for react-native navigation functions.
export default function LoginPage({ navigation })
{
    //Variables for login and validation.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonDisabledStatus, setButtonDisabledStatus] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [screenEventStatus, setScreenEventStatus] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    useLayoutEffect(() => {
        //Simple input validation
        //You can change here with presented some npm packages.
        if(username.length > 3 && password.length > 3)
        {
            setButtonDisabledStatus(false);
        } else {
            setButtonDisabledStatus(true);
        }

        //This block for event check. If user click anything
        //or waiting results for any action, showing login spinner.
        if(screenEventStatus)
        {
            setShowSpinner(true);
        }else {
            setShowSpinner(false);
        }

    }, [buttonDisabledStatus, username, password, showPassword, screenEventStatus, showSpinner]);    

    function authorize()
    {
        //This function for insert token in device storage.
        //You can use this on next pages. 
        //Get value method included DeviceStorage.js file.
        DeviceStorage.SetValue("applicationName_isLoggedIn", "true");

        navigateWithLoading("ExamplePage", true);
    }

    //This method for reset form values.
    function resetFormBeforeAction()
    {
        setTimeout(() => {
            setUsername("");
            setPassword("");
            setButtonDisabledStatus(true);
            setShowPassword(true);
            setScreenEventStatus(false);
        }, 200);
    }

    //This method for navigate with loading spinner
    //If user click any button, waiting result with loading spinner.
    function navigateWithLoading(toNavigate, resetProperty)
    {
        //This function for reset login form. 
        resetFormBeforeAction();

        CustomNavigation.Navigate(navigation, toNavigate, resetProperty);
    }

    //This block for password show/hide icon
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    //This block for generate password input icon.
    const renderIcon = () => (
        <TouchableWithoutFeedback onPress={toggleShowPassword}>
          <Icon name={showPassword ? 'lock' : 'no-encryption'}/>
        </TouchableWithoutFeedback>
    )

    const getLoginForm = () =>
    {
        return(
            <Layout style={StyleSheet.body}>
                <Layout style={StyleSheet.loginPageArea}>
                    <Layout style={StyleSheet.loginPageLogoArea}>
                        <Image 
                            style={StyleSheet.applicationLogo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                            }}
                        />
                    </Layout>
                    <Layout style={StyleSheet.loginPageInputArea}>
                        <Input
                            placeholder='Username'
                            value={username}
                            onChangeText={value => 
                            {
                                setUsername(value);
                            }}
                        />
                        <Input
                            placeholder='Password'
                            value={password}
                            secureTextEntry={showPassword}
                            accessoryRight={renderIcon}
                            onChangeText={value => 
                            {
                                setPassword(value);
                            }}
                        />
                        <Button 
                            style={StyleSheet.loginButton} 
                            status='info'
                            disabled= {buttonDisabledStatus}
                            onPress={() => { 
                                setScreenEventStatus(true);
                                authorize();
                            }}
                        >
                            Login
                        </Button>
                    </Layout>
                    <Layout style={StyleSheet.linkArea}>
                        <TouchableWithoutFeedback 
                            onPress={() => {
                                setScreenEventStatus(true);
                                navigateWithLoading("ResetPasswordPage", false);
                            }}
                        >
                            <Text style={StyleSheet.linkAreaItems}>Forgot Password?</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback 
                            onPress={() => { 
                                setScreenEventStatus(true);
                                navigateWithLoading("RegisterPage", false);
                            }}
                        >
                            <Text style={StyleSheet.linkAreaItems}>Register</Text>
                        </TouchableWithoutFeedback>
                    </Layout>
                </Layout>    
            </Layout>
        );
    }

    return(
        <ApplicationProvider {...eva} theme={eva.light}>
            { showSpinner ? <LoadingSpinner /> : getLoginForm() }
        </ApplicationProvider>
    )
};
