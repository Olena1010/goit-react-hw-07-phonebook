import React from "react";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form, FormField, Field, ErrorMessage, SubmitButton } from "./BookForm.styled"
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


const BookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const BookForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={BookSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.find(contact =>
            contact.name.toLowerCase().includes(values.name.toLowerCase())
          )
        ) {
          window.alert(`${values.name} is already in contacts!`);
          closeModal();
        } else {
          dispatch(addContact(values));
          actions.resetForm();
          closeModal();
        }
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" placeholder="Enter the name of the contact" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field
            name="number"
            placeholder="Enter the contact's phone number"
            type="tel"
          />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};

