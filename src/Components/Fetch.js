const Fetch = async (resource) => {
  const response = await fetch(resource);
  const data = response.json();
  return data;
}

export default Fetch;
