import { gg } from "@psk/styleguide";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! {gg}
    </section>
  );
}
