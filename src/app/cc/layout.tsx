interface LayoutProps {
  children: React.ReactNode;
}

export default function CustomerCareLayout({ children }: LayoutProps) {
  return <div className="">{children}</div>;
}

export const metadata = {
  title: "Customer Care",
  description: "Design and automate your workflows with Bibuain.",
};
