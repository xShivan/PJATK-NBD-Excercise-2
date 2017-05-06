var map = function() {
    emit(this.job, null);
};

var reduce = function(key, values) {
    return null;
};

db.people.mapReduce(map, reduce, { out: 'distinct_jobs' });
db.distinct_jobs.find({})