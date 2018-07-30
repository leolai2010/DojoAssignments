1.
use my_first_db
2.
db.createCollection("students")
3.
db.students.insert({name: "Leo", home_state: "CA", lucky_number: 8, birthday: {month: 8, day: 10, year: 1992}})
4.
db.students.insert({name: "Michael", home_state: "NV", lucky_number: 4, birthday: {month: 7, day: 5, year: 1992}})
db.students.insert({name: "Patrick", home_state: "Tomato", lucky_number: 5, birthday: {month: 7, day: 5, year: 2017}})
db.students.insert({name: "Eric", home_state: "WA", lucky_number: 6, birthday: {month: 3, day: 15, year: 1994}})
db.students.insert({name: "Brian", home_state: "OR", lucky_number: 7, birthday: {month: 4, day: 16, year: 1992}})
5.
db.students.find({})
6.
db.students.find({home_state: "CA"})
7.1
db.students.find({lucky_number: {$gt: 3}})
7.2
db.students.find({lucky_number: {$lte: 10}})
7.3
db.students.find({$and: [{lucky_number: {$gt: 1}}, {lucky_number: {$lt: 9}}]})
8.
db.students.update({name: "Leo"}, {$set: {interests:['coding','brunch','MongoDB']}})
db.students.update({name: "Michael"}, {$set: {interests:['coding','brunch','MongoDB']}})
db.students.update({name: "Patrick"}, {$set: {interests:['coding','brunch','MongoDB']}})
db.students.update({name: "Eric"}, {$set: {interests:['coding','brunch','MongoDB']}})
db.students.update({name: "Brian"}, {$set: {interests:['coding','brunch','MongoDB']}})
9.
db.students.update({name: "Leo"}, {$push: {interests:'gaming'}})
db.students.update({name: "Michael"}, {$push: {interests:'porn'}})
db.students.update({name: "Patrick"}, {$push: {interests:'swimming'}})
db.students.update({name: "Eric"}, {$push: {interests:'Netflix'}})
db.students.update({name: "Brian"}, {$push: {interests:'Database'}})
10.
db.students.update({name: "Leo"}, {$push: {interests:'taxes'}})
11.
db.students.update({name: "Leo"}, {$pop: {interests:1}})
12.
db.students.remove({home_state: "WA"}, false)
13.
db.students.remove({name: "Eric"}, false)
14.
db.students.remove({lucky_number: {$gt: 5}}, 1)
15.
db.students.update({name: "Leo"}, {$set: {number_of_belts:0}})
16
db.students.update({home_state: "CA"}, {$set: {number_of_belts:1}})
17.
db.students.update({name: "Leo"}, {$rename:{"number_of_belts":"belts_earned"}}, false, true)
18.
db.students.update({}, {$unset:{lucky_number:1}}, false, true)
19.
db.students.updateMany({}, {$currentDate:{updated_on:{$type:"date"}}})