import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { StripeProvider } from '@stripe/stripe-react-native';

const STRIPE_KEY =
  "pk_test_51KpJDWKMNYd351cDr7u7UsoVyRgAiRihYuVegbFFddVDCCTTEsT9RBaagIEsOqUcJmZzUiX2GaCUXwthgXORmdGF000GY1fPqW";

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <Navigation />
      </StripeProvider>

      <StatusBar style="auto" />
    </Provider>
  );
}
