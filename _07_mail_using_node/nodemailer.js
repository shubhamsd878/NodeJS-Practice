var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shubhamtemp878@gmail.com',
        pass: '20012041042'
    }
})

var mailOptions = {
    from: 'shubkdjsfhksdfkjh@gmail.com',
    to: 'shubham180117@gmail.com, shubham.sd878@.com',
    subject: '02 ending mail from node js',
    // text: 'that was easy'
    html: "<h1>that was easy</h1>"
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error)
    }
    else{
        console.log("Email sent: " + info.response)
    }
})