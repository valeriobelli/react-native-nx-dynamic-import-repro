import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run example:serve',
        production: 'nx run example:preview',
      },
      ciWebServerCommand: 'nx run example:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
