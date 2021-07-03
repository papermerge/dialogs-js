window.addEventListener('DOMContentLoaded', () => {
    let rename_btn,
        nodes;

    rename_btn = document.querySelector(".rename-btn");
    nodes = document.querySelector('.nodes');

    Dialogs.urlconf.prefix = '/04-rename';

    rename_btn.addEventListener('click', () => {
        let rename_view,
            node = {},
            node_sel;

        node_sel = document.querySelector('.node-select')
        if (!node_sel) {
            console.error("Node select not found")
            return;
        } else {
            node['title'] = node_sel.value;
        }

        rename_view = new Dialogs.RenameView({node: node});

        rename_view.show();
        rename_view.on("submit", (submit_data) => {
            let div, str;
            // submitted data contains
            // submitted_data['title'] <- node's title
            console.log(submit_data);
            if (nodes) {
                str = `Node renamed to title=${submit_data['node']['title']}`;
                div = document.createElement("div");
                div.innerHTML = str;
                nodes.appendChild(div);
            } else {
                console.error("div.nodes element was not found");
            }
        });
    });
});