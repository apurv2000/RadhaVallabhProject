
import {
  BerkshireSwash_400Regular,
  useFonts
} from '@expo-google-fonts/berkshire-swash';
import {
  JosefinSans_700Bold
} from '@expo-google-fonts/josefin-sans';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from './app';

export default function App() {
  const [fontsLoaded] = useFonts({
  BerkshireSwash_400Regular,
});
const [fontsLoaded2] = useFonts({
  JosefinSans_700Bold,
});
if (fontsLoaded && fontsLoaded2 ) {
    return (
    <SafeAreaProvider>
      <SignUpScreen />
    </SafeAreaProvider>
  );
}

}


