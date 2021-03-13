loot spawn ~ ~ ~ loot tame_wolf:get_head
summon wolf ~ ~ ~ {Tags:["new","tamed_wolf"]}
data modify entity @e[tag=new,tag=tamed_wolf,limit=1] Owner set from entity @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1] Item.tag.SkullOwner.Id
kill @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1]
tag @e[tag=new,tag=tamed_wolf] remove new


