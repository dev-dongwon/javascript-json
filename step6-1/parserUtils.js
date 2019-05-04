const parserUtils = {
    dataType : {
        decimalPoint : 'decimalPoint',
        sign : 'sign',
        number : 'number',
        startArray : 'array',
        endArray : 'endArray',
        seperator : 'seperator',
        whitespace : 'whitespace'
    },

    getDataType(token) {

        typeRegexp = {
            decimalPoint : /[.]/g,
            sign : /[-|+]/g,
            number : /^[-|+]?\d+[.]?\d+/g,
            startArray : /[\[]/g,
            endArray : /[\]]/g,
            seperator : /[,]+/g,
            whitespace : /\s+/g,
        };

        let dataType;

        Object.keys(typeRegexp).forEach((key) => {
            if (typeRegexp[key].test(token)) dataType = this.dataType[key];
        })

        return dataType;
    },

    isType(char, type) {
        const charType = this.getDataType(char);
        return charType === type
    }
}

module.exports = parserUtils;