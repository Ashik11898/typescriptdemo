type HeadingProps={
    mainText:string,
    subText?:string,
    styles?: React.CSSProperties;
}

type WorkExperience={
  experience:number,
   clients:number,
   projects:number
}


export const HeadingText = ({mainText,subText}:HeadingProps) => {
  return (
    <h1 className="headtext-parent">{mainText}<br/><span>{subText}</span></h1>
  )
}

export const ParaText = ({mainText,styles}:HeadingProps) => {
    return (
      <p className="paratext-parent" style={styles}>{mainText}</p>
    )
}

export const ParaHead = ({mainText,styles}:HeadingProps) => {
    return (
      <p className="paraHead-parent" style={styles}>{mainText}</p>
    )
}

export const WorkInfo = ({experience,clients,projects}:WorkExperience) => {
    return (
      <div className="workInfo-parent">
        <div>+{experience} <p>Years Of Experience</p></div>
        <div>+{projects} <p>Projects Completed</p></div>
        <div>+{clients}<p>Worldwide Clients</p></div>
      </div>
    )
}