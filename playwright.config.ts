import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  projects: [
    // --- STEP 1: SETUP ALL ROLES ---
    { name: 'setup', testMatch: /auth\.setup\.ts/ },

    // --- STEP 2: LOGIN UI TEST (CLEAN) ---
    {
      name: 'login-ui',
      testMatch: /login\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // --- STEP 3: ROLE-SPECIFIC TESTS ---
    {
      name: 'superadmin-tests',
      testMatch: /tests\/superadmin\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], storageState: '.auth/superadmin.json' },
      dependencies: ['setup'],
    },
    {
      name: 'admin-tests',
      testMatch: /tests\/admin\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], storageState: '.auth/admin.json' },
      dependencies: ['setup'],
    },
    {
      name: 'hr-tests',
      testMatch: /tests\/hr\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], storageState: '.auth/hr.json' },
      dependencies: ['setup'],
    },
  ],
});