
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <h2> inner layot item </h2>
        {children}
   </>
  );
}
