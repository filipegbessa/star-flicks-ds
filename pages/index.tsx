import { Button, Icon } from "@/components";

const App = () => {
  return (
    <>
      <Button>Botão</Button>
      <Button className="theme-violet">Botão</Button>
      <Icon name="star" />
      <p className="italic font-thin">21345654321</p>
      <p className="italic font-extralight">21345654321</p>
      <p className="italic font-light">21345654321</p>
      <p className="italic font-normal">21345654321</p>
      <p className="italic font-medium">21345654321</p>
      <p className="italic font-semibold">21345654321</p>
      <p className="italic font-bold">21345654321</p>
      <p className="italic font-extrabold">21345654321</p>
      <p className="italic font-black">21345654321</p>
    </>
  );
};

export default App;
