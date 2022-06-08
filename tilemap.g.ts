// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001000000000000000000000000000002010001010100000101010100000000000100000000000001000001000000000001000000000000010000010001010101010001010101000100000100010101010100010100000001000001000100000101000101000000010000010001000001010001010100000100000100010000010100010100000001000001000100010101000101010101010001010001000100010001000000000000010000000001010100010000000000010100010000010101000100010101010101000100000101010001000101010101010101000001010100010000000000000000000000010101010100020101010101010101010101`, img`
2 . . . . . . . . . . . . . . . 
2 . 2 2 2 . . 2 2 2 2 . . . . . 
2 . . . . . . 2 . . 2 . . . . . 
2 . . . . . . 2 . . 2 . 2 2 2 2 
2 . 2 2 2 2 . 2 . . 2 . 2 2 2 2 
2 . . . . . . 2 . . 2 . 2 . . 2 
2 . 2 2 . . . . . . 2 . 2 . . 2 
2 . 2 2 2 . . 2 . . 2 . 2 . . 2 
2 . 2 2 . . . 2 . . 2 . 2 . 2 2 
2 . 2 2 2 2 2 2 . 2 2 . 2 . 2 . 
2 . 2 . . . . . . 2 . . . . 2 2 
2 . 2 . . . . . 2 2 . 2 . 2 2 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.coral0,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
