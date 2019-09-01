module.exports = async function(req, res) {
    const postBody = req.body.postBody
    sails.log.warn("Create post object with text: " + postBody)

    // Waterline creation syntax
    const record = await Post.create({text: postBody}).fetch()

    res.send(record)

}