/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Actions make working with forms a lot easier!
// Actions are functions that are called when the form is submitted
// These functions are connected to the action prop of form html element
// Actions can be executed on the server or the client
// From React 19, actions are supported on server or client
const myAction = (_formData: FormData) => {};

const MyForm = () => {
  return <form action={myAction} method="post" />;
};
