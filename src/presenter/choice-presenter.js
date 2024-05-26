const disciplineListElement = document.querySelector(`.discipline-list`);
const lessonElements = disciplineListElement.querySelectorAll(`.lesson-item`);

for (const lesson of lessonElements) {
  lesson.draggable = true;
}

disciplineListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

disciplineListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
  const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
  
  return nextElement;
};

disciplineListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  
  const activeElement = disciplineListElement.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`lesson-item`);
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = getNextElement(evt.clientY, currentElement);
  
  if (
    nextElement && 
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }
		
  disciplineListElement.insertBefore(activeElement, nextElement);
});
