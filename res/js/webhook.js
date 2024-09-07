// Discord Webhook settings
const webhookUrl = 'https://discord.com/api/webhooks/1281909405658517526/02K5gDodvUOWpytBYpDUh3dqeJxm9QR7oRwKKn5Cx9uSkYFbjau1jZVwkwIEs0kJU_r7';
const webhookName = 'Sivusto';
const webhookAvatarUrl = '';

// Element settings
const buttonStyle = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  zIndex: '1000',
  backgroundColor: '#1a1a1a',
  color: '#f2f2f2',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontFamily: 'Black Ops One, sans-serif',
  fontSize: '15px',
};

const menuStyle = {
  position: 'fixed',
  top: '50px',
  right: '10px',
  background: '#2a2a2a',
  padding: '10px',
  border: '1px solid #1a1a1a',
  display: 'none',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const inputFieldStyle = {
  width: '200px',
  height: '30px',
  padding: '10px',
  fontSize: '16px',
  fontFamily: 'Karma, sans-serif',
  color: '#f2f2f2',
  backgroundColor: '#1a1a1a',
  border: '1px solid #1a1a1a',
  borderRadius: '5px',
};

const customMessageInputFieldStyle = {
  width: '200px',
  height: '30px',
  padding: '10px',
  fontSize: '16px',
  fontFamily: 'Karma, sans-serif',
  color: '#f2f2f2',
  backgroundColor: '#1a1a1a',
  border: '1px solid #1a1a1a',
  borderRadius: '5px',
  marginTop: '10px',
};

const sendButtonStyle = {
  width: '100px',
  height: '30px',
  padding: '10px',
  fontSize: '16px',
  fontFamily: 'Black Ops One, sans-serif',
  backgroundColor: '#1e90ff',
  color: '#f2f2f2',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

// Create the button
const button = document.createElement('button');
button.textContent = 'Send Message to devs';
Object.assign(button.style, buttonStyle);

// Create the menu
const menu = document.createElement('div');
Object.assign(menu.style, menuStyle);

// Create the input field and send button
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Enter your message';
Object.assign(inputField.style, inputFieldStyle);

const customMessageInputField = document.createElement('input');
customMessageInputField.type = 'text';
customMessageInputField.placeholder = 'name';
Object.assign(customMessageInputField.style, customMessageInputFieldStyle);

const sendButton = document.createElement('button');
sendButton.textContent = 'Send';
Object.assign(sendButton.style, sendButtonStyle);

// Add event listeners
button.addEventListener('click', () => {
  menu.style.display = 'block';
});

sendButton.addEventListener('click', () => {
  const message = inputField.value;
  const customMessage = customMessageInputField.value;
  if (message.trim() !== '') {
    const finalMessage = `${message}\nSent by: ${customMessage}`;
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: finalMessage,
        username: webhookName,
        avatar_url: webhookAvatarUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    inputField.value = '';
    customMessageInputField.value = '';
    menu.style.display = 'none';
  }
});

// Add elements to the page
document.body.appendChild(button);
document.body.appendChild(menu);

// Add input field, custom message input field, and send button to the menu
menu.appendChild(inputField);
menu.appendChild(customMessageInputField);
menu.appendChild(sendButton);
const info = document.createElement('p');
info.textContent = 'might not work with all browsers or if you are using privacy extensions';
menu.appendChild(info)

// Add hover effect to send button
sendButton.addEventListener('mouseover', () => {
  sendButton.style.backgroundColor = '#4682b4';
});

sendButton.addEventListener('mouseout', () => {
  sendButton.style.backgroundColor = '#1e90ff';
});
