var nodemailer = require('nodemailer');

module.exports = {

  emailtrigger: function(context, data) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mark.chilvers@gmail.com',
            pass: ''
        }
      
    });
    
    var mailOptions = {
    from: 'mark.chilvers@gmail.com', // sender address
    to: 'mark.j.chilvers@pwc.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: "Sample mail content sent from job functions" 
};
    
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});    
    

    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
      context.success("Success: " + data);      
    });

    child.stderr.on('data', function(data) {
        console.error('error: ' + data);
        context.failure("Error: " + data);
    });

    child.on('close', function(code) {
        console.log('closing code: ' + code);
    });
  }
};
