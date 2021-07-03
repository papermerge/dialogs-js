import new_folder_template from "./new_folder.html";
import rename_template from "./rename.html";

// maps template_name to the actual template content
let templates_map = new Map();

templates_map.set('new_folder.html', new_folder_template);
templates_map.set('rename.html', rename_template);


export { templates_map };


