// Smooth scrolling when clicking on navigation links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Display current date on each blog post
  document.querySelectorAll('article').forEach(article => {
    const time = article.querySelector('time');
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    time.textContent = date;
  });
  
  // Display alert when clicking on "Read More" links
  document.querySelectorAll('article a').forEach(readMoreLink => {
    readMoreLink.addEventListener('click', e => {
      e.preventDefault();
      alert('You clicked on "Read More"');
    });
  });