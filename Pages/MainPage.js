import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Spinner } from '@ui-kitten/components';
import DeviceStorage from '../Operations/DeviceStorageOperations'
import LoginPage from './LoginPage'
import ExamplePage from './ExamplePage'
import LoadingSpinner from './Partials/LoadingSpinner'

export default function MainPage(props)
{
  const [loading, setLoading] = useState(true);
  const [memberStatus, setMemberStatus] = useState(false);

  useEffect(() => {
    checkMemberStatus();
  }, []);

  async function checkMemberStatus()
  {
    let result = await DeviceStorage.CheckValue("applicationName_isLoggedIn");

    if(result && result != null)
    {
      setMemberStatus(true);
      setLoading(false);
    }else {
      setLoading(false);
    }
  }
  return (
      <ApplicationProvider {...eva} theme={eva.light}>
        { loading ? <LoadingSpinner /> : memberStatus ? <ExamplePage navigation={props.navigation} /> : <LoginPage navigation={props.navigation} /> }
      </ApplicationProvider>
  );
};
