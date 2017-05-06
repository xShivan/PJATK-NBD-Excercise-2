// Lista imion i nazwisk wszystkich osób znajdujących się w bazie oraz miast, w których mieszkają, ale tylko dla osób urodzonych w XXI wieku;

db.people.find({ birth_date: { "$gte": "2001-01-01T00:00:00Z" } }).map(function (p) { return { first_name: p.first_name, last_name: p.last_name, city: p.location.city }; })
