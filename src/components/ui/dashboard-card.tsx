import { BadgeDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription } from "./card";

const DashboardCard = () => {
  return (
    <Card className="p-3 bg-muted/50">
      <CardContent className="p-0">
        <BadgeDollarSign className="mb-4" />
        <p>$<strong className="text-bold">1,231</strong></p>
        <CardDescription>Total Sales</CardDescription>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;