# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!(email: "a@g.com", password: "password", password_confirmation: "password", fullname: "filippo", age: 22, gender: "male")

stories = user.stories.create!(title: "Boom Story", description: "hello i am boom")


stories.images.create!(title: "Boom", picture: "hello" )
stories.images.create!(title: "Boom 2", picture: "hello 2" )