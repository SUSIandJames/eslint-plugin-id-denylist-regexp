module.exports = function string2RegExp(string) {
    const match = string.match(new RegExp('^\/(.*)\/(?!.*(.).*\2)([gimy]*)$'));
    return new RegExp(match[1], match[3]);
}
