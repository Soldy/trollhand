'use strict';
//const nanoTest  = new (require('nanoTest')).test();
const fs = require('fs');
const _html_head_start = (
    '<!DOCTYPE html>'+
    '<html lang="en-US">'+
    '<head>'+
    '<meta charset="utf-8">'+
    '<title>test page</title>'+
    '<script>'
);
const _html_head_end = (
    '</script>'+
    '</head>'
);
const _html_body_start = (
    '<body>'
);
const _html_body_end = (
    '</body>'+
    '</html>'
);

const _html_div_empty = '<div></div>';
const _html_div_text = '<div>div_with_text</div>';
const _html_div_class_empty = '<div class="class_empty"></div>';
const _html_div_class_text = '<div class="class_text">class_with_text</div>';
const _html_div_id_empty = '<div class="id_empty"></div>';
const _html_div_id_text = '<div class="id_text">id_with_text</div>';

const _trollhand_script = fs.readFileSync('index.js').toString();
const _trollhand_script_mini = fs.readFileSync('minify.js').toString();

const _html = (
    _html_head_start+
    _trollhand_script+
    _html_head_end+
    _html_body_start+
    _html_div_empty+
    _html_div_text+
    _html_div_class_empty+
    _html_div_class_text+
    _html_div_id_empty+
    _html_div_id_text+
    _html_body_end
);
const _html_mini = (
    _html_head_start+
    _trollhand_script_mini+
    _html_head_end+
    _html_body_start+
    _html_div_empty+
    _html_div_text+
    _html_div_class_empty+
    _html_div_class_text+
    _html_div_id_empty+
    _html_div_id_text+
    _html_body_end
);

