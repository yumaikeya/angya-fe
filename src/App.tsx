import React from 'react'
import { Route, Routes } from 'react-router'
import routes from '@/pages/routes'

const App = () => {
  return (
      <Routes>
        {routes.map(({ name, component, path }) => (
          <Route
            key={name}
            path={path}
            element={React.createElement(component)}
          />
        ))}
      </Routes>
  )
}

export default App
