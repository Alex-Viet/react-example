import { StyledButton } from "./styles";

export function Button({ className, children, primary }) {
  return <StyledButton className={className} $primary={primary}>{children}</StyledButton>;
}
