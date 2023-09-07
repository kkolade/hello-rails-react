# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

unique_greeting = [
  "Hello, world!",
  "Greetings from Rails!",
  "Welcome to my app!",
  "Have a great day!",
  "Good to see you!"
]

5.times do |i|
  Message.create(greeting: unique_greeting[i])
end
