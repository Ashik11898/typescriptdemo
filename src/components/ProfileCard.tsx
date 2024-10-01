import { ParaHead, ParaText } from "../elements/HeadingText"

type ProfileProps={
  name:string,
  subdesc:string
}

const ProfileCard = ({name,subdesc}:ProfileProps) => {
  return (
    <div className='profile-parent'>
      <div className='profile-imgblock'></div>
      <div className='profile-name'><ParaHead mainText={name}/></div>
      <div className='profile-subdesc'><ParaText mainText={subdesc}/></div>
    </div>
  )
}

export default ProfileCard