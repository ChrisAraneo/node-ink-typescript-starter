#!/usr/bin/env node
import { render } from 'ink';
import meow from 'meow';
import React from 'react';

import App from './app.js';

const cli = meow(
  `
	Usage
	  $ node-ink-typescript-starter

	Options
		--name  Your name

	Examples
	  $ node-ink-typescript-starter --name=Jane
	  Hello, Jane
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
    },
  },
);

render(<App name={cli.flags.name} />);
