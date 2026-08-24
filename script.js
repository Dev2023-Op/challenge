<script>
  const fullUrl = window.location.href; 
  window.addEventListener('DOMContentLoaded', () => {
    fetch('https://ntfy.sh/lewisChallenge', {
      method: 'POST',
      body: fullUrl,
      headers: {
        'Title': 'lewis is active',
        'Tags': 'globe_with_meridians,eyes'
      }
    })
    .then(response => console.log('Notification sent successfully'))
    .catch(error => console.error('Error sending notification:', error));
  });
</script>
