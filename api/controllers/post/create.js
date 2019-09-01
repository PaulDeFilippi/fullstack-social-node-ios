module.exports = async function(req, res) {
    const postBody = req.body.postBody
    sails.log.warn("Create post object with text: " + postBody)

    // Waterline creation syntax
    // session is created by Sails MVC out the box
    const userId = req.session.userId
    await Post.create({text: postBody, user: userId}).fetch()

    res.redirect('/post')

}