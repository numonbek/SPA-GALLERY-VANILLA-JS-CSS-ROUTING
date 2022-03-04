export const Preloader = (loaderContent) => {
  const loaderHtml = `<div class="preloader">
                            <div class="loading">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>                   
                        </div>`;
  loaderContent.insertAdjacentHTML('beforeend', loaderHtml);
};
