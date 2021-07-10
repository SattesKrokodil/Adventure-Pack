// priority: 0

console.info('Removing recipes - done!')

events.listen('recipes', event => {
  // Some got removed for balance reasons, others have their crafting shifted to AoE Professions!
  
  // Completely removed:


  // Removed and in crates
  event.remove({mod: 'mcda'})
  event.remove({mod: 'mcsa'})
  
  
  // Removed and integrated in Age of Exile:

  event.remove({mod: 'waystones'})
  event.remove({mod: 'mcdw'})
  event.remove({mod: 'toms_storage'})
  event.remove({mod: 'expandedstorage'})
  event.remove({mod: 'zoob'})
  
  event.remove({id: 'minecraft:golden_apple'})
  event.remove({id: 'goldensteak:golden_steak'})
  event.remove({id: 'secretrooms:camo_paste'})
  event.remove({id: 'terrestria:log_turner'})
  event.remove({id: 'adorn:trading_station'})
  event.remove({id: 'simplevoidworld:void_portal'})
  
  
  // Blockus (asphalt will be in exporation, rainbow is simply annoying)
  event.remove({id: 'blockus:rainbow_block'})
  
  event.remove({id: 'blockus:asphalt'})
  event.remove({id: 'blockus:white_asphalt'})
  event.remove({id: 'blockus:orange_asphalt'})  
  event.remove({id: 'blockus:magenta_asphalt'})
  event.remove({id: 'blockus:light_blue_asphalt'}) 
  event.remove({id: 'blockus:yellow_asphalt'})
  event.remove({id: 'blockus:lime_asphalt'})  
  event.remove({id: 'blockus:pink_asphalt'})
  event.remove({id: 'blockus:light_gray_asphalt'})
  event.remove({id: 'blockus:gray_asphalt'})
  event.remove({id: 'blockus:cyan_asphalt'})  
  event.remove({id: 'blockus:purple_asphalt'})
  event.remove({id: 'blockus:blue_asphalt'}) 
  event.remove({id: 'blockus:brown_asphalt'})
  event.remove({id: 'blockus:green_asphalt'})  
  event.remove({id: 'blockus:red_asphalt'})
  
  event.remove({id: 'blockus:asphalt_stairs'})
  event.remove({id: 'blockus:white_asphalt_stairs'})
  event.remove({id: 'blockus:orange_asphalt_stairs'})  
  event.remove({id: 'blockus:magenta_asphalt_stairs'})
  event.remove({id: 'blockus:light_blue_asphalt_stairs'}) 
  event.remove({id: 'blockus:yellow_asphalt_stairs'})
  event.remove({id: 'blockus:lime_asphalt_stairs'})  
  event.remove({id: 'blockus:pink_asphalt_stairs'})
  event.remove({id: 'blockus:light_gray_asphalt_stairs'})
  event.remove({id: 'blockus:gray_asphalt_stairs'})
  event.remove({id: 'blockus:cyan_asphalt_stairs'})  
  event.remove({id: 'blockus:purple_asphalt_stairs'})
  event.remove({id: 'blockus:blue_asphalt_stairs'}) 
  event.remove({id: 'blockus:brown_asphalt_stairs'})
  event.remove({id: 'blockus:green_asphalt_stairs'})  
  event.remove({id: 'blockus:red_asphalt_stairs'})
  
  event.remove({id: 'blockus:asphalt_slab'})
  event.remove({id: 'blockus:white_asphalt_slab'})
  event.remove({id: 'blockus:orange_asphalt_slab'})  
  event.remove({id: 'blockus:magenta_asphalt_slab'})
  event.remove({id: 'blockus:light_blue_asphalt_slab'}) 
  event.remove({id: 'blockus:yellow_asphalt_slab'})
  event.remove({id: 'blockus:lime_asphalt_slab'})  
  event.remove({id: 'blockus:pink_asphalt_slab'})
  event.remove({id: 'blockus:light_gray_asphalt_slab'})
  event.remove({id: 'blockus:gray_asphalt_slab'})
  event.remove({id: 'blockus:cyan_asphalt_slab'})  
  event.remove({id: 'blockus:purple_asphalt_slab'})
  event.remove({id: 'blockus:blue_asphalt_slab'}) 
  event.remove({id: 'blockus:brown_asphalt_slab'})
  event.remove({id: 'blockus:green_asphalt_slab'})  
  event.remove({id: 'blockus:red_asphalt_slab'})
})

events.listen('item.tags', event => {
  // Change item tags here
})