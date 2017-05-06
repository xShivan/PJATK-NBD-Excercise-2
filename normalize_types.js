db.people.find({}).forEach( function (x) {   
  x.birth_date = new Date(x.birth_date);
  x.weight = parseFloat(x.weight);
  x.height = parseFloat(x.height);
  if(x.credit) {
      for(var i = 0; i < x.credit.length; ++i) { 
        if(x.credit[i] && x.credit[i].balance) {
           x.credit[i].balance = parseFloat(x.credit[i].balance);
        }
      }
  }
  db.people.save(x);
});