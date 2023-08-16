import { Button } from './components/Button';

export default async function Index() {
  return (
    <div>
      <h1>Test</h1>
      <Button
        className="flex bg-red-400 justify-center w-1/5 p-3 mt-8 rounded-md border bg-primary-400 text-white font-bold"
        href=""
      >
        Test
      </Button>
    </div>
  );
}
