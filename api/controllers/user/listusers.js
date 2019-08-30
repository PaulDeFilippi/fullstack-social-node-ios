module.exports = async function(req, res) {
    // res.send({id: 1, name: "Roger Federer"})

    console.log("Listing out all users now...")

    // fetch all users using Waterline
    const users = await User.find()

    res.send(users)
}