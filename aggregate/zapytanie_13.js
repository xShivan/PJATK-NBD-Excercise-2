db.people.aggregate({
        $sort: { job: -1 }
    }, {
    $group: {
        _id: "$job"
    }
})