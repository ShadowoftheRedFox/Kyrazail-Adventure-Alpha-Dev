class GameMenuBuilder {
    /**
     * @param {GameMenuBuilderOptions} options 
     */
    constructor(options = {}, skipValidation = false) {
        this.setup(options, skipValidation);
    }

    /**
     * @param {GameMenuBuilderOptions} options 
     * @param {boolean} skipValidation
     */
    setup(options, skipValidation) {
        this.positionY = options.positionY || "center";
        this.positionX = options.positionX || "center";

        this.name = (options.name ? options.name.toString().trim() : (function () { throw new ReferenceError(`You must pass a name for the menu.`); })());
        this.fields = (skipValidation == true ? options.fields : this.validateFields(options.fields));

        this.menuFocused = options.menuFocused || 0;

        this.x = options.x || 0;
        this.y = options.y || 0;
        this.w = options.w || ConfigConst.MAINCONTAINER.offsetWidth;
        this.h = options.h || ConfigConst.MAINCONTAINER.offsetHeight;
    }

    /**
     * @param {GameMenuBuilderOptionsField[]} fields 
     */
    validateFields(fields) {
        fields.forEach((field, idx) => {
            if (!field.name) throw new ReferenceError(`The field ${idx} must have a name.`);
            field.name = field.name.toString().trim();
            if (!field.focused || typeof field.focused != "boolean") field.focused = false;
            if (!["function" | "menu"].includes(field.value)) throw new TypeError(`The field ${idk} must have a valid value.`);
            if (field.value == "function" && (!field.function || typeof field.function != "function")) throw new TypeError(`The field ${idk} must have a valid function.`);
            if (field.value == "menu" && (!field.menu || Array.isArray(field.menu))) throw new TypeError(`The field ${idk} must have a valid menu.`);
            if (field.value == "menu") field.menu = this.validateFields(field.menu);
        });
        return fields;
    }
}