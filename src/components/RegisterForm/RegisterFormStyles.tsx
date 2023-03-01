import styled from "styled-components";

const RegisterFormStyles = styled.form`
  width: 337px;
  height: 360px;

  .form {
    &__title {
      color: var(--main-detail-color);
      font-family: var(--secondary-font);
      font-size: 20;
      padding: 15px 0;
    }
    &__label {
      padding: 10px 0;
      display: block;
    }
    &__input {
      display: block;
      width: 325px;
      height: 40px;
      background: var(--main-input-color);
      border: 1px solid var(--main-input-color);
      border-radius: 8px;
      padding: 10px;
    }

    &__error {
      display: block;
      padding: 10px 0;
      color: var(--error-color);

      &:last-child {
        text-align: center;
      }
    }

    &__button {
      margin: 50px 0;
    }
  }

  @media (min-width: 987px) {
    width: 836px;
    height: 617px;

    .form {
      &__title {
        color: var(--main-detail-color);
        font-size: 40px;
      }
      &__label {
      }
      &__input {
      }

      &__error {
      }
    }
  }
`;

export default RegisterFormStyles;
