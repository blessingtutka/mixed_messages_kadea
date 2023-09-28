# Mixed Messages Kadea
A random message generator with JS. It's a random message generator that generates any message once the users run the program.
It's just for fun.
Here is the code snippet for this program:
```javascript
const message = ['Bonjour chers amis, nous sommes le groupe N1', 'Nous bossons a la Kadea', 'Nous travaillons sur le projet mixed message'];
function generatemessage() {
  const messages = Math.floor(Math.random() * message.length);
  const messagemexed = message[messages];
  return messagemexed;
};
console.log(generatemessage())
```
Here is an Image of how the code works:

![demo-mixed-message](https://github.com/blessingtutka/mixed_messages_kadea/assets/117514619/6474b5bc-ed0e-4ee2-96b1-f7c0f5d55c65)
