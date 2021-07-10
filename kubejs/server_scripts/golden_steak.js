// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
  // Change recipes here


})

events.listen('item.tags', event => {
  // Change item tags here


  event.get('origins:meat').add('goldensteak:golden_steak');
  event.get('origins:meat').add('goldensteak:enchanted_golden_steak');
  event.get('minecraft:piglin_loved').add('goldensteak:golden_steak');
  event.get('minecraft:piglin_loved').add('goldensteak:enchanted_golden_steak');


})