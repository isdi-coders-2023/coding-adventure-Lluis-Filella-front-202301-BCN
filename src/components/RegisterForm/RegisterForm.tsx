import Button from "../Button/Button";

interface RegisterFormProps {
  submitForm: () => void;
}

const RegisterForm = ({ submitForm }: RegisterFormProps): JSX.Element => {
  return (
    <form className="form" onSubmit={submitForm}>
      <h2 className="form__title">Register for the event</h2>
      <label className="form__label" htmlFor="email">
        Email
        <input
          className="form_input"
          type="email"
          placeholder="Introduce your email"
          id="email"
          name="email"
          required
        />
        <span className="form__error form__error--visible" hidden>
          Email is required
        </span>
      </label>
      <label className="form__label" htmlFor="password">
        Password
        <input
          className="form__input"
          type="password"
          placeholder="Introduce your password"
          id="password"
          name="password"
          required
        />
        <span className="form__error form__error--visible" hidden>
          Password is required
        </span>
      </label>
      <label className="form__label" htmlFor="image">
        Image
        <input
          className="form__input"
          type="file"
          placeholder="Introduce an image"
          id="image"
          name="image"
          required
        />
        <span className="form__error form__error--visible" hidden>
          Image is required
        </span>
      </label>
      <Button text="Sing up" />
      <span className="form__error form__error--visible" hidden>
        Sorry, something went wrong
      </span>
    </form>
  );
};

export default RegisterForm;
