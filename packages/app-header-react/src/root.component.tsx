import { gg } from "@psk/styleguide";

export default function Root(props) {
  return (
    <section className={"h-10"}>
      {props.name} is mounted! {gg}
    </section>
  );
}
