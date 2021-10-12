const filterByGender = (people, gender) => {
    return people.filter(p => p.gender === gender)
}

export {
    filterByGender
}