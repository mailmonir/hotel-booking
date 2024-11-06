const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-muted min-h-screen">{children}</div>;
};

export default AuthLayout;
