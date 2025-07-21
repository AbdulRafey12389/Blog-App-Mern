import { redirect } from 'react-router-dom';
import { registerUser } from '@/api/auth';

const signUpAction = async function ({ request }) {
  const formdata = await request.formData();
  const name = formdata.get('name');
  const email = formdata.get('email');
  const password = formdata.get('password');
  const confirmPassword = formdata.get('confirmPassword');

  if (!name || !email || !password || !confirmPassword)
    return 'All fields are reuired.';

  if (password !== confirmPassword)
    return 'Password or comfirmPassword must be some.';

  const data = Object.fromEntries(formdata.entries());

  delete data.confirmPassword;

  try {
    const response = await registerUser(data);

    if (response.success == false) {
      return response.message;
    } else {
      localStorage.setItem('verify_email', email);
      return redirect('/verifyemail');
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export default signUpAction;
