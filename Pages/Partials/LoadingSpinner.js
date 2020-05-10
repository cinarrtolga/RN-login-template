import React from 'react';
import { ApplicationProvider, Layout, Spinner } from '@ui-kitten/components';
import StyleSheet from '../../assets/Styles/Partials/LoadingSpinnerStyle';

const LoadingSpinner = () => {
    return (
        <Layout style={StyleSheet.loadingBody}>
            <Spinner style={StyleSheet.loadingSpinner} />
        </Layout>
    );
}

export default LoadingSpinner;
