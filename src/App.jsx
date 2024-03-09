import { Outlet } from 'react-router-dom'
import './App.scss'
// import Header from './components/header/header'
// import Footer from './components/footer/footer'
// import Copyright from './components/footer/copyright'
// import ScrollFixed from  './components/ScrollFixed/ScrollxFixed'
// import WhatsApp from '@mui/icons-material/WhatsApp'
import useFetch from './usehooks/useFetch'

function App() {


  const {data} = useFetch('/contact-infos')
  const contact_data = data?.data?.data[0].attributes
  // console.log(contact_data);


  return (
    <>
      <div className="app">
{/* 
        <Header />
        <ScrollFixed /> */}
        <Outlet />
        {/* <Footer />
        <Copyright />
        <a className='whatsapp' href={`https://api.whatsapp.com/send?phone=${contact_data?.WhatsApp_number}`} target="_blank" rel="noreferrer"><WhatsApp/>
        </a> */}
        
         

      </div>
    </>
  )
}

export default App
