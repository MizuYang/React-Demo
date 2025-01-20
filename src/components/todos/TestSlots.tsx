export function TestSlots(props): JSX.Element {
  console.log(props);
  return (
    <div>
      {props.header}
      {props.main}
      {props.footer}
    </div>
  );
}
