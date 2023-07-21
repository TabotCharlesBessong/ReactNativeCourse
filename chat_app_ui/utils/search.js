
export  const handleSearch = (text) => {
    setSearch(text)
    const filteredData = contacts.filter((user) =>
        user.userName.toLowerCase().includes(text.toLowerCase())
    )
    setFilteredUsers(filteredData)
}