export const getSearchResults = (searchTerm, peopleData) => peopleData.filter(
  ({ first_name, last_name }) => {
    const firstNameMatch = first_name
      && first_name.toLowerCase().includes(searchTerm.toLowerCase());
    const lastNameMatch = last_name
      && last_name.toLowerCase().includes(searchTerm.toLowerCase());
    return firstNameMatch || lastNameMatch;
  }
);

export default getSearchResults;
