'use client';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Text, Block, Form, FormCard, Spinner, Input, Button } from '@components/index';
import { DispatchAction } from '@redux/store';
import { removeUser } from '@redux/user/user.thunks';
import { isValidEmail } from '@modules/user/domain/User';

export interface DropOutFormikState {
  email: string;
}

const DropOutUI = function () {
  const dispatch = useDispatch<DispatchAction>();
  const initialState: DropOutFormikState = {
    email: '',
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async (values) => {
      dispatch(removeUser({ userData: { email: values.email }, formik }));
    },
    validate: (values: DropOutFormikState) => {
      const errors: Partial<DropOutFormikState> = {};
      if (!values.email) {
        errors.email = 'Email requerido';
      } else if (!isValidEmail(values.email)) {
        errors.email = 'Email invalido';
      }
      return errors;
    },
  });

  if (formik.isSubmitting) {
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
              Darse de baja
            </Text>
          </Block>
          <Block display="flex" direction="column" width="100%" pt="s" pb="s">
            <Text as="h5" fontSize="tiny">
              Email
            </Text>
            <Input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
          <Block display="flex" justify="center" mt="m" pt="s" pb="s" width="100%">
            <Button
              text="Enviar"
              type="submit"
              disabled={isButtonDisabled}
              variant="default"
              color="xLightSilver"
              size="m"
              fullWidth
              id="drop_out_send"
            />
          </Block>
        </Block>
      </FormCard>
    </Form>
  );
};

export default DropOutUI;
