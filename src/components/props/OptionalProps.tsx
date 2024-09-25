export type Optprops={
    name:string,
    count:number,
    price?:number
}


const OptionalProps = (props:Optprops) => {
  return (
    <div>name: {props.name}, your count:{props.count}, then your price:{props.price}</div>
  )
}

export default OptionalProps