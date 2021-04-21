import LogInTemplate from "../components/templates/logInTemplate";
import Header from "../components/organisms/header";

const LogInPage = () => (
  <>
    <Header isLogIn={true} />
    <LogInTemplate />
  </>
);

export default LogInPage;
