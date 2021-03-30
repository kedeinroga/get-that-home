import Header from "../components/Header";
import Card from "../components/Card";

export function Landing() {
  return (
    <div>
      <Header />
      <Card />
      <Card landlord type="sale" />
    </div>
  );
}
