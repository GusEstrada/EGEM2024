document.addEventListener('DOMContentLoaded', () => {

    fetch('./navbar.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el navbar');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('navbar-container').innerHTML = html;
      })
      .catch(error => {
        console.error('Error:', error);
      });
});