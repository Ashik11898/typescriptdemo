import Layout from './Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRoutes from './MyRoutes';
import './App.css';
import "./assets/styles/styles.scss"

function App() {
  return (
    <div className="App">
      <Layout>
          <Navbar/>
            <div className='load-components'><MyRoutes/></div>
          <Footer/>
      </Layout>
    </div>
  );
}

export default App;
