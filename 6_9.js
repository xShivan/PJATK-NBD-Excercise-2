// Dodaj do wszystkich osób o imieniu Antonio własność „hobby” o wartości „ping-pong”;

db.people.update({ "first_name": "Antonio" }, { $set: { "hobby": "ping-pong" } }, { multi: true })