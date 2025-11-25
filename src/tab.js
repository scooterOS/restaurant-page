class Tab {
    #content

    constructor() {
        this.#content = this.init();
    }

    init() {}

    changeContent(parentElement) {
        parentElement.replaceChildren(this.#content);
    }

    addElement(type, parentElement, classList=[], attributes={}, textContent='') {
        const element = document.createElement(type);
        element.textContent = textContent;
        element.classList.add(...classList);
        Object.entries(attributes).forEach(([key, value]) => element[key] = value);   

        if (parentElement) parentElement.appendChild(element);

        return element;
    }

    addSimpleElement(type, parentElement, textContent='') {
        const element = document.createElement(type);
        element.textContent = textContent;

        if (parentElement) parentElement.appendChild(element);

        return element;
    }
}

export default Tab;