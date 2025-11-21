// 1. mark as client component
'use client';

const Actions2 = () => {
  const formAction = (formData: FormData) => {
    // 3. get input value from formData
    alert('You typed:' + formData.get('name'));
  };

  return (
    // 2. connect action to form
    <form action={formAction}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Actions2;
