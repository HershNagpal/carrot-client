# Carrot Wolf System Design

## Game Objects

```ts
controls = {
    'game' | 'inventory' | 'collection' :{
        Key: ActionCode
    },
}

game = {
    board: Tile[]
    log: LogItem[]

    moves: number
    totalCarrots: number

    currentXp: number
    maxXp: number
    level: number

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
}

Entity = {
    id: string
    type: 'player' | 'carrot' | 'wolf' | 'tree' | 'fence'
    direction: 'up' | 'down' | 'left' | 'right'
    maxHp: number
    currentHp: number
}

Tile = {
    terrain: 'grass' | 'water' | 'mountain' 
    entityId: string
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
