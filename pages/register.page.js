export class RegisterPage {
  constructor(page) {
    this.page = page;

    this.registerWithEmailBtn = page.getByText('Daftar dengan email');
    this.firstNameInput = page.getByLabel('Nama depan');
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.registerBtn = page.getByRole('button', { name: 'Daftar' });
  }

  async goto() {
    await this.page.goto('https://employers.staging.glints.id');
  }

  async openRegisterWithEmail() {
    await this.registerWithEmailBtn.click();
  }

  async fillRegisterForm({ firstName, email, password }) {
    await this.firstNameInput.fill(firstName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.registerBtn.click();
  }
}
