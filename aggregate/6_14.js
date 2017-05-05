db.people.aggregate([{
        $project: {
            nationality: "$nationality",
            bmi: { $divide: ["$weight", { $pow: ["$height", 2] }] }
        }
    }, {
        $group: {
            _id: "$nationality",
            bmi_min: { $min: "$bmi" },
            bmi_avg: { $avg: "$bmi" },
            bmi_max: { $max: "$bmi" }
        }
    }])