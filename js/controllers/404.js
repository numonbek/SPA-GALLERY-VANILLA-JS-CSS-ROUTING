export default () => {
  const html = document.createElement('div');
  const img = document.createElement('img');
  img.src = 'https://audiokaif.ru/wp-content/uploads/2019/12/404-error_audiokaif.gif';
  img.style.width = '100%';
  img.style.height = '100%';
  html.appendChild(img);
  return html;
};
