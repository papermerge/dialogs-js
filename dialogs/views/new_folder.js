import { View } from  "@papermerge/symposium";
import { Modal } from "bootstrap";
import { renderman } from "../renderman";


class NewFolderView extends View {

    constructor({parent, options}) {
        /*
        parent is instance of Folder class whose implementation
        is irrelevent. The imporant part is that parent
        (i.e. Folder class instance) has `parent.id` attribute.
        */
        super(options);
        this.parent = parent;
        this.options = options;

        this.render();

        // instanciate bootstrap's modal
        // initially modal is set to hidden
        this.modal = new Modal(this.el);
    }

    get default_template_name() {
        return "templates/new_folder.html";
    }

    get default_template_engine() {
        return renderman;
    }

    events() {
        let event_map = {
            "click .close": "on_close",
            "submit": "on_submit_form",
            "click .create": "on_create",
        }

        return event_map;
    }

    on_close(events) {

    }

    on_submit_form(event) {
        event.preventDefault();
        this.on_create(event);
    }

    on_create(event) {
        let title;

        title = this.el.querySelector('[name=title]').value
        if (!title || title.trim().length == 0) {
            return;
        }

        this.trigger(
            "submit",
            {'title': title, 'parent': this.parent}
        );
    }

    show() {
        this.modal.show();
    }
}

export { NewFolderView };