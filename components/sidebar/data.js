const data = [
    {
        name: 'food',
        description: 'Discover the food you like!',
    },
    {
        name: 'video',
        description: 'We recommend the best videos!',
    },
    {
        name: 'schedule',
        description: 'Make your workout schedule here!',
    }
]

const dataMap = data.reduce(function (map, category) {
    map[category.name] = category
    return map
}, {})

exports.lookupCategory = function (name) {
    return dataMap[name]
}

