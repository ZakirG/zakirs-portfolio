const test = () => {
  const obj = null;
  const result = obj ?? 'default';
  console.log(`Node version: ${process.version}`);
  console.log(`Result: ${result}`);
};

test(); 