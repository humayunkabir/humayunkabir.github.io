import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Hire = () => {
  const [valid, setValid] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setValid(true);
  };

  const isValid = (v) => (v === null ? 'indigo' : v ? 'green' : 'red');

  return (
    <div>
      <h1>Got a project for us?</h1>
      <p>
        We help brands and platforms turn big ideas into beautiful digital
        products and experiences.
      </p>
      <form className="flex" onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          label="Enter Name"
          id="name"
          horizontal
          size="sm"
          ring
          color={isValid(valid)}
        />
        <Button size="sm" ring outline className="ml-4" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Hire;
