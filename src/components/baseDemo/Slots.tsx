export function Slots(props): JSX.Element {
  return (
    <div>
      {props.header}
      {props.main}
      {props.footer}
    </div>
  );
}
