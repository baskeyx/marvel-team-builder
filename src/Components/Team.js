const Team = ({ team }) => (
  <div className='Team'>{team.map((member) => (
    <div className='Member' key={member.id}>
      <img src={member.thumbnail} alt={member.name} />
    </div>
  ))}
  </div>
)

export default Team;