import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardCard from "@/components/ui/dashboard-card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ChevronLeft, ChevronRight, Copy, CreditCard, File, ListFilter, MoreVertical, Truck } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <>
      <div className="col-span-full">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Orders</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recent Orders</BreadcrumbPage>
            </BreadcrumbItem> */}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid auto-rows-max col-span-full items-start gap-4 md:gap-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Overview</CardTitle>
                <Button variant="outline" size="sm">Ver más</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <Card className="col-span-full bg-muted/50">4</Card>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button variant="outline" size="sm">Ver más</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Card className="bg-muted/50">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell>$250.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid auto-rows-max col-span-full items-start gap-4 md:gap-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Favorite Food</CardTitle>
                <Button variant="outline" size="sm">Ver más</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Card className="bg-muted/50">
                Favorite Food
              </Card>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Customer Stat&apos;s</CardTitle>
                <Button variant="outline" size="sm">Ver más</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Card className="bg-muted/50">
                Customer Stat&apos;s
              </Card>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Employee</CardTitle>
                <Button variant="outline" size="sm">Ver más</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Card className="bg-muted/50">
                Employee
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;