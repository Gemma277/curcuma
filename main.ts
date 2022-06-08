scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 f . f 1 . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 3 f 3 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f 3 f f . . . . . . 
    . . . . 3 d d d d d 3 . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
