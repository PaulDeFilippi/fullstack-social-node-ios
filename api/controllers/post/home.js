module.exports = async function(req, res) {
    sails.log.warn("Show the post creation form now")

    const allPosts = await Post.find()

    res.view('pages/post/home', {
        allPosts
    })
}