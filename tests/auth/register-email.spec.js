import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register.page';
import { registerData } from '../../utils/testData';

test.describe('Register with Email', () => {

  // Skipped due to email verification not being sent in staging environment
  test.skip('Happy path - user can register with valid data', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.openRegisterWithEmail();
    await registerPage.fillRegisterForm(registerData.validUser);
    await registerPage.submit();

    await expect(
      page.getByText(/cek email|check your email/i)
    ).toBeVisible();
  });

  // Stable negative case: client-side validation
  test('Negative - cannot submit when required fields are empty', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.openRegisterWithEmail();
    await registerPage.submit();

    await expect(
      page.locator('text=Bagian ini wajib diisi').first()
    ).toBeVisible();
  });

  // Skipped due to unreliable backend validation on staging
  test.skip('Negative - email already exists shows error message', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.openRegisterWithEmail();
    await registerPage.fillRegisterForm(registerData.existingEmailUser);
    await registerPage.submit();

    await expect(
      page.getByText(/email telah terpakai/i)
    ).toBeVisible();
  });

});
