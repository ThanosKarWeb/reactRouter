export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Career not found");
  }

  return res.json();
};
