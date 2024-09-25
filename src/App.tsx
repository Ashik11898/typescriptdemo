import PropsTest from './components/props/PropsTest';
import PropArrayObj from './components/props/PropArrayObj';
import UnionProps from './components/props/UnionProps';
import {ChildrenText, ChildrenComp} from './components/props/ChildrenText';
import OptionalProps from './components/props/OptionalProps';
import {MyEvents,MyChangeEvents,StyleProperty,Login} from './components/props/MyEvents';
import { ThemeContext } from './components/context/ThemeContext';
import {AuthWrapFunc} from "./components/context/AuthContext"
import DisplayAuthUser from './components/minicomponents/DisplayAuthUser';
import PrivateUser from './components/minicomponents/PrivateUser';
import Generics from './components/generics/Generics';
import { arrayString,arrayNumber } from './components/constants';
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
      <AuthWrapFunc>
        <DisplayAuthUser/>
      </AuthWrapFunc>
      <PrivateUser isLoggedIn={false} component={OptionalProps}/>
      <Generics data={arrayString}/>
      <Generics data={arrayNumber}/>

    </div>
  );
}

export default App;
