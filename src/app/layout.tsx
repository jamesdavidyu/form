import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, Button, Box } from "@mantine/core";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1 2, Happy 2nd Anniversary!!",
  description: "An anniversary card for the best wife ever!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body style={{ backgroundColor: "pink" }}>
          <MantineProvider>
            <SignedOut>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <SignInButton>
                  <Button bg="white" c="black">
                    Only for 1 2
                  </Button>
                </SignInButton>
              </Box>
            </SignedOut>
            <SignedIn>
              <div>{children}</div>
            </SignedIn>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
