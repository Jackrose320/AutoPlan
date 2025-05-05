import { RedirectToSignIn, useUser } from "@clerk/clerk-react";

function RequireAuth({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // or a loading spinner
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return children;
}

export default RequireAuth