const apologies = [
	'Sorry buddy,',
	'Sorry,',
	'Sorry!!',
	'<_< Sorry!',
	'>_> Sorry...',
	'Oh!!',
	'Oh!! Sorry,',
	'No,',
	'I\'m sorry!',
	'Sorry guys,',
];

const personalActions = [
  'go to the bank',
  'go to school',
  'work',
  'get food',
  'flush the toilet',
  'wash the dishes',
  'do the laundry',
  'jumpstart a car',
  'buy some milk',
  'brush my teeth',
  'heat up some food',
  'scrub the floors',
  'walk the dog',
  'walk the cat',
  'walk the bird',
  'smoke some sausage',
  'build a bicycle',
  'put on my shoes',
  'write a letter',
  'sell a car',
  'buy a kite',
  'skateboard',
  'save some money',
  'buy ice skates',
  'buy snow boots',
];

const relations = [
  'wife',
  'brother',
  'sister',
  'mom',
  'dad',
  'cousin',
  'neighbor',
  'coworker',
  'buddy',
  'friend',
  'former coworker',
  'aunt',
  'uncle',
];

const relationActions = [
  'going skiing',
  'graduating',
  'having a birthday',
  'getting married',
  'getting a divorce',
  'having a baby',
  'having surgery',
  'coming into town',
  'staying the night',
  'adopting me',
  'buying my snow boots',
  'selling their car',
  'eating a taco',
  'watching YouTube',
  'watching Netflix',
  'watching HBO',
  'driving a car',
  'getting their ballooning license',
  'going hiking',
  'stranded in the woods',
  'fighting a bear',
];

const timeframes = [
  'today',
  'this evening',
  'tomorrow',
  'this week',
  'next week',
];

function rnd(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function disappoint() {
	const apology = rnd(apologies);
  const personalAction = rnd(personalActions);
  const relation1 = rnd(relations);
  const relation2 = rnd(relations);
  const relationAction = rnd(relationActions);
  const timeframe = rnd(timeframes);
  
  return `${apology} I can't today. I have to ${personalAction} because my ${relation1}'s ${relation2} is ${relationAction} ${timeframe}.`;
}

module.exports = disappoint;

