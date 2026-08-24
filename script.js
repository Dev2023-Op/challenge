<script>
  const fullUrl = window.location.href; 
  window.addEventListener('DOMContentLoaded', () => {
    // Replace 'lewisChallenge' with your actual unique ntfy topic name
    fetch('https://ntfy.sh', {
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
