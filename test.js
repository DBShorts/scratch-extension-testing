class Damian's Extension {
    getInfo() {
        return {
            "id": "dbextension",
            "name": "DBExtension",
            "blocks": [{
                    "opcode": "lines",
                    "blockType": "reporter",
                    "text": "line [line] of [text]",
                    "arguments": {
                        "line": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "text": {
                            "type": "string",
                            "defaultValue": "Hello\nWorld!"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    lines({line, text}) {
        return text.split("\n")[line];
    };
}
