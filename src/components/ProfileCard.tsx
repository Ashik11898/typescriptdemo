type ProfileProps={
  name:string,
  subdesc:string
}

const ProfileCard = ({name,subdesc}:ProfileProps) => {
  return (
    <div className='profile-parent'>
      <div className='profile-imgblock'></div>
      <div>{name}</div>
      <div>{subdesc}</div>
    </div>
  )
}

export default ProfileCard