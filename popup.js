document.addEventListener('DOMContentLoaded', () => {
  // Extension is always active and cannot be toggled.
  const statusCard = document.getElementById('statusCard');
  statusCard.classList.remove('disabled');
});
