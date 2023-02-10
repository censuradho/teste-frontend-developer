import { useAuth } from "@/context/auth";
import { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";
import { paths } from "@/constants/routes";

// eslint-disable-next-line max-len
export const withAuthorization = <P extends object>(Component: ComponentType<P>) => function (props: P) {
  const { isLoading, isSigned } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!isSigned && !isLoading) router.push(paths.auth.signIn);
  }, []);

  if (isLoading) return null;
  
  return <Component {...props} />;
}