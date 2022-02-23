import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import useProviderTasksState from '@/Hooks/useProviderTasksState'
import ApplicationNavigator from '@/Navigators/Application'
import './Translations'
import TaskContext from '@/Context'

const App = () => {
  const [tasks, updateTasks] = useProviderTasksState()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TaskContext.Provider value={{ tasks, updateTasks }}>
          <ApplicationNavigator />
        </TaskContext.Provider>
      </PersistGate>
    </Provider>
  )
}

export default App
