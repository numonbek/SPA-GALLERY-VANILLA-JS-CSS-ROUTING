const divElement = document.createElement('div');
divElement.className = 'card-move';

/* asycn function for get and move title card */
const cursorMoveTitle = (cards) => {
  const cursor = cards.querySelectorAll('.card');

  cursor.forEach(async (item) => {
    await mouseMove(item);
    await mouseLeave(item);
  });
};

// get and moving the title block
const mouseMove = (item) => {
  item.addEventListener('mousemove', (event) => {
    const title = event.target.closest('.card');
    const cardBlock = title.querySelector('.card__block');
    const text = title.querySelector('.card-title').innerText;
    divElement.innerText = `${text}`;

    cardBlock.append(divElement);

    const x = event.clientX;
    const y = event.clientY;

    divElement.style.left = `${x - 50}px`;
    divElement.style.top = `${y + 50}px`;
  });
};

/* removing title block */
const mouseLeave = (item) => {
  item.addEventListener('mouseleave', () => {
    divElement.remove();
  });
};

export { cursorMoveTitle };
