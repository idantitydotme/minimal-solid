import AppLayout from "#layouts/AppLayout";
import { t } from "@rimelight/i18n";
import { RLButton } from "@rimelight/ui";

export default function Home() {
  return (
    <AppLayout>
      <div>
        <p>{t("home_example")}</p>
        <RLButton color="success" label="Here's my button!" />
      </div>
    </AppLayout>
  );
}
