import { test as setup } from '@playwright/test';

// Define where the "keys" will be stored
const superAdminFile = '.auth/superadmin.json';
const adminFile = '.auth/admin.json';
const hrFile = '.auth/hr.json';

setup('authenticate as superadmin', async ({ request }) => {
  await request.post(`${process.env.API_URL}/login`, {
    data: { username: process.env.SUPERADMIN_USER, password: process.env.SUPERADMIN_PASS }
  });
  await request.storageState({ path: superAdminFile });
});

setup('authenticate as admin', async ({ request }) => {
  await request.post(`${process.env.API_URL}/login`, {
    data: { username: process.env.ADMIN_USER, password: process.env.ADMIN_PASS }
  });
  await request.storageState({ path: adminFile });
});

setup('authenticate as hr', async ({ request }) => {
  await request.post(`${process.env.API_URL}/login`, {
    data: { username: process.env.HR_USER, password: process.env.HR_PASS }
  });
  await request.storageState({ path: hrFile });
});