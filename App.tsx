import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import TabOneScreen from './screens/TabOneScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{backgroundColor: '#E5E5E5'}}>
        <TabOneScreen></TabOneScreen>
      </SafeAreaProvider>
    );
  }
}
