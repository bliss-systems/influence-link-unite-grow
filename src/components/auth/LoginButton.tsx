import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "./LoginDialog";

export const LoginButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Sign in
      </Button>
      <LoginDialog open={open} onOpenChange={setOpen} />
    </>
  );
};
