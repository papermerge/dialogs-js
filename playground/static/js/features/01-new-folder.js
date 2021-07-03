window.addEventListener('DOMContentLoaded', () => {
    let new_folder_btn;


    new_folder_btn = document.querySelector(".new-folder-btn");
    Dialogs.urlconf.prefix = '/01-new-folder';

    new_folder_btn.addEventListener('click', () => {
        let new_folder_view = new Dialogs.NewFolderView({
            parent: undefined,
            options: {
                'el': document.querySelector('.new-folder-view')
            }
        });

        new_folder_view.show();
        new_folder_view.on("submit", (submit_data) => {
            // submitted data contains
            // submitted_data['title'] <- new folder title
            // submitted_data['parent'] <- parent object (has `id` attribute)
            console.log(submit_data);

        });
    });
});