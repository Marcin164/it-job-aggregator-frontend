import Input from "../components/Input";
import Button from "../components/Button"
import "../styles/globals.css";

function MyApp() {
  return (
    <div>
      <Input label="Surname" type="text"/>
      <Button value="Log In"/>
    </div>
  );
}

export default MyApp;