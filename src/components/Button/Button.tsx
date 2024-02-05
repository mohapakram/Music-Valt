import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
}

export default ({ children, ...rest }: ButtonProps) => (
  <Button
    sx={{
      borderRadius: 25,
      width: "100%",
      padding: "10px 50px",
    }}
    variant="contained"
    {...rest}
  >
    {children}
  </Button>
);
