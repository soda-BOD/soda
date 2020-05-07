const vue = require('vue')

module.exports = {
    initList: function () {
        var list = new vue.Vue({
            el: '#list',
            data: {
                list: 'Hello World'
            }
        })
        return list
    }
}
