import { useFormState } from 'react-dom';

type MyFormState = null | 'Added to cart!' | 'Out of stock!';

const addToCard = (_prevState: MyFormState, formData?: FormData) => {
  const productId = formData?.get('productId');
  return productId === '1' ? 'Added to cart!' : 'Out of stock!';
};

const App = () => {
  const [message, formAction] = useFormState<MyFormState>(addToCard, null);

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value="1" />
      <button type="submit">Add to cart</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default App;
