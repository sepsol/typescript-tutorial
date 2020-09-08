const typeAliasZero = (user: { name: string; age: number }) => {
  console.log(user);
};

// Type Alias
type objNameAge = { name: string; age: number };

const typeAliasOne = (user: objNameAge) => {
  console.log(`one: ${user}`);
};

const typeAliasTwo = (user: objNameAge) => {
  console.log(`two: ${user}`);
};
