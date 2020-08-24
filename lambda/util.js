const characters = ['ia', 'linguagens'];

module.exports.getCharacter = function getCharacter(sheft) {

    if (!sheft) return 'characterNotFound';
    return characters[characters.indexOf(sheft.toLowerCase())];
}