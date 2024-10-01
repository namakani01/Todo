
import React from 'react'
import { StatusBar,} from 'react-native'
import store from './src/Redux/store/store'
import { Provider } from 'react-redux'
import Screen1 from './src/screens/screen1'
import { SafeAreaView } from 'react-native-safe-area-context'




const App = () => {
  return (
  
  // <View>
  //   <Provider store={store}>
  //   {/* <Header></Header>
  //   <Todolist></Todolist> */}
  //   <Screen1></Screen1>
  //   </Provider>
  // </View>  


  <Provider store={store}>
  <Screen1></Screen1>
  <StatusBar backgroundColor={'#7860f0'}></StatusBar>
  </Provider>


  )
}

export default App

