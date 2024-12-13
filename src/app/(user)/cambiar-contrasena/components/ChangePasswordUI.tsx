'use client';
import { useEffect } from 'react';
import { FormikValues, useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultState, DispatchAction } from '@redux/store';
import { UserState } from '@redux/user/user.slice';
import { selectUserState } from '@redux/user/user.selectors';
import { navigate } from 'actions/navigate.actions';
import { updateUser } from '@redux/user/user.thunks';
import { isValidPassword } from '@modules/user/domain/User';
import { Block, Button, Form, FormCard, Input, Spinner, Text } from '@components/index';

export interface ChangePasswordFormikState {
  password: string;
  newPassword: string;
}

const ChangePassword = function () {
  const dispatch = useDispatch<DispatchAction>();
  const { user, isLoading } = useSelector<DefaultState, UserState>(selectUserState);
  const initialState: ChangePasswordFormikState = {
    password: '',
    newPassword: '',
  };

  useEffect(() => {
    if (!user?.isConfirmed) {
        navigate('/')
    };
  }, [user]);

  const formik = useFormik<ChangePasswordFormikState>({
    initialValues: initialState,
    onSubmit: async (values) => {
      const { password, newPassword } = values;
      dispatch(
        updateUser({
          userData: {
            password,
            newPassword,
          },
          formik,
        }),
      );
    },

    validate: (values: ChangePasswordFormikState) => {
      const MIN_REQUIRED_LENGTH = 5;
      const MIN_LENGTH_ERROR_MESSAGE = `Contraseña minimo ${MIN_REQUIRED_LENGTH} caracteres`;
      const ERROR_MESSAGES: { [val in keyof FormikValues]: { [key in string]: string } } = {
        [values.password]: {
          REQUIRED_FIELD: 'Campo requerido',
          MIN_LENGTH: MIN_LENGTH_ERROR_MESSAGE,
        },
        [values.newPassword]: {
          REQUIRED_FIELD: 'Campo requerido',
          MIN_LENGTH: MIN_LENGTH_ERROR_MESSAGE,
          MATCH_ERROR: 'Las contraseñas no pueden coincidir',
        },
      };
      const errors: Partial<ChangePasswordFormikState> = {};

      if (!values.password) {
        errors.password = ERROR_MESSAGES[values.password].REQUIRED_FIELD;
      } else if (!isValidPassword(values.password)) {
        errors.password = ERROR_MESSAGES[values.password].MIN_LENGTH_ERROR_MESSAGE;
      }

      if (!values.newPassword) {
        errors.newPassword = ERROR_MESSAGES[values.newPassword].REQUIRED_FIELD;
      }
      if (!isValidPassword(values.newPassword)) {
        errors.newPassword = ERROR_MESSAGES[values.newPassword].MIN_LENGTH_ERROR_MESSAGE;
      } else if (values.password === values.newPassword) {
        errors.newPassword = ERROR_MESSAGES[values.newPassword].MATCH_ERROR;
      }

      return errors;
    },
  });

  if (formik.isSubmitting || isLoading) {
    return <Spinner top="25%" />;
  }
  const isButtonDisabled = !formik.dirty || formik.isSubmitting || !formik.isValid;
  const formData = (formik: FormikValues) => [
    {
      error: formik.errors.password,
      type: 'password',
      onChange: formik.handleChange,
      name: 'password',
      value: formik.values.password,
      label: 'Contraseña',
    },
    {
      error: formik.errors.newPassword,
      type: 'password',
      onChange: formik.handleChange,
      name: 'newPassword',
      value: formik.values.newPassword,
      label: 'Contraseña nueva',
    },
  ];
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
              Cambio de contraseña
            </Text>
          </Block>
          {formData(formik).map((item, index) => (
            <Block display="flex" direction="column" width="100%" pt="s" pb="s" key={index}>
              <Text as="h5" fontSize="tiny">
                {item.label}
              </Text>
              <Input
                key={index}
                onChange={item.onChange}
                type="text"
                name={item.name}
                value={item.value}
                variant="outlined"
                inputSize="m"
                data-testid={item.name}
              />
              {item.error && (
                <Block display="flex" width="100%" justify="center">
                  <Text fontSize="small" color="red">
                    {item.error}
                  </Text>
                </Block>
              )}
            </Block>
          ))}
          <Block display="flex" justify="center" mt="m" pt="s" pb="s" width="100%">
            <Button
              text="Enviar"
              type="submit"
              disabled={isButtonDisabled}
              variant="default"
              color="xLightSilver"
              size="m"
              fullWidth
              id="change_password_send"
            />
          </Block>
        </Block>
      </FormCard>
    </Form>
  );
};

export default ChangePassword;
