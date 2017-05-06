var map = function() {
    var weight = this.weight;
    var height = this.height;
    
    if (weight === null) weight = 0;
    if (height === null) height = 0;
    
    emit(this.sex, { height: height, weight: weight });
};

var reduce = function(key, values) {
    var heightSum = 0,
        weightSum = 0,
        avgHeight = 0,
        avgWeight = 0;
    
    for (var i = 1; i < values.length; i++) {
        heightSum += values[i].height;
        weightSum += values[i].weight;
    }
    
    avgHeight = heightSum / values.length - 1;
    avgWeight = weightSum / values.length - 1;
    
    
    return { avg_height: avgHeight, avg_weight: avgWeight };
};

db.people.mapReduce(map, reduce, { out: 'people_avg_width_height' });
db.people_avg_width_height.find({})