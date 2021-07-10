// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
  // Change recipes here
  event.remove({id: 'minecraft:tnt'})
  event.shapeless(item.of('minecraft:slime_ball', 1), ['minecraft:milk_bucket', 'minecraft:sugar', 'minecraft:wheat'])
  event.shapeless(item.of('minecraft:blaze_rod', 1), ['minecraft:gold_ingot', 'minecraft:stick', 'minecraft:nether_brick'])
  event.shapeless(item.of('minecraft:leather', 1), ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh']) 

  event.shapeless(item.of('porkchop', 1), ['minecraft:rotten_flesh', 'minecraftu:sugar'])
  event.shapeless(item.of('chicken', 1), ['minecraft:rotten_flesh', 'minecraft:melon_seeds'])
  event.shapeless(item.of('beef', 1), ['minecraft:rotten_flesh', 'minecraft:wheat_seeds'])
  event.shapeless(item.of('minecraft:phantom_membrane', 3), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:leather'])
  event.shapeless(item.of('minecraft:egg', 1), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:bone_meal'])
  
  event.remove({id: 'charm:glowball'})
  event.remove({output: 'toms_storage:ts.wireless_terminal'}) 

  event.shaped(item.of('origins:orb_of_origin', 1), [
    'GGG',
    'GSG',
    'DDD'
    ], {
    G: 'minecraft:glass',
    S: '#minecraft:saplings',
    D: 'minecraft:iron_ingot'


    event.shaped(item.of('ftbquests:book', 1), [
    'XXX',
    'GSG',
    'XXX'
    ], {
    G: 'minecraft:dirt',
    S: 'minecraft:book',
	X: 'minecraft:air'
  })

  event.shaped(item.of('minecraft:arrow', 1), [
    'S',
    'D',
    'D'
    ], {
    S: 'minecraft:iron_nugget',
    D: 'minecraft:stick'
  })


  event.shaped(item.of('minecraft:sheep_spawn_egg', 1), [
    'OOO',
    'OTO',
    'OPO'
    ], {
    O: 'minecraft:white_dye',
    P: 'minecraft:lead',
    T: 'minecraft:egg'
  })

  event.shaped(item.of('minecraft:cow_spawn_egg', 1), [
    'OOO',
    'OTO',
    'OPO'
    ], {
    O: 'minecraft:brown_dye',
    P: 'minecraft:lead',
    T: 'minecraft:egg'
  })

  event.shaped(item.of('minecraft:pig_spawn_egg', 1), [
    'OOO',
    'OTO',
    'OPO'
    ], {
    O: 'minecraft:pink_dye',
    P: 'minecraft:lead',
    T: 'minecraft:egg'
  })



})

events.listen('item.tags', event => {
  // Change item tags here
})