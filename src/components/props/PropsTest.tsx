type passtext = {
    name:string,
    age:number,
    ismarried:boolean
}

const PropsTest =(props:passtext)=> {
  return (
    <div>
       { props.ismarried ? <h1>Hello {props.name} your age:{props.age} </h1>: <>pls marry</>}
    </div>
  )
}

export default PropsTest