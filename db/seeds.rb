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
  password: 'stefon1',
  user_type: 'Individual'
},{
  primary_name: 'Ashlea', 
  surname: 'Morgan',
  email: 'ashlea@ashlea.me',
  password: 'ashlea1',
  user_type: 'Group (<10 Individuals)'
},{
  primary_name: 'Willie', 
  surname: 'Smith',
  email: 'willie@ws.com',
  password: 'willie1',
  user_type: 'Group (<10 Individuals)'
}])

Topic.create!([{
  name: "Software Development",
},{
  name: "Painting"
},{
  name: "Dancing"
},{
  name: "Singing"
},{
  name: "Photography"
},{
  name: "Acting"
}])

Post.create([{
  media_link: "https://i.imgur.com/28fiTPX.png",
  bullet_one: "I have a new set of photograps available",
  bullet_two: "Ready for Travel Companies",
  bullet_three: "https://www.behance.net/stefonsimmons",
  topic_id: 5,
  user_id: 1
},{
  media_link: "https://www.youtube.com/watch?v=kTjKNkz6uxA",
  bullet_one: "New video of me singing",
  bullet_two: "ready to perform these",
  bullet_three: "really ready to record more",
  topic_id: 4,
  user_id: 1
},{
  media_link: "https://imgur.com/UxkQuTq.png",
  bullet_one: "New painting for sale",
  bullet_two: "$4500",
  bullet_three: "new painting idea",
  topic_id: 2,
  user_id: 2
},{
  media_link: "https://media.giphy.com/media/MF1XrtS1F0YrC21R3K/giphy.gif",
  bullet_one: "New web app!",
  bullet_two: "ready to work for your team",
  bullet_three: "see my portfolio: https://stefonsimmons.me",
  topic_id: 4,
  user_id: 3
},{
  media_link: "https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg",
  bullet_one: "cooool!",
  bullet_two: "ofofofofof",
  bullet_three: "blah bldskdsn",
  topic_id: 3,
  user_id: 2
},{
  media_link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/trex-baby-1581368304.jpg",
  bullet_one: "Thats HOT!",
  bullet_two: "Nice Nice",
  bullet_three: "WOOOO",
  topic_id: 6,
  user_id: 3
}])