window.addEventListener('DOMContentLoaded', () => {
    let new_folder_btn,
        nodes;

    new_folder_btn = document.querySelector(".new-folder-btn");
    nodes = document.querySelector('.nodes');

    Dialogs.urlconf.prefix = '/03-parent';

    new_folder_btn.addEventListener('click', () => {
        let new_folder_view,
            parent = {},
            parent_sel;

        parent_sel = document.querySelector('.parent-select')
        if (!parent_sel) {
            console.error("Parent select not found")
            return;
        } else {
            parent['id'] = parent_sel.value;
        }

        // notice empty Dialogs.NewFolderView's empty argument
        new_folder_view = new Dialogs.NewFolderView({parent: parent});

        new_folder_view.show();
        new_folder_view.on("submit", (submit_data) => {
            let div, str;
            // submitted data contains
            // submitted_data['title'] <- new folder title
            // submitted_data['parent'] <- parent object (has `id` attribute)
            console.log(submit_data);
            if (nodes) {
                str = `Folder title=${submit_data['title']}, id=${submit_data['parent']['id']}`;
                div = document.createElement("div");
                div.innerHTML = str;
                nodes.appendChild(div);
            } else {
                console.error("div.nodes element was not found");
            }
        });
    });
});