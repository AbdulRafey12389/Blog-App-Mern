import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserRound, FileText, EyeOff, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function Admin() {
  return (
    <>
      <PageTitle title='Admin | manage Your platform' />
      <div className='p-6 bg-background text-foreground mt-12 mb-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>
          <Button>Sign out</Button>
        </div>

        {/* Summary Boxes */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <UserRound className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-bold text-muted-foreground'>
                  Total Users
                </p>
                <p className='text-xl font-semiblod'>120</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <FileText className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-bold text-muted-foreground'>
                  All Blogs
                </p>
                <p className='text-xl font-semiblod'>85</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <Globe className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-bold text-muted-foreground'>
                  Public Blogs
                </p>
                <p className='text-xl font-semiblod'>60</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <EyeOff className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-bold text-muted-foreground'>
                  Private Blogs
                </p>
                <p className='text-xl font-semiblod'>25</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Tabs */}
        <div className='mb-4'>
          <Select defaultValue='users'>
            <SelectTrigger className='w-[200px]'>
              <SelectValue placeholder='Select Data' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='users'>Users</SelectItem>
              <SelectItem value='all'>All Posts</SelectItem>
              <SelectItem value='public'>Public Posts</SelectItem>
              <SelectItem value='private'>Private Posts</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Data Table */}
        <Tabs defaultValue='users'>
          <TabsContent value='users'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>user</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Admin User</TableCell>
                  <TableCell>admin@example.com</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
