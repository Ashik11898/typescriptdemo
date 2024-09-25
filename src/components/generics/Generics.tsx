
type GenProps <T> ={
    data:T[]
}

const Generics = <T extends string | number>({data}:GenProps<T>) => {
  return (
    <div>{data.map((item)=>(<div key={item}>{item}</div> ))}</div>
  )
}

export default Generics