import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/Home';
import HomeUseState from './src/screens/HomeUseState';
import HomeMap from './src/screens/HomeMap';
import HomeFlatList from './src/screens/HomeFlatList';

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='transparent'
        translucent
      />
      <Home/>
      {/* <HomeUseState/> */}
      {/* <HomeMap/> */}
      {/* <HomeFlatList/> */}
    </>
  );
}