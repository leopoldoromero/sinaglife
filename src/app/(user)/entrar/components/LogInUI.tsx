'use client';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  Block,
  Button,
  Form,
  Input,
  Spinner,
  CustomLink,
  FormCard,
  PasswordInput,
} from '@components/index';
import { DefaultState, DispatchAction } from '@redux/store';
import { UserState } from '@redux/user/user.slice';
import { selectUserState } from '@redux/user/user.selectors';
import { isValidEmail, isValidPassword } from '@modules/user/domain/User';
import { routes } from '@shared/infrastructure/routes';
import { login } from '@redux/user/user.thunks';
import { navigate } from 'actions/navigate.actions';

export interface SingInFormikState {
  email: string;
  password: string;
}

interface Props {
    from: string;
}

const LogInUI: React.FC<Props> = ({from}) => {
  const redirectPath = from ?? '/';
  const { user, isLoading } = useSelector<DefaultState, UserState>(selectUserState);
  const dispatch = useDispatch<DispatchAction>();

  useEffect(() => {
    if (user?.isConfirmed) {
        navigate(redirectPath)
    };
  }, [user]);

  const initialState: SingInFormikState = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async (values) => {
      const userData = { email: values.email, password: values.password };
      dispatch(login({ userData, redirectPath }));
    },
    validate: (values: SingInFormikState) => {
      const errors: Partial<SingInFormikState> = {};
      if (!values.email) {
        errors.email = 'Email requerido';
      } else if (!isValidEmail(values.email)) {
        errors.email = 'Email invalido';
      }
      if (!values.password) {
        errors.password = 'Campo requerido';
      } else if (!isValidPassword(values.password)) {
        errors.password = 'Contraseña minimo 5 caracteres';
      }
      return errors;
    },
  });

  if (isLoading || formik.isSubmitting) return <Spinner top="25%" />;
  const isButtonDisabled = !formik.dirty || formik.isSubmitting || !formik.isValid;

  return (
    <Form
      onSubmit={formik.handleSubmit}
      display="flex"
      direction="column"
      justify="space-evenly"
      align="center"
      width="100%"
      pt="xl"
      pb="xl"
    >
      <FormCard>
        <Block width="100%" display="flex" direction="column" align="center" justify="center">
          <Block display="flex" width="100%" justify="center" pt="s" pb="s">
            <Text color="black" as="h4" weight="semiBold" fontSize="tiny" isUppercase>
              Entrar
            </Text>
          </Block>
          <Block display="flex" direction="column" width="100%" pt="s" pb="s">
            <Text as="h5" fontSize="tiny">
              Email
            </Text>
            <Input
              id='login_email_input'
              onChange={formik.handleChange}
              type="email"
              name="email"
              value={formik.values.email}
              variant="outlined"
              inputSize="m"
            />
            {formik.errors.email && (
              <Block display="flex" width="100%" justify="center">
                <Text fontSize="small" color="red">
                  {formik.errors.email}
                </Text>
              </Block>
            )}
          </Block>
          <Block display="flex" direction="column" width="100%" pt="s" pb="s">
            <Text as="h5" fontSize="tiny">
              Contraseña
            </Text>
            <PasswordInput id='login_password_input' onChange={formik.handleChange} name="password" value={formik.values.password} />
            {formik.errors.password && (
              <Block display="flex" width="100%" justify="center">
                <Text fontSize="small" color="red">
                  {formik.errors.password}
                </Text>
              </Block>
            )}
          </Block>
          <Block display="flex" direction="column" align="flex-end" width="100%">
            <Block display="flex" justify="center" pt="m" pb="m" width="100%">
              <Button
                text="Aceptar"
                type="submit"
                disabled={isButtonDisabled}
                variant="default"
                color="xLightSilver"
                size="m"
                fullWidth
                id="sign_in_accept"
              />
            </Block>
            <Block display="flex" width="100%" pt="m" pb="m">
              <CustomLink to={`${routes.GOOGLE_LOGIN}`} display="flex" width='100%'>
                <Button
                  text="Continuar con Google"
                  size="m"
                  variant="default"
                  color="xLightSilver"
                  icon="google"
                  iconSize="s"
                  fullWidth
                  id="sign_in_with_google"
                  onClick={() => null}
                />
              </CustomLink>
            </Block>
            <Block display="flex" justify="center" pb="s">
              <CustomLink fontSize="small" hoverColor="darkSilver" to={routes.FORGOT_PASSWORD} align="center">
                ¿Olvido su contraseña?
              </CustomLink>
            </Block>
            <Block display="flex" justify="center" pb="s">
              <CustomLink fontSize="small" hoverColor="darkSilver" to={routes.REGISTER} align="center">
                ¿Aun no tienes cuenta?
              </CustomLink>
            </Block>
          </Block>
        </Block>
      </FormCard>
    </Form>
  );
};

export default LogInUI;
