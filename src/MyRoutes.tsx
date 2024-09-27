import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
const MyRoutes = () => {
  
  
  return (
    <Router>
        <Routes>
            <Route index element={<AboutPage />} /> 

           
        </Routes>
    </Router>
  )
}

export default MyRoutes