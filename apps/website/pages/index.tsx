import {Button} from "@test-nx/shared-ui";

export function Index() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-primary font-extrabold">Hello</h1>
      <Button label={"I am a useless button"} />
    </div>
  );
}

export default Index;
