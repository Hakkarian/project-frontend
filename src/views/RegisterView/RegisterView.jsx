import { CenterCss, FormCss, TitleCss } from 'components/App/App.styled';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import fields from 'shared/utils/fields';
import { useForm } from 'shared/utils/hooks';
import initialState from 'shared/utils/initialState';
import {
  AuthButtonCss,
  InputCss,
} from 'shared/components/Password/Password.styled';

const RegisterView = () => {
  const handleSignup = data => {
    dispatch(signup(data));
  };

  const { state, handleChange, handleSubmit } = useForm(
    initialState,
    handleSignup
  );
  const { name, email, password } = state;

  const dispatch = useDispatch();

  return (
    <CenterCss>
      <FormCss onSubmit={handleSubmit}>
        <TitleCss>Register</TitleCss>
        <InputCss {...fields.name} value={name} onChange={handleChange} />
        <InputCss {...fields.email} value={email} onChange={handleChange} />
        <InputCss
          {...fields.password}
          value={password}
          onChange={handleChange}
        />
        {/* <Password password={password} handleChange={handleChange} /> */}
        <AuthButtonCss>Sign up!</AuthButtonCss>
      </FormCss>
    </CenterCss>
  );
};

export default RegisterView;
