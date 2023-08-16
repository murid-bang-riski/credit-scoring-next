import Button from './components/button';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-500">
      <h1>Hello World</h1>
      <Button className="border-2 mt-2 rounded-lg p-2">Click me</Button>
    </div>
  );
}
