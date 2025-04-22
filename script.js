function generateGreeting() {
    const nameInput = document.getElementById('name-input').value.trim();
    const output = document.getElementById('greeting-output');
  
    if (nameInput) {
      output.textContent = `👋 Hello, ${nameInput}! Welcome aboard.`;
    } else {
      output.textContent = '⚠️ Please enter your name.';
    }
  }
  
  function toggleMessage() {
    const container = document.getElementById('message-container');
    
    if (container.textContent === '') {
      container.textContent = "🌟 Fun Fact: JavaScript was created in just 10 days!";
    } else {
      container.textContent = '';
    }
  }
  