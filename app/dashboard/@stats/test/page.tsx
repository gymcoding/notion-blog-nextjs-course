export default async function TestPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  throw new Error('Test error');
  // return <div>Stats TestPage</div>;
}
