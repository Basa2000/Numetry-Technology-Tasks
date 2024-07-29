const nodemailer = require("nodemailer")
require("dotenv").config()


const transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
})

let info = {
    from: 'StudyNotion || CodeHelp - by Babbar',
    to: ["basav.kumbhar95@gmail.com"],
    subject: "Notification Mail",
    html: `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
                border-radius : 50px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <img class="logo" src="https://d226aj4ao1t61q.cloudfront.net/ai2shais_blog_confirmationmail.png" alt=" Logo">
            <div class="message">Mail Receiving Confirmation</div>
            <div class="body">
                <p>Dear User,</p>
                <p>You have successfully received confirmation mail.</p>  
            </div>
            
        </div>
    </body>
    
    </html>`,
}


const sendMail = async( transporter , info ) => {
    try{
        await transporter.sendMail(info)
        console.log("Email Send Done.")
    }
    catch(err){ 
        console.log(err)
    }
}

sendMail(transporter, info)