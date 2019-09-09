module.exports = {
    attributes: {
        text: {
            type: 'string', required: true
        },

        imageUrl: {
            type: 'string',
            defaultsTo: '',
        },

        user: {
            model: 'user'
        }
    }
}