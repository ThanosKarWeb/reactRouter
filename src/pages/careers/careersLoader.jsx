export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error(
      "Could not fetch careers: $ json-server -p 4000 -w ./data/db.json"
    );
  }

  return res.json();
};
