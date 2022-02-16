import { Container } from "react-bootstrap";
import {
  ArrowRight,
  ArrowUpRight,
  CaretRight,
  List,
} from "react-bootstrap-icons";
import Button from "./button";

export default function Remove_ButtonsPresentation() {
  return (
    <Container
      className="mt-5 p-2 mx-auto"
      style={{
        background: "#ddd",
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>
        <Button onClick={() => console.log("Click")}>Primary</Button>
      </p>
      <p>
        <Button variant="primary-white" onClick={() => console.log("Click")}>
          Primary white
        </Button>
      </p>
      <p>
        <Button variant="secondary" onClick={() => console.log("Click")}>
          Secondary
        </Button>
      </p>
      <p>
        <Button variant="secondary-white" onClick={() => console.log("Click")}>
          Secondary white
        </Button>
      </p>
      <p>
        <Button variant="flat" onClick={() => console.log("Click")}>
          Flat
        </Button>
      </p>
      <p>
        <Button variant="flat-white" onClick={() => console.log("Click")}>
          Flat white
        </Button>
      </p>
      <h2>With icons:</h2>
      <p>
        <Button
          iconRight={<ArrowUpRight />}
          variant="primary"
          onClick={() => console.log("Click")}
        >
          Primary with icon right
        </Button>
      </p>
      <p>
        <Button
          iconRight={<ArrowUpRight />}
          variant="primary-white"
          onClick={() => console.log("Click")}
        >
          Primary white with icon right
        </Button>
      </p>
      <p>
        <Button
          iconRight={<ArrowUpRight />}
          variant="secondary"
          onClick={() => console.log("Click")}
        >
          Secondary with icon right
        </Button>
      </p>
      <p>
        <Button
          iconRight={<ArrowUpRight />}
          variant="secondary-white"
          onClick={() => console.log("Click")}
        >
          Secondary white with icon right
        </Button>
      </p>
      <p>
        <Button
          iconRight={<ArrowRight />}
          variant="flat"
          onClick={() => console.log("Click")}
        >
          Flat with icon right
        </Button>
      </p>
      <p>
        <Button
          iconRight={<ArrowRight />}
          variant="flat-white"
          onClick={() => console.log("Click")}
        >
          Flat white with icon right
        </Button>
      </p>
      <p>
        <Button icon={<ArrowUpRight />} onClick={() => console.log("Click")} />
      </p>
      <p>
        <Button
          rounded
          icon={<CaretRight />}
          onClick={() => console.log("Click")}
        />
      </p>
      <p>
        <Button
          rounded
          variant="primary-white"
          icon={<CaretRight />}
          onClick={() => console.log("Click")}
        />
      </p>
      <p>
        <Button icon={<List />} onClick={() => console.log("Click")} />
      </p>
    </Container>
  );
}
