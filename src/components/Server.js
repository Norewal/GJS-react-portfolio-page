const nodemailer = require("nodemailer");
const express = require('express');
const bodyParser = require('body-parser');
const { RiGameFill } = require("react-icons/ri");
const app= express();
//const email = require("./email.js");

app.use(express.static("./Form.js"));
//app.use(express.static("./components"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "norewal998@gmail.com",
        pass: "Tappancs998"
    }
})

function sendEmail(mail) {
    var mailOptions = {
        from: "norewal998@gmail.com",
        to: mail.to,
        subject: mail.subject,
        html: mail.body
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err)
        } else {
            console.log("Email sent: " + info.response)
        }
    }) 

}


app.post("/send_email_form", (req, res) => {
    mail = {
        to: req.body.name,
        subject: req.body.email,
        body: req.body.message
    }
    sendEmail(mail);
    res.redirect("/");
})




app.listen(8100, () => {
    console.log("Server is running at port 8100")
})
