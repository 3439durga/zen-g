import { Routes, Route } from 'react-router-dom'
import { routes } from './Routes/routes'
import { AppProvider } from './Utils/context'

function App() {
  return (
    <AppProvider>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AppProvider>
  )
}

export default App
