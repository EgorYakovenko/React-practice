import { Field, Form, Formik } from 'formik';

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="query"></Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
