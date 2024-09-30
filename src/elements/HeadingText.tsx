type HeadingProps={
    mainText:string,
    subText?:string
}

export const HeadingText = ({mainText,subText}:HeadingProps) => {
  return (
    <h1 className="headtext-parent">{mainText}<br/><span>{subText}</span></h1>
  )
}

export const ParaText = ({mainText}:HeadingProps) => {
    return (
      <p className="paratext-parent">{mainText}</p>
    )
  }


  export const WorkInfo = () => {
    return (
      <div className="workInfo-parent">
        <div>+12 <p>Years Of Experience</p></div>
        <div>+46 <p>Projects Completed</p></div>
        <div>+20 <p>Worldwide Clients</p></div>
      </div>
    )
  }