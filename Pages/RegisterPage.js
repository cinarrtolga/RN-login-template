import React, { useState, useEffect } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Input, Button, Text } from '@ui-kitten/components';
import StyleSheet from '../assets/Styles/RegisterPageStyle';
import CustomNavigation from '../Operations/NavigationOperations';

export default function RegisterPage({ navigation })
{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [buttonDisabledStatus, setButtonDisabledStatus] = useState(true);

    useEffect(() => {
        //Simple input validation
        //You can change here with presented some npm packages.
        if(username.length > 3)
        {
            setButtonDisabledStatus(false);
        } else {
            setButtonDisabledStatus(true);
        }

    }, [username, buttonDisabledStatus]);    
    
    //This method for authorization check. 
    function register()
    {
        //Reset password code
        //Web Api etc.
            
        //After register, redirecting login page.
        CustomNavigation.Navigate(navigation, "LoginPage", false);
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const renderIcon = () => (
        <TouchableWithoutFeedback onPress={toggleShowPassword}>
          <Icon name={showPassword ? 'lock' : 'no-encryption'}/>
        </TouchableWithoutFeedback>
    );

    return(
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={StyleSheet.body}>
                <Layout style={StyleSheet.registerPageArea}>
                    <Layout style={StyleSheet.registerPageLogoArea}>
                        <Image 
                            style={StyleSheet.applicationLogo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                            }}
                        />
                    </Layout>
                    <Layout style={StyleSheet.formHeaderArea}>
                        <Text style={StyleSheet.formHeader}>REGISTER FORM</Text>
                    </Layout>
                    <Layout style={StyleSheet.registerPageInputArea}>
                        <Input
                            placeholder='Username'
                            value={username}
                            onChangeText={value => 
                            {
                                setUsername(value);
                            }}
                        />
                        <Input
                            placeholder='E-mail'
                            value={email}
                            onChangeText={value => 
                            {
                                setEmail(value);
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
                            style={StyleSheet.registerButton} 
                            status='info'
                            disabled= {buttonDisabledStatus}
                            onPress={() => register()}
                        >
                            REGISTER
                        </Button>
                    </Layout>
                    <Layout style={StyleSheet.noticeArea}>
                        <Text style={StyleSheet.noticeText}>You have an account? </Text>
                        <TouchableWithoutFeedback
                             onPress={() => navigation.navigate('LoginPage', { navigation })}
                        >
                            <Text style={StyleSheet.standartButtonColor}>Sign in</Text>
                        </TouchableWithoutFeedback>
                    </Layout>
                </Layout>    
            </Layout>
        </ApplicationProvider>
    )
};
