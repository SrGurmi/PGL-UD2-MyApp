import { registerRootComponent } from 'expo';
import { ThemeProvider } from './constants/theme';
import {Redirect, Slot} from 'expo-router';

export default function App() {
  return <Redirect href="./app/index.tsx"/>
}

registerRootComponent(App);


