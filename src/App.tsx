import usePortfolioData from './hooks/usePortfolioData';
import ProfileCard from './components/ProfileCard';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import './App.css';
import "./assets/styles/styles.scss"
import { RESUMEOBJECT } from './constants';
import Navbar from './components/Navbar';

function App() {

const portFolioData = usePortfolioData()



  return (
    <div className="App">
      <Layout>
        <div className='main-parent'>
          <Navbar/>
          <div>
            <ProfileCard name={RESUMEOBJECT.name} subdesc={RESUMEOBJECT.sub_desc}/>
            <AboutPage/>
          </div>
          
        </div>
      </Layout>
      
    </div>
  );
}

export default App;
