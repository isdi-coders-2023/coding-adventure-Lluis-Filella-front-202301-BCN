import Button from "../Button/Button";
import RegisterFormStyles from "./RegisterFormStyles";

interface RegisterFormProps {
  submitForm: () => void;
  isFilled: boolean;
}

const RegisterForm = ({
  isFilled,
  submitForm,
}: RegisterFormProps): JSX.Element => {
  return (
    <RegisterFormStyles className="form" onSubmit={submitForm}>
      <h2 className="form__title">Register for the event</h2>
      <label className="form__text" htmlFor="email">
        Email
      </label>
      <input
        className="form__field"
        type="email"
        placeholder="Introduce your email"
        id="email"
        name="email"
        required
      />
      <span className="form__error form__error--visible">
        {isFilled ? "Email is required" : ""}
      </span>

      <label className="form__text" htmlFor="password">
        Password
      </label>
      <input
        className="form__field"
        type="password"
        placeholder="Introduce your password"
        id="password"
        name="password"
        required
      />
      <span className="form__error">
        {isFilled ? "Password is required" : ""}
      </span>

      <label className="form__text" htmlFor="image">
        Image
      </label>
      <input
        className="form__field"
        type="file"
        placeholder="Introduce an image"
        id="image"
        name="image"
        required
      />

      <span className="form__error">{isFilled ? "Image is required" : ""}</span>

      <Button text="Sing up" className="form__button" />
      <span className="form__error">
        {isFilled ? "Sorry, something went wrong" : ""}
      </span>
    </RegisterFormStyles>
  );
};

export default RegisterForm;
