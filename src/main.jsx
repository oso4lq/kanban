import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './contexts/user-context.jsx'
import { TasksProvider } from './contexts/tasks-context.jsx'
import GlobalContextProvider from './contexts/global-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <UserProvider>
          <TasksProvider>
            <App />
          </TasksProvider>
        </UserProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
