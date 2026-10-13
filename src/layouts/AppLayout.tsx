import type { ParentProps } from "solid-js";
import AppHeader from "#components/app/AppHeader";
import AppFooter from "#components/app/AppFooter";

export default function AppLayout(props: ParentProps) {
  return (
    <>
      <AppHeader />
      <main>{props.children}</main>
      <AppFooter />
    </>
  );
}
