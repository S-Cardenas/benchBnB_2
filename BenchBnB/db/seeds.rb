# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.destroy_all
bench1 = Bench.create!({description: "2 South End Avenue", lat: 40.708237, lng:-74.017317})
bench2 = Bench.create!({description: "Rector Street Sub", lat: 40.708040, lng: -74.013806})
bench3 = Bench.create!({description: "WTC Memorial Foundation", lat: 40.710412, lng: -74.015171})
