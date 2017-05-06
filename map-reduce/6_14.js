var map = function() {
    var bmi = this.weight / (this.height * this.height);
    emit(this.nationality, { bmi: bmi });
};

var reduce = function(key, values) {
    var avg = 0,
        min = 0,
        max = 0;
    
    var startIndex = 1;
    min = values[startIndex].bmi;
    max = values[startIndex].bmi;
    
    for (var i = startIndex; i < values.length; i++) {
        avg += values[i].bmi;
        if (values[i].bmi < min) min = values[i].bmi;
        if (values[i].bmi > max) max = values[i].bmi;
    }
    
    return {
        bmi_min: min,
        bmi_avg: avg / (values.length - 1),
        bmi_max: max
    };
};



db.people.mapReduce(map, reduce, { out: 'people_bmi' });
db.people_bmi.find({})