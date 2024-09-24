type GetStatus ={
    apiStatus:"loading"|"error"|"success"
}

const UnionProps = (props:GetStatus) => {

  return (
    <div>{props.apiStatus}</div>
  )
}

export default UnionProps