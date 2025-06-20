import "@/css/globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Bibuain Automation",
  description: "Design and automate your workflows with Bibuain.",
};
