// App.js

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/Home';

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

