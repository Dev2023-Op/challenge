let userIP = "";

async function fetchAndSaveIP() {
  try {
    const response = await fetch('https://ipify.org');
    const data = await response.json();
    
    // 2. Assign the result to your variable
    userIP = data.ip; 
    
    // 3. Any code that depends on the IP must run inside or after this point
    console.log("Variable updated successfully:", userIP);
    
  } catch (error) {
    console.error("Error grabbing IP:", error);
  }
}

let thing;

const fullUrl = window.location.href; 
window.addEventListener('DOMContentLoaded', () => {
  thing = (fullUrl + " " + userIP)
  fetch('https://ntfy.sh/lewisChallenge', {
    method: 'POST',
    body: fullUrl + " " + userIP,
    headers: {
      'Title': 'lewis is active',
    }
  })
  .then(response => console.log('Notification sent successfully'))
  .catch(error => console.error('Error sending notification:', error));
});
