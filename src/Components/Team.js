const Team = ({ team }) => (
  <div className='Team'>{team.map((member) => <img src={member.thumbnail} alt={member.name} />)}</div>
)

export default Team;