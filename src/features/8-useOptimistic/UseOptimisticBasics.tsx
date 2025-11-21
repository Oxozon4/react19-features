import { useOptimistic, useState } from 'react';

const ChangeName = ({
  updateName,
}: {
  updateName: (param1: string) => Promise<string>;
}) => {
  const [name, setName] = useState<string>('Tomasz');
  const [optimisticName, setOptimisticName] = useOptimistic<string>(name);

  const submitAction = async (formData: FormData) => {
    const newName = formData.get('name') as string;
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    setName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input type="text" name="name" />
      </p>
    </form>
  );
};

export default ChangeName;
