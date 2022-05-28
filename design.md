# Carrot Wolf System Design

## Game Objects

```ts
game = {
    board: Tile[]
    entities: Entity[]
    log: LogItem[]

    moves: number
    totalCarrots: number

    weaponId: string
    pocketId: string
    superCarrotId: string
    fences: number
    glow: number

    carrotHealing: number,
    fenceHp: number,
    maxHeldFences: number,

    gameOver: boolean,
    currentMenu: 'game' | 'inventory' | 'collection '

    keyBindings = {
    'game' | 'inventory' | 'collection' : {
        Key: ActionCode
    },
}
}

Entity = {
    id: string
    type: 'player' | 'carrot' | 'wolf' | 'tree' | 'fence'
    direction: 'up' | 'down' | 'left' | 'right'
    maxHp: number
    currentHp: number
    currentLvl: number | 1
    currentXp: number | 0
    maxXp: number | 10
}

Tile = {
    terrain: 'grass' | 'water' | 'mountain' 
    itemId: number | -1
    entityId: number | -1
    coordinates: {x: number, y: number}
}

Item = {
    id: string
    type: 'weapon' | 'superCarrot'
    strength?: number
    weaponType?: 'blade' | 'axe' | 'spear' 
    description: string
    flavor: string
}

LogItem = {
    turn: number
    message: string
}
```
