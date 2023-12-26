function toggleTheme() {
    var body = document.querySelector('body');
    var button = document.querySelector('button');
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
    } else {
      body.classList.add('dark-theme');
    }
  }