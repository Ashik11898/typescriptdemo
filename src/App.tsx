import PropsTest from './components/props/PropsTest';
import PropArrayObj from './components/props/PropArrayObj';
import UnionProps from './components/props/UnionProps';
import {ChildrenText, ChildrenComp} from './components/props/ChildrenText';
import OptionalProps from './components/props/OptionalProps';
import {MyEvents,MyChangeEvents,StyleProperty,Login} from './components/props/MyEvents';
import { ThemeContext } from './components/context/ThemeContext';
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
      <UnionProps apiStatus="success"/>
      <ChildrenText>Iam children</ChildrenText>
      <ChildrenComp >
        <ChildrenText>Iam children compoenet</ChildrenText>
      </ChildrenComp>
      <OptionalProps name="nick" count={100}/>
      <MyEvents onClick={(event,id)=> console.log("Learning events",event,id)}/>
      <MyChangeEvents/>
      <StyleProperty myStyles={{background:"red",color:"pink"}}/>
      <ThemeContext>
        <Login/>
      </ThemeContext>
    </div>
  );
}

export default App;
