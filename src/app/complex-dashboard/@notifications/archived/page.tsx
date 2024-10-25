import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link className="tesxt-red" href="/complex-dashboard">
          Default
        </Link>
      </div>
    </Card>
  );
}
