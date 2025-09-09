import Button from "../Button/Button.jsx";
import './Input.scss'
const Input = () => {
  return (
    <div className="input">
      <form
        className="input__form"
        action="/subscribe"
        method="post"
      >
        <input
          className="input__field"
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          required
        />
        <Button
          mode="transparent"
          label="SUBSCRIBE"
          style="input"
        />
      </form>
    </div>
  )
}

export default Input
