window.addEventListener('DOMContentLoaded', () => {
    let new_folder_btn;

    new_folder_btn = document.querySelector(".new-folder-btn");
    Dialogs.urlconf.prefix = '/02-default-template';

    new_folder_btn.addEventListener('click', () => {
        let new_folder_view;

        // notice empty Dialogs.NewFolderView's empty argument
        new_folder_view = new Dialogs.NewFolderView();

        new_folder_view.show();
        new_folder_view.on("submit", (submit_data) => {
            // submitted data contains
            // submitted_data['title'] <- new folder title
            // submitted_data['parent'] <- parent object (has `id` attribute)
            console.log(submit_data);
        });
    });
});