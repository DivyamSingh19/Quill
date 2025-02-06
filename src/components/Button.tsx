
const Button = ({text1}) => {
  return (
    <button className="bg-black  border rounded-4xl">
      <p className="text-white">{text1 || "your basic bitch"}</p>
    </button>
  )
}

export default Button
