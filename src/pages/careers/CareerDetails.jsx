import { useLoaderData } from "react-router-dom";

function CareerDetails() {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          praesentium dicta sint at cupiditate totam exercitationem et velit,
          nisi reiciendis ratione delectus labore nobis expedita laudantium
          consequatur illo consectetur? Quia, maiores enim. Dolores minima amet
          aperiam placeat delectus, omnis exercitationem?
        </p>
      </div>
    </div>
  );
}

export default CareerDetails;
