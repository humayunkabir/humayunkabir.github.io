import Button from '../components/Button';

export default function Buttons() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('color:', e.currentTarget.textContent);
  };

  return (
    <main className="grid grid-cols-1 gap-4">
      <div>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button size="sm">Small</Button>
      </div>
      <div className="grid grid-cols-8 gap-4">
        {[
          'gray',
          'red',
          'yellow',
          'green',
          'blue',
          'indigo',
          'purple',
          'pink',
        ].map((color) => (
          <Button key={color} color={color} ring className="rounded-full">
            {color}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-4">
        {[
          'gray',
          'red',
          'yellow',
          'green',
          'blue',
          'indigo',
          'purple',
          'pink',
        ].map((color) => (
          <Button key={color} color={color} gradient onClick={handleClick}>
            {color}
          </Button>
        ))}
      </div>
    </main>
  );
}
