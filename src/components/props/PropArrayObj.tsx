
type ObjData ={
    objData:{
        firstName:string,
        lastName:string
    },
    arrayData:{
        firstName:string,
        lastName:string
    }[]
}

function PropArrayObj(props:ObjData) {
  return (
    <>
        <div>First name:{props.objData.firstName} Lastname:{props.objData.lastName}</div>
        <div>
            {
                props.arrayData.map((data)=>(
                    <div key={data.firstName}>
                         <div>{data.firstName} {data.lastName}</div>
                    </div>
                ))
            }
        </div>

    </>
  )
}

export default PropArrayObj