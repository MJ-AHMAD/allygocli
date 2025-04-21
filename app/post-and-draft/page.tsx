import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Posts and Drafts | AllyGo CLI",
  description: "Manage your posts and drafts in the AllyGo CLI platform",
}

export default function PostAndDraftPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Posts and Drafts</h1>
          <p className="text-muted-foreground">Manage your content, create new posts, and work with drafts</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
          <Link href="/post-and-draft/create">
            <Button>Create New Post</Button>
          </Link>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="posts">Published Posts</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <PostCard
                  key={i}
                  title={`Published Post ${i + 1}`}
                  description="This is a published post that is visible to your audience."
                  date={`${new Date().toLocaleDateString()}`}
                  status="published"
                />
              ))}
            </div>
            {Array.from({ length: 3 }).length === 0 && (
              <EmptyState
                title="No published posts yet"
                description="Your published posts will appear here. Create your first post to get started."
              />
            )}
          </TabsContent>
          <TabsContent value="drafts" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <PostCard
                  key={i}
                  title={`Draft Post ${i + 1}`}
                  description="This is a draft post that is not yet published."
                  date={`${new Date().toLocaleDateString()}`}
                  status="draft"
                />
              ))}
            </div>
            {Array.from({ length: 2 }).length === 0 && (
              <EmptyState
                title="No drafts yet"
                description="Your draft posts will appear here. Create a new post and save it as a draft to get started."
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function PostCard({
  title,
  description,
  date,
  status,
}: {
  title: string
  description: string
  date: string
  status: "published" | "draft"
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Last updated: {date}</span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              status === "published" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
            }`}
          >
            {status === "published" ? "Published" : "Draft"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </CardFooter>
    </Card>
  )
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-muted-foreground"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M12 18v-6" />
          <path d="M8 18v-1" />
          <path d="M16 18v-3" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2 max-w-sm">{description}</p>
    </div>
  )
}
