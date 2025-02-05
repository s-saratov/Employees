import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/Layout/Layout'

 import EmployeeCard from './Pages/EmployeeCard/EmployeeCard'
 import EmployeeProjectForm from './pages/EmployeeProjectForm/EmployeeProjectForm'


function App() {

  return (

    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>

           <Route path='/' element={<EmployeeProjectForm />} />
          <Route path='/EmployeeCard' element={<EmployeeCard />} />
          <Route path='*' element='Page not found' />
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App