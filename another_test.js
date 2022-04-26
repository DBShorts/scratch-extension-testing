class LineBreaker {
  getInfo () {
    return {
      id: 'linebreaker',
      name: 'Line Separator',
      blocks: [
        {
          opcode: 'LineSeparate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Line [NUMBER] of [TEXT]',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'what\nhow'
            }
          }
        }
      ]
    };
  }

  get (args) {
    return args.TEXT.split("\n")[args.NUMBER]
  }
}

Scratch.extensions.register(new LineBreaker());
