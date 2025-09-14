const Star = ({ fill = 0 }) => {
  return (
    <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="#FFC700" />
          <stop offset="50%" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>
       <path
        d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
        fill={
          fill === 1
            ? "#FFC700"
            : fill === 0.5
            ? "url(#halfGrad)"
            : "#E0E0E0"
        }
      />
    </svg>
  )
}

const Rating = ({rating}) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div style={{display: "flex", gap: "2px"}}>
      {stars.map((star) => {
        let fill = 0
        if (rating >= star) {
          fill = 1
        } else if (rating + 0.5 >= star) {
          fill = 0.5
        }
        return <Star key={star} fill={fill}/>
      })}
    </div>
  )
}

export default Rating