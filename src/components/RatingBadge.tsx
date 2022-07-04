type RatingBadgeProps = {
  rating: number;
};

const getColor = (rating: number) => {
  if (rating < 5) {
    return "red";
  } else if (rating < 7) {
    return "yellow";
  }

  return "green";
};

const RatingBadge = ({ rating }: RatingBadgeProps) => {
  const color = getColor(rating);

  return (
    <>
      <h3>Average Rating</h3>
      <div className={`ratingBadge ${color}`}>{rating}</div>
    </>
  );
};

export default RatingBadge;
