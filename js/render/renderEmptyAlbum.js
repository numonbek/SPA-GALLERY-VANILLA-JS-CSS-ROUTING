export const renderEmptyAlbum = (errorServer) => {
  const errorHtml = ` <div class="empty ">
                                <div class="empty__container">
                                    <div class="empty__photo">
                                        <img src="./assets/img/svg/err-server.svg" alt="">
                                    </div>
                                    <div class="empty__block">
                                        <h1 class="fontStyle--theme--strong">Пустой Альбом</h1>
                                        <p>Уже работаем над наполнениям</p>
                                    </div>
                                </div>
                         </div>`;
  errorServer.insertAdjacentHTML('beforeend', errorHtml);
};
