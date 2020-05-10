import { AsyncStorage } from 'react-native';

const DeviceStorage = {
    SetValue: async function(parameter, value)
    {
        await AsyncStorage.setItem(parameter, value);
    },
    CheckValue: async function(itemName)
    {
        return await AsyncStorage.getItem(itemName);
    },
    RemoveValue: async function(itemName)
    {
        await AsyncStorage.removeItem(itemName);
    }
}

export default DeviceStorage;
