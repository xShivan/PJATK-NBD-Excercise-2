// Lista mężczyzn narodowości niemieckiej;

db.people.find({ nationality: "Germany", sex: "Male" }).pretty();