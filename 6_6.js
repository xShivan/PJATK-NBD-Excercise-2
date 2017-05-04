// Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób (dane dotyczące karty kredytowej, adresu zamieszkania i wagi mogą być fikcyjne);

db.people.insert({"sex":"Male","first_name":"Michał","last_name":"Cywiński","job":"Programmer","email":"s15027@pjwstk.edu.pl","location":{"city":"Warsaw","address":{"streetname":"PJWSTK","streetnumber":"666"}},"description":"the best dev ever","height":"200.00","weight":"50.0","birth_date":"1990-01-01T00:00:00Z","nationality":"Poland","credit":[{"type":"master card","number":"666999666","currency":"PLN","balance":"666.66"}]})
