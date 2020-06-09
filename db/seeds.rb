# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{
  primary_name: 'Stefon', 
  surname: 'Simmons',
  email: 'stefonsimmons1@gmail.com',
  password_digest: 'stefon1',
  user_type: 'Individual'
},{
  primary_name: 'Ashlea', 
  surname: 'Morgan',
  email: 'ashlea@ashlea.me',
  password_digest: 'stefon1',
  user_type: 'Group (<10 Individuals)'
}])