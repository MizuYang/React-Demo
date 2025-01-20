type props = {
  header: JSX.Element;
  main: JSX.Element;
  footer: JSX.Element;
};

export function Slots(props: props): JSX.Element {
  return (
    <div>
      {props.header}
      {props.main}
      {props.footer}
    </div>
  );
}
