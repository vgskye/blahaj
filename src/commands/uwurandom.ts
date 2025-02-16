import type { Command } from './_types';

import { Uwurandom } from 'uwurandom-node';

export const uwurandomCommand: Command = async (i) => {
  const length = i.options.getInteger('length', true);

  let uwurandom = Uwurandom.new();
  let result = '';

  for (let i = 0; i < length; i++) {
    result += uwurandom.generate();
  }

  await i.reply({
    content: result,
  });
};
