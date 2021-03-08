// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
  // Change recipes here
  event.remove({id: 'minecraft:tnt'})
  event.shapeless(item.of('minecraft:slime_ball', 1), ['minecraft:milk_bucket', 'minecraft:sugar', 'minecraft:wheat'])
  event.shapeless(item.of('minecraft:blaze_rod', 1), ['minecraft:gold_ingot', 'minecraft:stick', 'minecraft:nether_brick'])
  event.shapeless(item.of('minecraft:leather', 1), ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh']) 

  event.shapeless(item.of('minecraft:leather', 5), ['winged:demonic_flesh']) 
  event.shapeless(item.of('minecraft:leather', 3), ['biomemakeover:bat_wing']) 


  event.shapeless(item.of('porkchop', 1), ['minecraft:rotten_flesh', 'minecraft:sugar'])
  event.shapeless(item.of('chicken', 1), ['minecraft:rotten_flesh', 'minecraft:melon_seeds'])
  event.shapeless(item.of('beef', 1), ['minecraft:rotten_flesh', 'minecraft:wheat_seeds'])
  event.shapeless(item.of('minecraft:phantom_membrane', 3), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:leather'])
  event.shapeless(item.of('minecraft:egg', 1), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:bone_meal'])

  
  event.shapeless(item.of('mmorpg:loot_crate/magic', 1), ['mmorpg:loot_crate/common','mmorpg:loot_crate/common','mmorpg:loot_crate/common','mmorpg:currency/orb_of_transmutation'])
  event.shapeless(item.of('mmorpg:loot_crate/rare', 1), ['mmorpg:loot_crate/magic','mmorpg:loot_crate/magic','mmorpg:loot_crate/magic', 'mmorpg:currency/randomize_affixes'])
  event.shapeless(item.of('mmorpg:loot_crate/relic', 1), ['mmorpg:loot_crate/rare','mmorpg:loot_crate/rare','mmorpg:loot_crate/rare', 'mmorpg:currency/crystal_of_truth'])
  
  event.remove({id: 'charm:glowball'})

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

  event.shaped(item.of('minecraft:arrow', 1), [
    'S',
    'D',
    'D'
    ], {
    S: 'minecraft:iron_nugget',
    D: 'minecraft:stick'
  })

  event.shaped(item.of('mmorpg:potions/reset_all_spells', 1), [
    'OXO',
    'XTX',
    'OPO'
    ], {
    O: 'minecraft:gold_nugget',
    X: 'minecraft:gold_ingot',
    P: 'minecraft:glass_bottle',
    T: 'mmorpg:mat/salvage/salvage0'
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