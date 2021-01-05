controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . 1 . . . . 
        . . . 1 . . . . 
        . . 1 1 1 . . . 
        . . 1 1 1 . . . 
        . . 1 1 1 . . . 
        . . 2 1 2 . . . 
        . . . 4 . . . . 
        `, mySprite, 0, -70)
    projectile2.startEffect(effects.fire)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    projectile2.destroy()
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.siren.play()
    info.changeLifeBy(-1)
})
let MyEnemy: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen))
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 8 1 1 1 8 . . . . . . 
    . . . . 8 1 1 1 1 1 8 . . . . . 
    . . . . 8 1 8 1 8 1 8 . . . . . 
    . . . 8 1 1 8 1 8 1 1 8 . . . . 
    . . . 8 1 5 5 1 5 5 1 8 . . . . 
    . . . 8 1 5 . 1 . 5 1 8 . . . . 
    . . . 8 1 5 . 1 . 5 1 8 . . . . 
    . . . . 1 2 . 1 . 2 1 . . . . . 
    . . . . . 4 2 2 2 4 . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    MyEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 2 2 5 . . . . . . 
        . . . . 5 5 2 2 2 5 5 . . . . . 
        . . 5 5 5 2 2 2 2 2 5 5 5 . . . 
        . . 5 8 8 1 8 8 8 1 8 8 5 5 . . 
        . . 1 1 f f f 1 f f f 1 1 . . . 
        . . . 1 1 f f f f f 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 2 2 . 1 1 1 . 2 2 . . . . 
        . . 2 2 . . . . . . . 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    MyEnemy.setKind(SpriteKind.Enemy)
    MyEnemy.x = randint(0, 160)
})
