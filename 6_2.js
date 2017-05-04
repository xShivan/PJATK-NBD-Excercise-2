// Jedna kobieta narodowości chińskiej;

db.people.find({ nationality: "China", sex: "Female" }).limit(1);