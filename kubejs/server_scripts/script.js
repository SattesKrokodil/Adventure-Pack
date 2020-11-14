// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
  // Change recipes here

  event.remove({id: 'minecraft:tnt'})
  event.shapeless(item.of('minecraft:slime_ball', 1), ['minecraft:milk_bucket', 'minecraft:sugar', 'minecraft:wheat'])
  event.shapeless(item.of('minecraft:blaze_rod', 1), ['minecraft:gold_ingot', 'minecraft:stick', 'minecraft:nether_brick'])
 
  event.remove({id: 'allure:chute'})
  event.remove({id: 'allure:ender_pearl_block'})
  event.remove({id: 'allure:feeding_trough'})
  event.remove({id: 'allure:ender_watcher'})
  
  event.shaped(item.of('origins:orb_of_origin', 1), [
    'GGG',
    'GSG',
    'DDD'
    ], {
    G: 'minecraft:glass',
    S: '#minecraft:saplings',
    D: 'minecraft:iron_ingot'
  })

})


events.listen('item.tags', event => {
  // Change item tags here
})