const localQuotes = [
  {
    text: "Choosing to be positive and having a grateful attitude is going to determine how you're going to live your life.",
    author: 'Joel Osteen',
    tag: 'attitude',
  },
  {
    text: 'My attitude is that if you push me towards something that you think is a weakness, then I will turn that perceived weakness into a strength.',
    author: 'Michael Jordan',
    tag: 'attitude',
  },
  {
    text: 'Weakness of attitude becomes weakness of character.',
    author: 'Albert Einstein',
    tag: 'attitude',
  },
  {
    text: 'Nothing can stop the man with the right mental attitude from achieving his goal nothing on earth can help the man with the wrong mental attitude.',
    author: 'Thomas Jefferson',
    tag: 'attitude',
  },
  {
    text: 'Attitude is a little thing that makes a big difference.',
    author: 'Winston Churchill',
    tag: 'attitude',
  },
  {
    text: 'Your attitude, not your aptitude, will determine your altitude.',
    author: 'Zig Ziglar',
    tag: 'attitude',
  },
  {
    text: 'There is little difference in people, but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative.',
    author: 'W. Clement Stone',
    tag: 'attitude',
  },
  {
    text: 'Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation.',
    author: 'Brian Tracy',
    tag: 'attitude',
  },
  {
    text: "Everything can be taken from a man but one thing: the last of human freedoms - to choose one's attitude in any given set of circumstances, to choose one's own way.",
    author: 'Viktor E. Frankl',
    tag: 'attitude',
  },
  {
    text: 'A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results.',
    author: 'Wade Boggs',
    tag: 'attitude',
  },
  {
    text: 'Morality is simply the attitude we adopt towards people whom we personally dislike.',
    author: 'Oscar Wilde',
    tag: 'attitude',
  },
  {
    text: "It is not the body's posture, but the heart's attitude that counts when we pray.",
    author: 'Billy Graham',
    tag: 'attitude',
  },
  {
    text: 'People may hear your words, but they feel your attitude.',
    author: 'John C. Maxwell',
    tag: 'attitude',
  },
  {
    text: 'But the attitude of faith is to let go, and become open to truth, whatever it might turn out to be.',
    author: 'Alan Watts',
    tag: 'attitude',
  },
  {
    text: 'Character is the result of two things: mental attitude and the way we spend our time.',
    author: 'Elbert Hubbard',
    tag: 'attitude',
  },
  {
    text: 'Our attitude towards others determines their attitude towards us.',
    author: 'Earl Nightingale',
    tag: 'attitude',
  },
  {
    text: 'Adopting the right attitude can convert a negative stress into a positive one.',
    author: 'Hans Selye',
    tag: 'attitude',
  },
  {
    text: 'Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.',
    author: 'Og Mandino',
    tag: 'attitude',
  },
  {
    text: 'The reactionary is always willing to take a progressive attitude on any issue that is dead.',
    author: 'Theodore Roosevelt',
    tag: 'attitude',
  },
  {
    text: "Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
    author: 'Raymond Chandler',
    tag: 'attitude',
  },
  {
    text: 'Cock your hat - angles are attitudes.',
    author: 'Frank Sinatra',
    tag: 'attitude',
  },
  {
    text: 'When you pray for anyone you tend to modify your personal attitude toward him.',
    author: 'Norman Vincent Peale',
    tag: 'attitude',
  },
  {
    text: 'If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.',
    author: 'Colin Powell',
    tag: 'attitude',
  },
  {
    text: "I'm only going to stand before God and give an account for my life, not for somebody else's life. If I have a bad attitude, then I need to say there's no point in me blaming you for what's wrong in my life.",
    author: 'Joyce Meyer',
    tag: 'attitude',
  },
  {
    text: 'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.',
    author: 'William James',
    tag: 'attitude',
  },
  {
    text: "My attitude is, if someone's going to criticize me, tell me to my face.",
    author: 'Simon Cowell',
    tag: 'attitude',
  },
  {
    text: "Having a positive mental attitude is asking how something can be done rather than saying it can't be done.",
    author: 'Bo Bennett',
    tag: 'attitude',
  },
  {
    text: "My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, 'Oh God, I've got to do this today.'",
    author: 'Richard Branson',
    tag: 'attitude',
  },
  {
    text: "A complainer is like a Death Eater because there's a suction of negative energy. You can catch a great attitude from great people.",
    author: 'Barbara Corcoran',
    tag: 'attitude',
  },
  {
    text: 'The meaning of things lies not in the things themselves, but in our attitude towards them.',
    author: 'Antoine de Saint-Exupery',
    tag: 'attitude',
  },
  {
    text: "Pink isn't just a color, it's an attitude!",
    author: 'Miley Cyrus',
    tag: 'attitude',
  },
  {
    text: 'The remarkable thing is, we have a choice everyday regarding the attitude we will embrace for that day.',
    author: 'Charles R. Swindoll',
    tag: 'attitude',
  },
  {
    text: 'A positive attitude can really make dreams come true - it did for me.',
    author: 'David Bailey',
    tag: 'attitude',
  },
  {
    text: 'Good humor is one of the best articles of dress one can wear in society.',
    author: 'William Makepeace Thackeray',
    tag: 'attitude',
  },
  {
    text: 'When you are thwarted, it is your own attitude that is out of order.',
    author: 'Meister Eckhart',
    tag: 'attitude',
  },
  {
    text: "I think it's my adventure, my trip, my journey, and I guess my attitude is, let the chips fall where they may.",
    author: 'Leonard Nimoy',
    tag: 'attitude',
  },
  {
    text: 'Bad attitudes will ruin your team.',
    author: 'Terry Bradshaw',
    tag: 'attitude',
  },
  {
    text: 'For success, attitude is equally as important as ability.',
    author: 'Walter Scott',
    tag: 'attitude',
  },
  {
    text: 'Happiness is an attitude of mind, born of the simple determination to be happy under all outward circumstances.',
    author: 'J. Donald Walters',
    tag: 'attitude',
  },
  {
    text: 'Great effort springs naturally from great attitude.',
    author: 'Pat Riley',
    tag: 'attitude',
  },
  {
    text: 'Attitudes are more important than facts.',
    author: 'George MacDonald',
    tag: 'attitude',
  },
  {
    text: 'Attitude is everything.',
    author: 'Diane von Furstenberg',
    tag: 'attitude',
  },
  {
    text: 'Attitude determines the altitude of life.',
    author: 'Edwin Louis Cole',
    tag: 'attitude',
  },
  {
    text: "Our attitude toward life determines life's attitude towards us.",
    author: 'John N. Mitchell',
    tag: 'attitude',
  },
  {
    text: 'The greatest discovery of my generation is that man can alter his life simply by altering his attitude of mind.',
    author: 'James Truslow Adams',
    tag: 'attitude',
  },
  {
    text: 'But my attitude about it is I have miles to go before I sleep.',
    author: 'Peabo Bryson',
    tag: 'attitude',
  },
  {
    text: 'The attitude is very important. Because, your behavior radiates how you feel.',
    author: 'Lou Ferrigno',
    tag: 'attitude',
  },
  {
    text: "When you ain't got no money, you gotta get an attitude.",
    author: 'Richard Pryor',
    tag: 'attitude',
  },
  {
    text: 'Civilization is a method of living, an attitude of equal respect for all men.',
    author: 'Jane Addams',
    tag: 'attitude',
  },
  {
    text: 'Most of us start out with a positive attitude and a plan to do our best.',
    author: 'Marilu Henner',
    tag: 'attitude',
  },
  {
    text: 'There are no menial jobs, only menial attitudes.',
    author: 'William J. Brennan, Jr.',
    tag: 'attitude',
  },
  {
    text: 'Funny is an attitude.',
    author: 'Flip Wilson',
    tag: 'attitude',
  },
  {
    text: 'The biggest challenge is how to affect public attitudes and make people care.',
    author: 'Jim Fowler',
    tag: 'attitude',
  },
  {
    text: "If you don't like something, change it. If you can't change it, change your attitude.",
    author: 'Maya Angelou',
    tag: 'attitude',
  },
  {
    text: 'It is very important to generate a good attitude, a good heart, as much as possible. From this, happiness in both the short term and the long term for both yourself and others will come.',
    author: 'Dalai Lama',
    tag: 'attitude',
  },
  {
    text: 'Your living is determined not so much by what life brings to you as by the attitude you bring to life not so much by what happens to you as by the way your mind looks at what happens.',
    author: 'Khalil Gibran',
    tag: 'attitude',
  },
  {
    text: "Happiness doesn't depend on any external conditions, it is governed by our mental attitude.",
    author: 'Dale Carnegie',
    tag: 'attitude',
  },
  {
    text: "Whenever you're in conflict with someone, there is one factor that can make the difference between damaging your relationship and deepening it. That factor is attitude.",
    author: 'William James',
    tag: 'attitude',
  },
  {
    text: "Keep a good attitude and do the right thing even when it's hard. When you do that you are passing the test. And God promises you your marked moments are on their way.",
    author: 'Joel Osteen',
    tag: 'attitude',
  },
  {
    text: 'Success or failure depends more upon attitude than upon capacity successful men act as though they have accomplished or are enjoying something. Soon it becomes a reality. Act, look, feel successful, conduct yourself accordingly, and you will be amazed at the positive results.',
    author: 'William James',
    tag: 'attitude',
  },
  {
    text: 'Like success, failure is many things to many people. With Positive Mental Attitude, failure is a learning experience, a rung on the ladder, a plateau at which to get your thoughts in order and prepare to try again.',
    author: 'W. Clement Stone',
    tag: 'attitude',
  },
  {
    text: 'The only disability in life is a bad attitude.',
    author: 'Scott Hamilton',
    tag: 'attitude',
  },
  {
    text: 'If you have a positive attitude and constantly strive to give your best effort, eventually you will overcome your immediate problems and find you are ready for greater challenges.',
    author: 'Pat Riley',
    tag: 'attitude',
  },
  {
    text: 'You cannot control what happens to you, but you can control your attitude toward what happens to you, and in that, you will be mastering change rather than allowing it to master you.',
    author: 'Brian Tracy',
    tag: 'attitude',
  },
  {
    text: 'The greatest discovery of all time is that a person can change his future by merely changing his attitude.',
    author: 'Oprah Winfrey',
    tag: 'attitude',
  },
  {
    text: "A healthy attitude is contagious but don't wait to catch it from others. Be a carrier.",
    author: 'Tom Stoppard',
    tag: 'attitude',
  },
  {
    text: 'Any fact facing us is not as important as our attitude toward it, for that determines our success or failure. The way you think about a fact may defeat you before you ever do anything about it. You are overcome by the fact because you think you are.',
    author: 'Norman Vincent Peale',
    tag: 'attitude',
  },
  {
    text: 'Excellence is not a skill. It is an attitude.',
    author: 'Ralph Marston',
    tag: 'attitude',
  },
  {
    text: "I hope the millions of people I've touched have the optimism and desire to share their goals and hard work and persevere with a positive attitude.",
    author: 'Michael Jordan',
    tag: 'attitude',
  },
  {
    text: 'We cannot change our past. We can not change the fact that people act in a certain way. We can not change the inevitable. The only thing we can do is play on the one string we have, and that is our attitude.',
    author: 'Charles R. Swindoll',
    tag: 'attitude',
  },
  {
    text: 'I was looking for something a lot heavier, yet melodic at the same time. Something different from heavy metal, a different attitude.',
    author: 'Kurt Cobain',
    tag: 'attitude',
  },
  {
    text: 'Spend some time this weekend on home improvement improve your attitude toward your family.',
    author: 'Bo Bennett',
    tag: 'attitude',
  },
  {
    text: 'We awaken in others the same attitude of mind we hold toward them.',
    author: 'Elbert Hubbard',
    tag: 'attitude',
  },
  {
    text: 'There is little difference in people, but that little difference makes a big difference. That little difference is attitude. The big difference is whether it is positive or negative.',
    author: 'Robert Collier',
    tag: 'attitude',
  },
  {
    text: "Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
    author: 'Lou Holtz',
    tag: 'attitude',
  },
  {
    text: "The last of human freedoms - the ability to chose one's attitude in a given set of circumstances.",
    author: 'Viktor E. Frankl',
    tag: 'attitude',
  },
  {
    text: 'Attitude is more important than the past, than education, than money, than circumstances, than what people do or say. It is more important than appearance, giftedness, or skill.',
    author: 'Charles R. Swindoll',
    tag: 'attitude',
  },
  {
    text: 'Being black is not a matter of pigmentation - being black is a reflection of a mental attitude.',
    author: 'Steven Biko',
    tag: 'attitude',
  },
  {
    text: "People in tough times - it doesn't mean they don't have a great attitude.",
    author: 'Joel Osteen',
    tag: 'attitude',
  },
  {
    text: 'A strong positive mental attitude will create more miracles than any wonder drug.',
    author: 'Patricia Neal',
    tag: 'attitude',
  },
  {
    text: 'Certain thoughts are prayers. There are moments when, whatever be the attitude of the body, the soul is on its knees.',
    author: 'Victor Hugo',
    tag: 'attitude',
  },
  {
    text: 'Leadership is practiced not so much in words as in attitude and in actions.',
    author: 'Harold S. Geneen',
    tag: 'attitude',
  },
  {
    text: 'If a person gets his attitude toward money straight, it will help straighten out almost every other area in his life.',
    author: 'Billy Graham',
    tag: 'attitude',
  },
  {
    text: "I've reached a point in my life where it's the little things that matter... I was always a rebel and probably could have got much farther had I changed my attitude. But when you think about it, I got pretty far without changing attitudes. I'm happier with that.",
    author: 'Veronica Lake',
    tag: 'attitude',
  },
  {
    text: "Fairness is not an attitude. It's a professional skill that must be developed and exercised.",
    author: 'Brit Hume',
    tag: 'attitude',
  },
  {
    text: "I think whether you're having setbacks or not, the role of a leader is to always display a winning attitude.",
    author: 'Colin Powell',
    tag: 'attitude',
  },
  {
    text: "Be sure what you want and be sure about yourself. Fashion is not just beauty, it's about good attitude. You have to believe in yourself and be strong.",
    author: 'Adriana Lima',
    tag: 'attitude',
  },
  {
    text: 'Hitler and Mussolini were only the primary spokesmen for the attitude of domination and craving for power that are in the heart of almost everyone. Until the source is cleared, there will always be confusion and hate, wars and class antagonisms.',
    author: 'Jiddu Krishnamurti',
    tag: 'attitude',
  },
  {
    text: 'There must be something solemn, serious, and tender about any attitude which we denominate religious. If glad, it must not grin or snicker if sad, it must not scream or curse.',
    author: 'William James',
    tag: 'attitude',
  },
  {
    text: 'Sales are contingent upon the attitude of the salesman - not the attitude of the prospect.',
    author: 'W. Clement Stone',
    tag: 'attitude',
  },
  {
    text: "A positive attitude is not going to save you. What it's going to do is, everyday, between now and the day you die, whether that's a short time from now or a long time from now, that every day, you're going to actually live.",
    author: 'Elizabeth Edwards',
    tag: 'attitude',
  },
  {
    text: 'Always keep that happy attitude. Pretend that you are holding a beautiful fragrant bouquet.',
    author: 'Earl Nightingale',
    tag: 'attitude',
  },
  {
    text: 'Black Consciousness is an attitude of the mind and a way of life, the most positive call to emanate from the black world for a long time.',
    author: 'Steven Biko',
    tag: 'attitude',
  },
  {
    text: "I think music is the greatest art form that exists, and I think people listen to music for different reasons, and it serves different purposes. Some of it is background music, and some of it is things that might affect a person's day, if not their life, or change an attitude. The best songs are the ones that make you feel something.",
    author: 'Eddie Vedder',
    tag: 'attitude',
  },
  {
    text: 'We submit to the majority because we have to. But we are not compelled to call our attitude of subjection a posture of respect.',
    author: 'Ambrose Bierce',
    tag: 'attitude',
  },
  {
    text: "The winner's edge is not in a gifted birth, a high IQ, or in talent. The winner's edge is all in the attitude, not aptitude. Attitude is the criterion for success.",
    author: 'Denis Waitley',
    tag: 'attitude',
  },
  {
    text: "Having a clear faith, based on the creed of the church is often labeled today as fundamentalism. Whereas relativism, which is letting oneself be tossed and swept along by every wind of teaching, look like the only attitude acceptable to today's standards.",
    author: 'Pope Benedict XVI',
    tag: 'attitude',
  },
  {
    text: "Today's students can put dope in their veins or hope in their brains. If they can conceive it and believe it, they can achieve it. They must know it is not their aptitude but their attitude that will determine their altitude.",
    author: 'Jesse Jackson',
    tag: 'attitude',
  },
  {
    text: "I think a lot of times we don't pay enough attention to people with a positive attitude because we assume they are naive or stupid or unschooled.",
    author: 'Amy Adams',
    tag: 'attitude',
  },
  {
    text: 'A great attitude does much more than turn on the lights in our worlds it seems to magically connect us to all sorts of serendipitous opportunities that were somehow absent before the change.',
    author: 'Earl Nightingale',
    tag: 'attitude',
  },
  {
    text: 'Chaotic people often have chaotic lives, and I think they create that. But if you try and have an inner peace and a positive attitude, I think you attract that.',
    author: 'Imelda Staunton',
    tag: 'attitude',
  },
  {
    text: 'I am Classic Rock Revisited. I revisit it every waking moment of my life because it has the spirit and the attitude and the fire and the middle finger. I am Rosa Parks with a Gibson guitar.',
    author: 'Ted Nugent',
    tag: 'attitude',
  },
  {
    text: 'And the attitude of faith is the very opposite of clinging to belief, of holding on.',
    author: 'Alan Watts',
    tag: 'attitude',
  },
  {
    text: 'Our lives are not determined by what happens to us but how we react to what happens, not by what life brings us but the attitude we bring to life.',
    author: 'Wade Boggs',
    tag: 'attitude',
  },
  {
    text: "Being a sex symbol has to do with an attitude, not looks. Most men think it's looks, most women know otherwise.",
    author: 'Kathleen Turner',
    tag: 'attitude',
  },
  {
    text: 'I am responsible. Although I may not be able to prevent the worst from happening, I am responsible for my attitude toward the inevitable misfortunes that darken life.',
    author: 'Walter Anderson',
    tag: 'attitude',
  },
  {
    text: 'No rational argument will have a rational effect on a man who does not want to adopt a rational attitude.',
    author: 'Karl Popper',
    tag: 'attitude',
  },
  {
    text: "When I was a child I asked my mother what homosexuality was about and she said - and this was 100 years ago in Germany and she was very open-minded - 'It's like hair color. It's nothing. Some people are blond and some people have dark hair. It's not a subject.' This was a very healthy attitude.",
    author: 'Karl Lagerfeld',
    tag: 'attitude',
  },
  {
    text: 'Success or failure in business is caused more by the mental attitude even than by mental capacities.',
    author: 'Walter Scott',
    tag: 'attitude',
  },
  {
    text: "Obama does not represent America. Nor does he represent anything what our forefathers stood for. This country is basically built on an attitude. It's a way of life. It's not because you're born here. It's not that you're supposed to take from those who have and give to those who haven't. That kills a country. It killed Russia.",
    author: 'Luke Scott',
    tag: 'attitude',
  },
  {
    text: "Stop this attitude that older people ain't any good anymore! We're as good as we ever were - if we ever were any good.",
    author: 'Dolly Parton',
    tag: 'attitude',
  },
  {
    text: 'My attitude to peace is rather based on the Burmese definition of peace - it really means removing all the negative factors that destroy peace in this world. So peace does not mean just putting an end to violence or to war, but to all other factors that threaten peace, such as discrimination, such as inequality, poverty.',
    author: 'Aung San Suu Kyi',
    tag: 'attitude',
  },
  {
    text: 'Your attitude is like a box of crayons that color your world. Constantly color your picture gray, and your picture will always be bleak. Try adding some bright colors to the picture by including humor, and your picture begins to lighten up.',
    author: 'Allen Klein',
    tag: 'attitude',
  },
  {
    text: 'Crime is terribly revealing. Try and vary your methods as you will, your tastes, your habits, your attitude of mind, and your soul is revealed by your actions.',
    author: 'Agatha Christie',
    tag: 'attitude',
  },
  {
    text: 'Some people say I have attitude - maybe I do... but I think you have to. You have to believe in yourself when no one else does - that makes you a winner right there.',
    author: 'Venus Williams',
    tag: 'attitude',
  },
  {
    text: 'The minute you try to talk business with him he takes the attitude that he is a gentleman and a scholar, and the moment you try to approach him on the level of his moral integrity he starts to talk business.',
    author: 'Raymond Chandler',
    tag: 'attitude',
  },
  {
    text: 'Stiletto, I look at it more as an attitude as opposed to a high-heeled shoe.',
    author: 'Lita Ford',
    tag: 'attitude',
  },
  {
    text: "If somebody says no to you, or if you get cut, Michael Jordan was cut his first year, but he came back and he was the best ever. That is what you have to have. The attitude that I'm going to show everybody, I'm going to work hard to get better and better.",
    author: 'Magic Johnson',
    tag: 'attitude',
  },
  {
    text: 'When you have vision it affects your attitude. Your attitude is optimistic rather than pessimistic.',
    author: 'Charles R. Swindoll',
    tag: 'attitude',
  },
  {
    text: "What matters to me is that I do what I think is right and I see, I'm a numbers guy, that's my attitude. I know we have a debt tsunami coming, we are bankrupting this country and I'm in a position where I can actually advance ideas to prevent that from happening. That's exactly what I should be doing.",
    author: 'Paul Ryan',
    tag: 'attitude',
  },
  {
    text: "I developed a nutty attitude where I'd think, If some guy really loves me he doesn't care if I'm fat. I'd come up with all these stupid reasons why it would be OK to be fat.",
    author: 'Kirstie Alley',
    tag: 'attitude',
  },
  {
    text: "Really you just gotta keep chugging along and keep a positive attitude and get through all the problems. You gotta face them, otherwise you don't get through.",
    author: 'Lesley Gore',
    tag: 'attitude',
  },
  {
    text: 'Solidarity is an attitude of resistance, I suppose, or it should be.',
    author: 'Christopher Hitchens',
    tag: 'attitude',
  },
  {
    text: "There's always the motivation of wanting to win. Everybody has that. But a champion needs, in his attitude, a motivation above and beyond winning.",
    author: 'Pat Riley',
    tag: 'attitude',
  },
  {
    text: "Americans are the most generous country on the planet. I've worked in Europe, I've worked in Australia. There is no where else where you get absolutely no attitude for being a foreigner. If you do your job well, they embrace you.",
    author: 'Hugh Jackman',
    tag: 'attitude',
  },
  {
    text: "When I go to the clinic next and sit with a tube in my arm and watch the poison go in, I'm in an attitude of abject passivity. It doesn't feel like fighting at all it just feels like submitting.",
    author: 'Christopher Hitchens',
    tag: 'attitude',
  },
  {
    text: 'Our judgments judge us, and nothing reveals us, exposes our weaknesses, more ingeniously than the attitude of pronouncing upon our fellows.',
    author: 'Paul Valery',
    tag: 'attitude',
  },
  {
    text: 'Pessimism only describes an attitude, and not facts, and hence is entirely subjective.',
    author: 'Francis Parker Yockey',
    tag: 'attitude',
  },
  {
    text: 'I was kicked out of school because of my attitude. I was not assimilating. So I went to work, taking any jobs I could get.',
    author: 'Richard Pryor',
    tag: 'attitude',
  },
  {
    text: "A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",
    author: 'Tom Brady',
    tag: 'attitude',
  },
  {
    text: "So long as you've got your friends about you, and a good positive attitude, you don't really have to care what everyone else thinks.",
    author: 'Gail Porter',
    tag: 'attitude',
  },
  {
    text: "I separated from the Southern Baptists when they adopted the discriminatory attitude towards women, because I believe what Paul taught in Galatians that there is no distinction in God's eyes between men and women, slaves and masters, Jews and non-Jews - everybody is created equally in the eyes of God.",
    author: 'Jimmy Carter',
    tag: 'attitude',
  },
  {
    text: "My attitude toward men who mess around is simple: If you find 'em, kill 'em.",
    author: 'Loretta Lynn',
    tag: 'attitude',
  },
  {
    text: 'Prayer is talking with God. God knows your heart and is not so concerned with your words as He is with the attitude of your heart.',
    author: 'Josh McDowell',
    tag: 'attitude',
  },
  {
    text: "You can't study comedy it's within you. It's a personality. My humor is an attitude.",
    author: 'Don Rickles',
    tag: 'attitude',
  },
  {
    text: "You call to a dog and a dog will break its neck to get to you. Dogs just want to please. Call to a cat and its attitude is, 'What's in it for me?'",
    author: 'Lewis Grizzard',
    tag: 'attitude',
  },
  {
    text: 'The compulsion to do good is an innate American trait. Only North Americans seem to believe that they always should, may, and actually can choose somebody with whom to share their blessings. Ultimately this attitude leads to bombing people into the acceptance of gifts.',
    author: 'Ivan Illich',
    tag: 'attitude',
  },
  {
    text: "I keep guitars that are, you know, the neck's a little bit bent and it's a little bit out of tune. I want to work and battle it and conquer it and make it express whatever attitude I have at that moment. I want it to be a struggle.",
    author: 'Jack White',
    tag: 'attitude',
  },
  {
    text: 'Most of my arguments with musicians through the years have had more to do with their attitude about music, or their attitude about their own lives, or their personal responsibility. Music has never really been the big centerpiece of the fight.',
    author: 'Billy Corgan',
    tag: 'attitude',
  },
  {
    text: 'I love everybody. One of the great things about me is that I have a very positive attitude.',
    author: 'Imelda Marcos',
    tag: 'attitude',
  },
  {
    text: "Mankind's true moral test, its fundamental test (which lies deeply buried from view), consists of its attitude towards those who are at its mercy: animals. And in this respect mankind has suffered a fundamental debacle, a debacle so fundamental that all others stem from it.",
    author: 'Milan Kundera',
    tag: 'attitude',
  },
  {
    text: "It's sort of a mental attitude about critical thinking and curiosity. It's about mindset of looking at the world in a playful and curious and creative way.",
    author: 'Adam Savage',
    tag: 'attitude',
  },
  {
    text: 'Punk was defined by an attitude rather than a musical style.',
    author: 'David Byrne',
    tag: 'attitude',
  },
  {
    text: "It's a fundamental, social attitude that the 1% supports symphonies and operas and doesn't support Johnny learning to program hip-hop beats. When I put it like that, it sounds like, 'Well, yeah,' but you start to think, 'Why not, though?' What makes one more valuable than another?",
    author: 'David Byrne',
    tag: 'attitude',
  },
  {
    text: "I think people feel threatened by homosexuality. The problem isn't about gay people, the problem is about the attitude towards gay people. People think that all gays are Hannibal Lecters. But gay people are sons and daughters, politicians and doctors, American heroes and daughters of American heroes.",
    author: 'Hollis Stacy',
    tag: 'attitude',
  },
  {
    text: "I have this theory that, depending on your attitude, your life doesn't have to become this ridiculous charade that it seems so many people end up living.",
    author: 'Christian Bale',
    tag: 'attitude',
  },
  {
    text: "It was just like a dream. I could have ended up with an album that's not all that different from anything else coming out of Nashville. Mutt made the difference. He took these songs, my attitude, my creativity, and colored them in a way that is unique.",
    author: 'Shania Twain',
    tag: 'attitude',
  },
  {
    text: "I look at Jagger and the like and if I see a good attitude I'll admire it but I wouldn't copy their style.",
    author: 'Michael Hutchence',
    tag: 'attitude',
  },
  {
    text: 'My attitude is never to be satisfied, never enough, never.',
    author: 'Duke Ellington',
    tag: 'attitude',
  },
]
