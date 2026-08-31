document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const quoteForm = document.getElementById('quoteForm');
  const successMessage = document.querySelector('.success-message');

  if (quoteForm && successMessage) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(quoteForm);
      const name = formData.get('firstName') || 'Friend';

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          successMessage.textContent = `Thanks, ${name}. Your request has been sent. Please call or text (253) 905-2220 for the fastest response.`;
          quoteForm.reset();
        })
        .catch(() => {
          successMessage.textContent = `Sorry, something went wrong sending that. Please call or text (253) 905-2220 directly so I don't miss your request.`;
        });
    });
  }
});
