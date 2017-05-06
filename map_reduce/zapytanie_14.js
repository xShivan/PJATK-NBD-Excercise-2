var map = function() {
    var bmi = this.weight / (this.height * this.height);
    emit(this.nationality, { bmi: bmi, bmi_avg: null, bmi_min: null, bmi_max: null });
};

var reduce = function(key, values) {
    var avg, min, max;
    avg = 0;
    min = values[0].bmi;
    max = values[0].bmi;
    
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        avg += value.bmi;
        if (value.bmi < min) min = value.bmi;
        if (value.bmi > max) max = value.bmi;
    }
    
    return {
        bmi_min: min,
        bmi_avg: avg / values.length,
        bmi_max: max,
        bmi: null
    };
};



db.people.mapReduce(map, reduce, { out: 'people_bmi' });
db.people_bmi.find({})