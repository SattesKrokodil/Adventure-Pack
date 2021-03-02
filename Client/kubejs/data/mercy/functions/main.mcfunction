scoreboard players enable @a mercy
scoreboard players set @a[tag=!didMercyInit] mercycool 0
tag @a add didMercyInit
scoreboard players remove @a[scores={mercycool=1..}] mercycool 1
execute as @a[scores={mercy=1..,mercycool=..0}] run function mercy:execute2
execute as @a[scores={mercy=1..,mercycool=1..}] run function mercy:execute3
