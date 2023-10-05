const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "webt5987@gmail.com",
      pass: "vfbcawrxhxdjatwx",
    },
  });
var em =  ['varadgujar20@gmail.com' , 
'sambrekartushar60@gmail.com' ,  
'pooshar26@gmail.com' , 
'shubhammojad11@gmail.com' , 
'nikhilarunchavan@gmail.com' ,
'surajjanjal1234@gmail.com', 
'thakare.akash007@gmail.com' , 
'vipulmane6498@gmail.com' ,
'nikhilgmalpure@gmail.com',
'rohitjangir9339@gmail.com']
var n = ['Varad Gujar' , 'Tushar Sambrekar' , 'Pooja Sharma'  , 
'Shubham Trambak Mojad' , 'Nikhil Arun Chavan'  , 'Suraj Sany Janjal'  , 'Akash Thakare' , 'Vipul Vilas Mane'
,'Nikhil Govind Malpure' ,  'Rohit']
var time = ['1:30 - 1:50 PM', 
'1:50 - 2:10 PM' , 
'1:30 - 1:50 PM' ,
"2:10 - 2:30 PM" , 
"2:30 -  2:50 PM" ,  
"2:50  - 03:10 PM" , 
"03:10 -  03:30 PM" ,  
"03:30 :  03:50 PM"  , '3:50 - 4:10 PM' , '4:10 - 4:30 PM']
function sendMail(){


    for(let i  = 0  ; i< 10 ; i++)
    {
        transporter.sendMail({
            from: '"InterView NTPL" <webt5987@gmail.com>', // sender address
            to: em[i], // list of receivers
            cc : ['netparam.kirtee@gmail.com' , 'netparam.manojsharma@gmail.com' , 'developer@netparam.in'], 
            subject: "Interview Session Invitation",  // Subject line
            text: "Hello " + n[i], // plain text body
            html: `<div>
            <p>Hi ${n[i]}</p>
            <p>Geetings of The Day !!</p>
            <br>
            <p><b>Please find the below interview details for today.</b></p>
            <p><b>Interview Timing : ${time[i]}</b></p>

            <p>
            Bhanu Chouhan has invited you to "Interview_D4_Sesssion_Link".
Meeting Details:
     Topic: Interview_D4_Sesssion_Link
     Date & Time: Monday, 11 September 2023 ${time[i]} PM (IST)
     Duration: 285 mins
     Number of participants invited: 1

More ways to join meeting
    •  Join using meeting link:
         
https://jiomeetpro.jio.com/shortener?meetingId=9651912175&pwd=QJ5k8

    •  Join using Meeting ID:
        Meeting ID:  965 191 2175
        Password:  QJ5k8
        Join using desktop, mobile application or through web and use above details


Add meeting to your calender:
https://jiomeetpro.jio.com/addtojiomeet?meetingId=9651912175&pwd=QJ5k8&isWebinar=false

Download .ics file:
https://jiomeetpro.jio.com/downloadICSFile?jiomeetId=9651912175&roomPIN=QJ5k8

Need help? Go to https://jiomeetpro.jio.com/webhelp

Regards,
Team Jiomeet
            </p>

            <p>Thanks & Regards</p>
            <p>NTPL Developer Team</p>
            </div>`, // html body
          }).then((m_res)=>{
            if(m_res.messageId)
            {
                console.log(`Mail Sent to ${n[i]}`)
            }
            else
            {
                console.log(`Mail Not Sent to ${n[i]}`)

            }

          }).catch((err)=>{
            console.log(err)
          })
    }





}


sendMail()