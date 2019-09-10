module.exports = async function(req, res) {
    const postBody = req.body.postBody
    sails.log.warn("Create post object with text: " + postBody)

    const file = req.file('imageFile')
    console.log(file)

    const key = process.env.AWS_KEY
    const secret = process.env.AWS_SECRET

    const options = { 
        // This is the usual stuff
        adapter: require('skipper-better-s3'),
        key: key,
        secret: secret,
        bucket: 'fullstack-bucket-images-2019',
        s3params: { ACL: 'public-read' },
            // And while we are at it, let's monitor the progress of this upload
        onProgress: progress => sails.log.verbose('Upload progress:', progress)
    }
 
    file.upload(options, async (err, files) => {
        if (err) { return res.serverError(err.toString()) }

        // success

        // res.send(files)
        // console.log(files)

        const fileUrl = files[0].extra.Location
        // console.log(fileUrl)
        // res.send(fileUrl)

        const userId = req.session.userId
        await Post.create({text: postBody,
            user: userId,
            imageUrl: fileUrl
        }).fetch()

        res.redirect('/post')




    })


    // I want to upload my file above
    // Amazon S3
    // file.upload({
    //     adapter: require('skipper-s3'),
    //     key: '',
    //     secret: '',
    //     bucket: 'fullstack-bucket-images-2019'
    //   }, function (err, filesUploaded) {
    //         if (err) return res.serverError(err);

    //         console.log(filesUploaded)

    //         return res.ok({
    //             files: filesUploaded,
    //             textParams: req.allParams()
    //         });
    //     });

    //return res.end()

    // Waterline creation syntax
    // session is created by Sails MVC out the box
    // const userId = req.session.userId
    // await Post.create({text: postBody, user: userId}).fetch()

    // res.redirect('/post')

}