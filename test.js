class DamianExtension {
    getInfo() {
        return {
            id: 'dbextension',
            name: 'DBExtension',
            blocks: [
                {
                    opcode: 'lines',
                    blockType: BlockType.REPORTER,
                    text: 'line [LINE] of [TEXT_STRING]',
                    arguments: {
                        LINE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '2'
                        },
                        TEXT_STRING: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello\nWorld!;
                        }
                    }
                },
            }],
    };
    lines({LINE, TEXT_STRING}) {
        return TEXT_STRING.split("\n")[LINE];
    };
}
