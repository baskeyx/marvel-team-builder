const Search = ({ searchValue, handleChange }) => {
  return (
    <input 
      type='search'
      value={searchValue}
      onChange={(e) => handleChange(e.target.value)}
      placeholder='Type to search'
      className='Search'
    />
  )
}

export default Search;
