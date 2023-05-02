const skills = [
    {id: 0 ,name: 'HTML',  knowledge: '70%'},
    {id: 1, name: 'CSS',  knowledge: '60%'},
    {id: 2, name: 'JS',  knowledge: '80%'},
    {id: 3, name: 'Python',  knowledge: '60%'},
]


module.exports = {

    getAll: function() {
        return skills
    },
    getOne: function(one) {
        return skills[one]
    }
}


