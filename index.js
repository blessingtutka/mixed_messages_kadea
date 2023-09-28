const message = ['Bonjour chers amis, nous sommes le groupe N1','Nous bossons a la Kadea','Nous travaillons sur le projet mixed message'];
function generatemessage() {
    const messages = Math.floor(Math.random()*message.length);
    const messagemexed = message[messages];
    return messagemexed;
};

   
