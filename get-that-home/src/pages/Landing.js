import Button from "../components/Button";

export function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Button size="small">Button</Button>
      <Button type="secundary" size="large">
        Button
      </Button>
      <Button type="disabled">Button</Button>
      <Button type="ghost">Button</Button>
    </div>
  );
}
