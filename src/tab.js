class Tab {
    #content

    constructor() {
        this.#content = this.init();
    }

    init() {}

    changeContent(parentElement) {
        parentElement.replaceChildren(this.#content);
    }
}

export default Tab;