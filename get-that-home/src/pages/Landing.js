import Button from "../components/Button";
import { RiNotification2Line } from "react-icons/ri";

export function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Button size="small" icon={<RiNotification2Line />} select>
        Button
      </Button>
      <Button type="secundary" size="large" icon={<RiNotification2Line />}>
        Button
      </Button>
      <Button type="disabled" icon={<RiNotification2Line />} select>
        Button
      </Button>
      <Button type="ghost" icon={<RiNotification2Line />} select>
        Button
      </Button>
    </div>
  );
}
