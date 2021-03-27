const messages = ["Kevin", "Ana", "Jesica", "Diego", "Manuel", "Carolina", "Paulina"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
