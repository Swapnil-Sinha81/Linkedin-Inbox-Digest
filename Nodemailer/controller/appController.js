const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = require('../env'); 

/* send mail from testing account */
const signup = async(req,res)=>{
    /* testing account */
    let testAccount = await nodemailer.createTestAccount();
    /* reusable transporter object using the default SMTP transport */
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    /* send mail with defined transport object */
    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        bcc: "bar@example.com, baz@example.com", // list of BCC receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Registered with us.", // plain text body
        html: "<b>Hello world?</b>", // html body
    }

    setInterval(() => {
        transporter
        .sendMail(message)
        .then((info) => {
            console.log('Email sent:', info.messageId);
        })
        .catch((error) => {
            console.error('Email sending failed:', error);
        });
      }, 10800000); // Send email every 3 hours
    
    return res.status(201).json({
        msg: 'You will receive an e-mail every 3 hours',
        info : info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
    }).catch(error=>{
        return res.status(500).json({ error })});
    
    // res.status(201).json("Signup Successfully...!");
}

/* send mail from g-mail account */
const getBill = (req,res)=>{

    const { userEmail } = req.body;

    let config = {
        service : 'gmail',
        auth : {
            user : EMAIL,
            pass : PASSWORD
        }
    }
    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new Mailgen({
        theme: 'default',
        product : {
            name : "Notify",
            link : "https://swap-nova.github.io/Portfolio2.0/"
        }
    })
    let response = {
        body : {
            name : "these are your current LinkedIn stats",
            intro : "Your unread notifications and messages are listed below: ",
            table : {
                data : [
                    {
                        Unread_Notification : "2",
                        Unread_Messages : "3",
                        Data_Difference : "NA"
                    }
                ]
            },
            outro : "Hope you have a great day ahead!!"
        }
    }

    let mail = MailGenerator.generate(response);
    let message = {
        from : EMAIL,
        bcc : userEmail, // using BCC to send the email to the user's email address
        subject : "Personal LinkedIn Stats",
        html : mail
    }

    transporter.sendMail(message).then(()=>{
        return res.status(201).json({
            msg : "You should receive an e-mail"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
    // res.status(201).json("getBill Successfully...!");
}

module.exports = {
    signup,
    getBill
}