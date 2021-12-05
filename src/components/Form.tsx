const Form = () => {
  return (
      <form>
        <input
            type="text"
            name="city"
            placeholder="Name of city"
        />
        <button type="submit">Get Weather</button>
      </form>
  );
};

export default Form;