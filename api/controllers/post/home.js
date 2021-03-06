module.exports = async function(req, res) {
    sails.log.warn("Show the post creation form now")

    const userId = req.session.userId
    const allPosts = await Post.find({user: userId})
        .populate('user')
        .sort('createdAt DESC')

    if (req.wantsJSON) {
        return res.send(allPosts)
    }
    
    res.view('pages/post/home', {
        allPosts
        
    })
}