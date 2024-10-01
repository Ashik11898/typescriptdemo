import usePortfolioData from './hooks/usePortfolioData';
import ProfileCard from './components/ProfileCard';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import './App.css';
import "./assets/styles/styles.scss"
import { RESUMEOBJECT } from './constants';

function App() {

const portFolioData = usePortfolioData()



  return (
    <div className="App">
      <Layout>
        <ProfileCard name={RESUMEOBJECT.name} subdesc={RESUMEOBJECT.sub_desc}/>
        <AboutPage/>
      </Layout>
      
    </div>
  );
}

export default App;
