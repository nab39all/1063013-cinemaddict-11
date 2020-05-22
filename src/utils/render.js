const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  BEFOREBEGIN: `before`,
  AFTEREND: `after`
};

const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
    case RenderPosition.BEFOREBEGIN:
      container.before(component.getElement());
      break;
    case RenderPosition.AFTEREND:
      container.after(component.getElement());
  }
};

export {createElement, remove, RenderPosition, render};
