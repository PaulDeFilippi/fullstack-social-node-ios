module.exports = {
    attributes: {
        text: {
            type: 'string', required: true
        },

        user: {
            model: 'user'
        }
    }
}