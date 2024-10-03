
import React from 'react'
import { StatusBar,} from 'react-native'
import store from './src/Redux/store/store'
import { Provider } from 'react-redux'
import Screen1 from './src/screens/screen1'




const App = () => {
  return (
  <Provider store={store}>
  <Screen1></Screen1>
  <StatusBar backgroundColor={'#7860f0'}></StatusBar>
  </Provider>
  )
}

export default App

