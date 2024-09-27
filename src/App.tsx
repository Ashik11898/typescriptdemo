import Layout from './Layout';
import Navbar from './components/Navbar';
import './App.css';
import "./assets/styles/responsive.scss"

function App() {
  return (
    <div className="App">
      
      <Layout>
          <Navbar/>
      </Layout>
    </div>
  );
}

export default App;
