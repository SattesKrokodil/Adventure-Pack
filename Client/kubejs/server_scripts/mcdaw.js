// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
  // Change recipes here
  event.remove({id: 'mcda:grim_armor_boots'})
  event.remove({mod: 'mcda'})
  event.remove({mod: 'mcdw'})

})

events.listen('item.tags', event => {
  // Change item tags here
})