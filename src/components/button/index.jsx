import * as Styled from "./styles";

export function Button({ className, children, primary }) {
  return (
    <Styled.Button className={className} $primary={primary}>
      {children}
    </Styled.Button>
  );
}
