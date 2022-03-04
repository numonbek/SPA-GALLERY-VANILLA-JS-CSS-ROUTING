import { dropDawn } from '../modules/dropDawn.js';
import { Preloader } from '../render/Preloader.js';
import { renderAlbums } from '../render/renderAlbums.js';
import { renderEmptyAlbum } from '../render/renderEmptyAlbum.js';
import { renderErrServer } from '../render/renderErrServer.js';
import { renderImages } from '../render/renderImages.js';
import { renderUsers } from '../render/renderUsers.js';

const fetchUser = async (content) => {
  try {
    content.innerHTML = '';
    Preloader(content);

    const response = await fetch('https://json.medrating.org/users/');
    const data = await response.json();
    content.innerHTML = '';
    content.appendChild(renderUsers(data, content));
  } catch (error) {
    content.innerHTML = '';
    content.classList.add('error-user');
    renderErrServer(content);
  }
};

const fetchAlbum = async (userId, content, e) => {
  try {
    content.innerHTML = '';
    Preloader(content);
    content.classList.add('preloader--active');
    dropDawn(e);
    const response = await fetch(`https://json.medrating.org/albums?userId=${userId}`);
    const data = await response.json();
    content.innerHTML = '';
    content.classList.remove('preloader--active');
    if (data.length == 0) {
      renderErrServer(content);
    }

    renderAlbums(data, content, userId);
  } catch (error) {
    content.innerHTML = '';
    renderErrServer(content);
  }
};

const fetchImg = async (albumId, content, e) => {
  try {
    content.innerHTML = '';
    Preloader(content);
    content.classList.add('preloader--active');
    dropDawn(e);
    const response = await fetch(`https://json.medrating.org/photos?albumId=${albumId}`);
    const data = await response.json();
    content.innerHTML = '';
    content.classList.remove('preloader--active');
    if (data.length == 0) {
      renderEmptyAlbum(content);
    }
    await renderImages(data, content, albumId);
  } catch (error) {
    content.innerHTML = '';
    renderErrServer(content);
  }
};

export { fetchUser, fetchAlbum, fetchImg };
