import { View } from  "@papermerge/symposium";
import { Modal } from "bootstrap";
import { renderman } from "../renderman";


class RenameView extends View {
    /**
     * Dialog to rename document, folder or node instance.
    */

    constructor({
        node,  // any object with `title` attribute
        options={'el': document.querySelector('.rename-view')}
    }={}) {
        /*
        parent is instance of Folder class whose implementation
        is irrelevent. The imporant part is that parent
        (i.e. Folder class instance) has `parent.id` attribute.
        */
        super(options);
        // The only requirement for node is to have `title` attribute
        this.node = node;
        this.options = options;

        // renders modal DOM
        this.render();

        // instanciate bootstrap's modal
        // initially modal is set to hidden
        this.modal = new Modal(this.el);
    }

    get default_template_name() {
        return "templates/rename.html";
    }

    get default_template_engine() {
        return renderman;
    }

    get default_context() {
        return {
            'node': this.node
        }
    }

    events() {
        let event_map = {
            'click .submit': 'on_submit'
        }

        return event_map;
    }

    on_submit(event) {
        let title;

        title = this.el.querySelector('[name=title]').value
        if (!title || title.trim().length == 0) {
            return;
        }

        this.node.title = title;

        this.trigger(
            "submit", {'node': this.node}
        );

        this.hide();
        this.undelegateEvents();
    }

    show() {
        this.modal.show();
    }

    hide() {
        this.modal.hide();
    }
}

export { RenameView };