import PropsTest from './components/props/PropsTest';
import PropArrayObj from './components/props/PropArrayObj';
import './App.css';

function App() {

  const myObj={
    firstName:"Ashik",
    lastName:"salludeen"
  }

  const arrData=[
    {
      firstName:"Ashik",
      lastName:"salludeen"
    },
    {
      firstName:"Ashik2",
      lastName:"salludeen2"
    }
  ]

  return (
    <div className="App">
      <PropsTest name="Rizwana" age={26} ismarried={true} />
      <PropArrayObj objData={myObj} arrayData={arrData}/>
    </div>
  );
}

export default App;
