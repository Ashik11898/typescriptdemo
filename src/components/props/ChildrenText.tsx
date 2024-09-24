type GetChildText={
    children:string
} 

type GetComponent={
    children:React.ReactNode
}



export const ChildrenText = (props:GetChildText) => {
  return (
    <div>{props.children}</div>
  )
}

export const ChildrenComp = (props:GetComponent) => {
    return (
      <div>{props.children}</div>
    )
  }

