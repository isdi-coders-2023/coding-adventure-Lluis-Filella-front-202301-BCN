import styled from "styled-components";

const RegisterFormStyles = styled.form`
  width: 100%;
  height: 100%;
  padding: 18px;

  .form {
    &__title {
      color: var(--main-detail-color);
      font-family: var(--secondary-font);
      font-size: 1.25rem;
      padding: 15px 0;
    }

    &__text {
      font-size: 1rem;
      padding: 10px 0;
      display: block;
    }

    &__field {
      display: block;
      width: 100%;
      height: 100%;
      background: var(--main-input-color);
      border: 1px solid var(--main-input-color);
      border-radius: 8px;
      padding: 10px;
    }

    &__error {
      display: block;
      height: 40px;
      padding: 10px 0;
      color: var(--error-color);

      &:last-child {
        text-align: center;
      }
    }

    &__button {
      width: 100%;
      height: 40px;
    }
  }

  @media (min-width: 987px) {
    .form {
      width: 100%;
      height: 100%;
      padding: 100px;
    }

    .form {
      &__title {
        color: var(--main-detail-color);
        font-size: 2.5rem;
        padding: 25px 0;
      }

      &__field {
        height: 57px;
        width: 100%;
      }

      &__button {
        height: 57px;
      }
    }
  }
`;

export default RegisterFormStyles;
