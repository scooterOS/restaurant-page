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

    recursiveAdd(parentElement, objectList) {
        var element;

        for (let i = 0; i < objectList.length; i++) {
            element = document.createElement(objectList[i].type);
        
            element.id = objectList[i].id ?? '';
            element.textContent = objectList[i].text ?? '';
            element.classList.add(...(objectList[i].classList ?? []));
            Object.entries((objectList[i].attr ?? [])).forEach(([key, value]) => element[key] = value);   

            parentElement.appendChild(element);

            if (objectList[i].innerElem !== undefined) this.recursiveAdd(element, objectList[i].innerElem);
        }
    }
}

export default Tab;