'use client';
import { useEffect } from 'react';
import {  useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Block, Button, Form, FormCard, Input, Spinner, PasswordInput, CustomLink } from '@components/index';
import { DefaultState, DispatchAction } from '@redux/store';
import { UserState } from '@redux/user/user.slice';
import { selectUserState } from '@redux/user/user.selectors';
import { navigate } from 'actions/navigate.actions';
import { isValidEmail, isValidPassword } from '@modules/user/domain/User';
import { DateHelper } from '@shared/helpers';
import { CreateUserInput } from '@modules/user/domain/UserRepository';
import { createUser } from '@redux/user/user.thunks';
import { routes } from '@shared/infrastructure/routes';

export interface CreateUserFormikState {
  name: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
  birthDate: string;
}

const RegisterUserUI = () => {
  const { user, isLoading } = useSelector<DefaultState, UserState>(selectUserState);
  const dispatch = useDispatch<DispatchAction>();
  const MIN_REQUIRED_AGE = 18;
  
  useEffect(() => {
      if (user?.isConfirmed) {
          navigate('/')
      };
    }, [user]);

  const initialState: CreateUserFormikState = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    birthDate: '',
  };

  function validator(values: CreateUserFormikState) {
    const errors: Partial<CreateUserFormikState> = {};
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

    if (values.password !== values.password2) {
      errors.password = 'Las contraseñas deben coincidir';
    }
    if (values.birthDate === '' || DateHelper.diff(new Date(), values.birthDate, 'years') < MIN_REQUIRED_AGE) {
      errors.birthDate = 'Debes ser mayor de edad';
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async (values) => {
      const userData: CreateUserInput = {
        name: values.name,
        lastName: values.lastName,
        birthDate: values.birthDate,
        email: values.email,
        password: values.password,
      };
      dispatch(createUser({ userData, formik }));
    },
    validate: validator,
  });

  if (formik.isSubmitting || isLoading) {
    return <Spinner top="25%" />;
  }

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
          <Text as="h4" weight="semiBold" fontSize="tiny" isUppercase>
            Registrarse
          </Text>
        </Block>
        <Block display="flex" direction="column" width="100%" pt="s" pb="s">
          <Text as="h5" fontSize="tiny">
            Nombre
          </Text>
          <Input
            onChange={formik.handleChange}
            type="text"
            name="name"
            value={formik.values.name}
            variant="outlined"
            inputSize="m"
          />
          {formik.errors.name && (
            <Block display="flex" width="100%" justify="center">
              <Text fontSize="small" color="red">
                {formik.errors.name as string}
              </Text>
            </Block>
          )}
        </Block>
        <Block display="flex" direction="column" width="100%" pt="s" pb="s">
          <Text as="h5" fontSize="tiny">
            Apellido
          </Text>
          <Input
            onChange={formik.handleChange}
            type="text"
            name="lastName"
            value={formik.values.lastName}
            variant="outlined"
            inputSize="m"
          />
          {formik.errors.lastName && (
            <Block display="flex" width="100%" justify="center">
              <Text fontSize="small" color="red">
                {formik.errors.lastName as string}
              </Text>
            </Block>
          )}
        </Block>
        <Block display="flex" direction="column" width="100%" pt="s" pb="s">
          <Text as="h5" fontSize="tiny">
            Fecha de nacimiento
          </Text>
          <Input
            onChange={formik.handleChange}
            type="date"
            name="birthDate"
            value={formik.values.birthDate}
            variant="outlined"
            inputSize="m"
          />
          {formik.errors.birthDate && (
            <Block display="flex" width="100%" justify="center">
              <Text fontSize="small" color="red">
                {formik.errors.birthDate as string}
              </Text>
            </Block>
          )}
        </Block>
        <Block display="flex" direction="column" width="100%" pt="s" pb="s">
          <Text as="h5" fontSize="tiny">
            Email
          </Text>
          <Input
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
                {formik.errors.email as string}
              </Text>
            </Block>
          )}
        </Block>
        <Block display="flex" direction="column" width="100%" pt="s" pb="s">
          <Text as="h5" fontSize="tiny">
            Contraseña
          </Text>
          <PasswordInput
            btn_id={`show_password_password`}
            onChange={formik.handleChange}
            name="password"
            value={formik.values.password}
          />
          {formik.errors.password && (
            <Block display="flex" width="100%" justify="center">
              <Text fontSize="small" color="red">
                {formik.errors.password as string}
              </Text>
            </Block>
          )}
        </Block>
        <Block display="flex" direction="column" width="100%" pt="s" pb="s">
          <Text as="h5" fontSize="tiny">
            Confirmar contraseña
          </Text>
          <PasswordInput
            btn_id={`show_password_password2`}
            onChange={formik.handleChange}
            name="password2"
            value={formik.values.password2}
          />
          {formik.errors.password2 && (
            <Block display="flex" width="100%" justify="center">
              <Text fontSize="small" color="red">
                {formik.errors.password2 as string}
              </Text>
            </Block>
          )}
        </Block>
        <Block display="flex" direction="column" align="flex-end" width="100%">
          <Block display="flex" direction="column" justify="center" align="center" pb="s">
            <Text fontSize="tiny" as="h6" weight="semiBold" color="black">
              Al registrarte, aceptas las politicas de privacidad y terminos de uso.
            </Text>
            <CustomLink fontSize="medium" hoverColor="darkSilver" to={routes.PRIVACY_POLICY} align="center">
              Más Información
            </CustomLink>
          </Block>
          <Block display="flex" justify="center" pt="m" pb="m" width="100%">
            <Button
              text="Crear"
              type="submit"
              disabled={isButtonDisabled}
              variant="default"
              color="xLightSilver"
              size="m"
              fullWidth
              id="register_user_send"
            />
          </Block>
        </Block>
      </Block>
      <CustomLink to={`${routes.GOOGLE_LOGIN}`} display="flex" width="100%">
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
    </FormCard>
  </Form>
  )
};

export default RegisterUserUI;
