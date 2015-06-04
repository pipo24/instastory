
dominic = User.create!(
  email: "dominic@vieira.com",
  password: "password",
  password_confirmation: "password",
  fullname: "Dominic Vieira",
  age: 23,
  gender: "male",
  nickname: "dominicvieira",
  bio: "Football, travelling, living, loving...",
  profile_picture: "https://instagramimages-a.akamaihd.net/profiles/profile_326600680_75sq_1377948430.jpg"
  )
rane = User.create!(
  email: "rane@gowan.com",
  password: "password",
  password_confirmation: "password",
  fullname: "Rane Gowan",
  age: 21,
  gender: "male",
  nickname: "rane_gowan",
  bio: "Oh yeh man I like dem shoes, an' I used to like dem Nandos but now that shiz is rank!",
  profile_picture: "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/10986326_801725773253022_974096051_a.jpg"
  )
cheryl = User.create!(
  email: "cheryl@wee.com",
  password: "password",
  password_confirmation: "password",
  fullname: "Cheryl Wee",
  age: 25,
  gender: "female",
  nickname: "piposmm",
  bio: "Hello, thanks...ummm... (sneeze) im sorry guys!",
  profile_picture: "http://images.ak.instagram.com/profiles/profile_213821710_75sq_1370000037.jpg"
  )
tyrone = User.create!(
  email: "tyrone@compton.com",
  password: "password",
  password_confirmation: "password",
  fullname: "Tyrone Compton",
  age: 42,
  gender: "male",
  nickname: "tycyclone",
  bio: "Yeh, I, you know right now sod it. Hahah",
  profile_picture: "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10831951_329085833958927_274518484_a.jpg"
  )
alex = User.create!(
  email: "alex@chin.com",
  password: "password",
  password_confirmation: "password",
  fullname: "Alex P. Chin",
  age: 27,
  gender: "male",
  nickname: "alexpchin",
  bio: "Alex Chin 🇬🇧 British tech entrepreneur. I take photos of: 🍜 Food. ✈️ Travel. 👫 Twin. 💻 Code. 👦 And Pasca",
  profile_picture: "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10735083_800298573349201_2014594527_a.jpg"
  )

# SEEDS STORIES


dominic.stories.create!(
  title: "Football",
  description: "An album of cool football photos that ive seen and liked. So yeah just pictures in general from stadiums to back-alleys and yeah cool...",
  hashtag: "football"
  )

dominic.stories.create!(
  title: "Premier League",
  description: "An album of cool Premier League photos. They are things like players games memes and stuff I guess. So yeah just pictures in general and yeah cool...",
  hashtag: "premierleague"
  )

rane.stories.create!(
  title: "Shoesss",
  description: "An album of cool nike shoes that ive seen and I liked and that I want to own. So yeah just shoes in general.",
  hashtag: "nikeshoes"
  )

rane.stories.create!(
  title: "More Shoesss",
  description: "Anothe album with shoesss. This time they are those highones that look funny... Like space boots or something. Anyways... more shoes",
  hashtag: "hightopsneakers"
  )

cheryl.stories.create!(
  title: "GoT cool",
  description: "An album of pictures and memes and things all related to GoT. I guess they're like not my pictures but I like them and can store them as an album here which I can then customize... COOL!",
  hashtag: "gameofthrones"
  )

tyrone.stories.create!(
  title: "Fried Chickennn!",
  description: "An album with pictures of fried chicken and fried chicken and lots more fried chicken and also maybe some waffles in there. Im hungry hahaha!",
  hashtag: "friedchicken"
  )

alex.stories.create!(
  title: "JS (more inside)",
  description: "Album of JAVASCRIPT! This contains photos of code and memes and ads and whatever else I feel like. Have fun!",
  hashtag: "javascript"
  )


