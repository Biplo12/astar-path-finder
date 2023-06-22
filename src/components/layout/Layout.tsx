import * as React from "react";

import Footer from "@/components/layout/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
