module.exports = function string2RegExp(string) {
    const match = string.match(/^\/(.*?)\/([gimy]*)$/u);

    return new RegExp(match[1], match[2]);
}
