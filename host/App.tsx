// eslint-disable-next-line import/no-extraneous-dependencies
import {Federated} from '@callstack/repack/client';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const App1 = React.lazy(() => Federated.importModule('app1', './app1'));

export default function App() {
  return (
    <SafeAreaView>
      <Text>Host App</Text>
      <React.Suspense fallback={<Text>Loading app1...</Text>}>
        <App1 />
      </React.Suspense>
    </SafeAreaView>
  );
}
