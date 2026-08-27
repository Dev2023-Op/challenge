const fullUrl = window.location.href; 
window.addEventListener('DOMContentLoaded', () => {
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
