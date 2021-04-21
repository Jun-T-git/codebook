import SignUpTemplate from "../components/templates/signUpTemplate";
import Header from "../components/organisms/header";

const SignUpPage = () => (
  <>
    <Header isLogIn={false} />
    <SignUpTemplate />
  </>
);

export default SignUpPage;
