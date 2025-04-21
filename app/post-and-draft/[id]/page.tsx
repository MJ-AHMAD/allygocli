import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ClockIcon, TagIcon, UserIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "View Post | AllyGo CLI",
  description: "View and manage your post in the AllyGo CLI platform",
}

export default function PostPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the post data based on the ID
  const postId = params.id

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Post Details</h1>
            <p className="text-muted-foreground">View and manage your post</p>
          </div>
          <div className="flex space-x-2">
            <Link href={`/post-and-draft/${postId}/edit`}>
              <Button variant="outline">Edit Post</Button>
            </Link>
            <Link href="/post-and-draft">
              <Button variant="outline">Back to List</Button>
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">Example Post Title</CardTitle>
                <CardDescription className="mt-2">
                  This is an example post to demonstrate the post view page.
                </CardDescription>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">Published</span>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>Published: April 21, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="h-4 w-4" />
                <span>Last updated: April 21, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <UserIcon className="h-4 w-4" />
                <span>Author: Admin</span>
              </div>
              <div className="flex items-center gap-1">
                <TagIcon className="h-4 w-4" />
                <span>Category: CLI Commands</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full md:w-[200px] grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-6 space-y-4">
                <div className="prose max-w-none">
                  <p>
                    This is an example post content. In a real application, this would contain the actual content of
                    your post.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <h2>Section Heading</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </p>
                  <ul>
                    <li>List item one</li>
                    <li>List item two</li>
                    <li>List item three</li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    cli
                  </span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    tutorial
                  </span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    commands
                  </span>
                </div>
              </TabsContent>
              <TabsContent value="stats" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <StatCard title="Views" value="1,234" change="+12%" />
                  <StatCard title="Likes" value="56" change="+8%" />
                  <StatCard title="Comments" value="23" change="+15%" />
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">View History</h3>
                  <div className="h-64 w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    Chart placeholder - would show view trends over time
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Unpublish</Button>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  const isPositive = change.startsWith("+")

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs mt-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>{change} from last month</p>
      </CardContent>
    </Card>
  )
}
