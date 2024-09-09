import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView} from 'react-native';
import { FormText } from './src/Context/FormText';
import {useState} from 'react';
import Button from './src/components/Button';
import { CacMaMau } from './src/styles/Color';
import Keyw from './src/components/keyb';




export default function App() {
  const [theme, setTheme] = useState ('light');
  return (
    <FormText.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#241'}]}>
      
      <StatusBar style="auto" />
      <Switch 
      value= {theme === 'light'}
      onValueChange = {() => setTheme(theme == 'light' ? 'dark': 'light')}// bat tat trang thai
      />
      <Keyw />
    </SafeAreaView>
    </FormText.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CacMaMau.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
