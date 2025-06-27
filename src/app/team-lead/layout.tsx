interface LayoutProps {
  children: React.ReactNode;
}

export default function TeamLeadLayout({ children }: LayoutProps) {
  return <div className="p-3 md:p-6 lg:p-9 pb-10">{children}</div>;
}

export const metadata = {
  title: "Team Lead",
  description: "Design and automate your workflows with Bibuain.",
};
