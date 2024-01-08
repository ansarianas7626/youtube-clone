let nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];


export function generateRandomName() {
    let finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
};


let comments = ["Greatjob!","Interestingapproach.","Welldone!","Keepitup!","Nicework!","Impressive!","Fantastic!","Bravo!","Awesome!","Younailedit!","Excellentwork!","Superb!","Outstanding!",
"Verycreative!","Wonderful!","Fantasticeffort!","Kudos!","Brilliant!","Terrific!","Exceptional!","Remarkable!","Jobwelldone!","Thumbsup!","Amazing!","Top-notch!","Splendid!",
"Impressivework!","Greateffort!","A+", "Keepitgoing!","Spectacular!","Stellar!","First-class!","Top-shelf!","Worthapplauding!","Wellexecuted!","Astonishing!","Mind-blowing!","Incredible!","Phenomenal!","You'reastar!","Genius!","Awe-inspiring!","Exceptionallywelldone!","You'reonfire!","Flawless!","BravoZulu!","Rockon!","You'vegotthemagictouch!","Aroundofapplause!","Youmakeitlookeasy!","Hatsofftoyou!","Amasterstroke!","You'reunstoppable!","Inaleagueofyourown!","You'realegend!","You'rethebest!","Atrueartist!","You'veoutdoneyourself!","You'reawizard!","Perfection!","You'reamaestro!","Unbelievable!","You'vesetthebarhigh!"];


export function generateRandomComment() {
    let finalComment = comments[Math.floor(Math.random() * nameList.length)];
    return finalComment;
};