import { PropsWithChildren, ReactElement } from "react";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html>
      <head />

      <body>{children}</body>
    </html>
  );
}
