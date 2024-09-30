import usePortfolioData from './hooks/usePortfolioData';
import './App.css';
import "./assets/styles/styles.scss"
import ProfileCard from './components/ProfileCard';

import Layout from './Layout';
import AboutPage from './pages/AboutPage';

function App() {

const portFolioData = usePortfolioData()



  return (
    <div className="App">
      <Layout>
        <ProfileCard/>
        <AboutPage/>
      </Layout>
      
    </div>
  );
}

export default App;
