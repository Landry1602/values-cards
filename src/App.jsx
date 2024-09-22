import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {

  return (
    <div className='bg-midnight min-w-screen min-h-screen'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
