import Button from "../Button/Button";

interface RegisterFormProps {
  submitForm: () => void;
}

const RegisterForm = ({ submitForm }: RegisterFormProps): JSX.Element => {
  return (
    <>
      <h2 className="form_title">Register for the event</h2>
      <form className="form" onSubmit={submitForm}>
        <label className="form_email-label" htmlFor="email">
          Email
          <input
            className="form_email-input"
            type="email"
            placeholder="Introduce your email"
            id="email"
            required
          />
          <span
            className="form__email-error form__email-error--visible"
            hidden={true}
          >
            Email is required
          </span>
        </label>
        <label className="form_password-label" htmlFor="password">
          Password
          <input
            className="form_password-input"
            type="password"
            placeholder="Introduce your password"
            id="password"
            required
          />
          <span
            className="form__password-error form__password-error--visible"
            hidden={true}
          >
            Password is required
          </span>
        </label>
        <label className="form_image-label" htmlFor="image">
          Image
          <input
            className="form_image-input"
            type="file"
            placeholder="Introduce an image"
            id="image"
            required
          />
          <span
            className="form__image-error form__image-error--visible"
            hidden={true}
          >
            Image is required
          </span>
        </label>
        <Button text="Sing up" />
        <span
          className="form__general-error form__general-error--visible"
          hidden={true}
        >
          Sorry, something went wrong
        </span>
      </form>
    </>
  );
};

export default RegisterForm;
