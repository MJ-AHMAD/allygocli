import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitBranch, ArrowLeft, Search, GitCommit, GitMerge, GitPullRequest, History } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function GitVersionControlPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 mx-auto max-w-7xl">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Link href="/commands">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl flex items-center gap-2">
              <GitBranch className="h-8 w-8 text-primary" />
              Git & Version Control Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for Git and other version control systems
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/40 rounded-lg p-6 my-6 border border-amber-100 dark:border-amber-900 w-full">
          <h2 className="text-2xl font-bold mb-3">গিট এবং ভার্সন কন্ট্রোল পরিচিতি</h2>
          <p className="text-muted-foreground mb-4">
            গিট হল একটি বিতরণকৃত ভার্সন কন্ট্রোল সিস্টেম যা সফটওয়্যার ডেভেলপমেন্টে কোড ট্র্যাকিং, ব্রাঞ্চিং, মার্জিং এবং সহযোগিতা সহজ করে।
            এই কমান্ডগুলি ব্যবহার করে আপনি প্রজেক্টের ইতিহাস ট্র্যাক করতে, পরিবর্তন ম্যানেজ করতে এবং টিমের সাথে কাজ করতে পারবেন।
          </p>
          <Link href="/learn/git-version-control">
            <Button variant="outline" className="gap-2">
              <GitBranch className="h-4 w-4" />
              গিট সম্পর্কে বিস্তারিত জানুন
            </Button>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <Link href="/search?category=git-version-control">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search Git Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="branching">Branching</TabsTrigger>
            <TabsTrigger value="remote">Remote</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitCommit className="h-5 w-5 text-primary" />
                  Basic Git Commands
                </CardTitle>
                <CardDescription>Essential commands for getting started with Git</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "git init",
                      syntax: "git init [directory]",
                      description: "Initializes a new Git repository",
                      example: "git init",
                    },
                    {
                      command: "git clone",
                      syntax: "git clone [url]",
                      description: "Creates a copy of a remote repository",
                      example: "git clone https://github.com/user/repo.git",
                    },
                    {
                      command: "git add",
                      syntax: "git add [file(s)]",
                      description: "Adds files to the staging area",
                      example: "git add .",
                    },
                    {
                      command: "git commit",
                      syntax: 'git commit -m "[message]"',
                      description: "Records changes to the repository",
                      example: 'git commit -m "Initial commit"',
                    },
                    {
                      command: "git status",
                      syntax: "git status",
                      description: "Shows the working tree status",
                      example: "git status",
                    },
                    {
                      command: "git log",
                      syntax: "git log [options]",
                      description: "Shows the commit logs",
                      example: "git log --oneline",
                    },
                    {
                      command: "git diff",
                      syntax: "git diff [options]",
                      description: "Shows changes between commits, commit and working tree, etc.",
                      example: "git diff HEAD~1",
                    },
                    {
                      command: "git restore",
                      syntax: "git restore [file]",
                      description: "Restores working tree files",
                      example: "git restore file.txt",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="branching" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  Branching Commands
                </CardTitle>
                <CardDescription>Commands for working with branches in Git</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "git branch",
                      syntax: "git branch [options]",
                      description: "Lists, creates, or deletes branches",
                      example: "git branch",
                    },
                    {
                      command: "git branch create",
                      syntax: "git branch [branch-name]",
                      description: "Creates a new branch",
                      example: "git branch feature/login",
                    },
                    {
                      command: "git branch delete",
                      syntax: "git branch -d [branch-name]",
                      description: "Deletes a branch",
                      example: "git branch -d feature/login",
                    },
                    {
                      command: "git checkout",
                      syntax: "git checkout [branch-name]",
                      description: "Switches to a specified branch",
                      example: "git checkout main",
                    },
                    {
                      command: "git checkout new",
                      syntax: "git checkout -b [branch-name]",
                      description: "Creates and switches to a new branch",
                      example: "git checkout -b feature/user-profile",
                    },
                    {
                      command: "git switch",
                      syntax: "git switch [branch-name]",
                      description: "Switches to a specified branch (Git 2.23+)",
                      example: "git switch main",
                    },
                    {
                      command: "git merge",
                      syntax: "git merge [branch-name]",
                      description: "Merges a branch into the active branch",
                      example: "git merge feature/login",
                    },
                    {
                      command: "git rebase",
                      syntax: "git rebase [branch-name]",
                      description: "Reapplies commits on top of another base branch",
                      example: "git rebase main",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="remote" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitPullRequest className="h-5 w-5 text-primary" />
                  Remote Repository Commands
                </CardTitle>
                <CardDescription>Commands for working with remote repositories</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "git remote",
                      syntax: "git remote [options]",
                      description: "Manages set of tracked repositories",
                      example: "git remote -v",
                    },
                    {
                      command: "git remote add",
                      syntax: "git remote add [name] [url]",
                      description: "Adds a remote repository",
                      example: "git remote add origin https://github.com/user/repo.git",
                    },
                    {
                      command: "git fetch",
                      syntax: "git fetch [remote]",
                      description: "Downloads objects and refs from a remote repository",
                      example: "git fetch origin",
                    },
                    {
                      command: "git pull",
                      syntax: "git pull [remote] [branch]",
                      description: "Fetches and merges changes from a remote repository",
                      example: "git pull origin main",
                    },
                    {
                      command: "git push",
                      syntax: "git push [remote] [branch]",
                      description: "Updates remote refs along with associated objects",
                      example: "git push origin main",
                    },
                    {
                      command: "git push new branch",
                      syntax: "git push -u [remote] [branch]",
                      description: "Pushes a new branch to a remote repository",
                      example: "git push -u origin feature/login",
                    },
                    {
                      command: "git remote remove",
                      syntax: "git remote remove [name]",
                      description: "Removes a remote repository",
                      example: "git remote remove origin",
                    },
                    {
                      command: "git remote rename",
                      syntax: "git remote rename [old-name] [new-name]",
                      description: "Renames a remote repository",
                      example: "git remote rename origin upstream",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="collaboration" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitMerge className="h-5 w-5 text-primary" />
                  Collaboration Commands
                </CardTitle>
                <CardDescription>Commands for collaborating with others using Git</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "git stash",
                      syntax: "git stash [options]",
                      description: "Stashes changes in a dirty working directory",
                      example: "git stash",
                    },
                    {
                      command: "git stash apply",
                      syntax: "git stash apply [stash@{n}]",
                      description: "Applies a stashed state",
                      example: "git stash apply",
                    },
                    {
                      command: "git stash pop",
                      syntax: "git stash pop [stash@{n}]",
                      description: "Applies and removes a stashed state",
                      example: "git stash pop",
                    },
                    {
                      command: "git cherry-pick",
                      syntax: "git cherry-pick [commit]",
                      description: "Applies the changes from a specific commit",
                      example: "git cherry-pick abc123",
                    },
                    {
                      command: "git blame",
                      syntax: "git blame [file]",
                      description: "Shows what revision and author last modified each line of a file",
                      example: "git blame README.md",
                    },
                    {
                      command: "git tag",
                      syntax: "git tag [options]",
                      description: "Creates, lists, deletes, or verifies a tag object",
                      example: "git tag -a v1.0.0 -m 'Version 1.0.0'",
                    },
                    {
                      command: "git worktree",
                      syntax: "git worktree [command]",
                      description: "Manages multiple working trees",
                      example: "git worktree add ../feature-branch feature/login",
                    },
                    {
                      command: "git submodule",
                      syntax: "git submodule [command]",
                      description: "Manages submodules",
                      example: "git submodule add https://github.com/user/repo.git lib/repo",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-primary" />
                  Advanced Git Commands
                </CardTitle>
                <CardDescription>Advanced commands for Git power users</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "git reset",
                      syntax: "git reset [options] [commit]",
                      description: "Resets current HEAD to the specified state",
                      example: "git reset --hard HEAD~1",
                    },
                    {
                      command: "git revert",
                      syntax: "git revert [commit]",
                      description: "Creates a new commit that undoes changes from a previous commit",
                      example: "git revert abc123",
                    },
                    {
                      command: "git bisect",
                      syntax: "git bisect [subcommand]",
                      description: "Uses binary search to find the commit that introduced a bug",
                      example: "git bisect start",
                    },
                    {
                      command: "git reflog",
                      syntax: "git reflog [options]",
                      description: "Manages reflog information",
                      example: "git reflog",
                    },
                    {
                      command: "git filter-branch",
                      syntax: "git filter-branch [options]",
                      description: "Rewrites branches",
                      example: "git filter-branch --tree-filter 'rm -f passwords.txt' HEAD",
                    },
                    {
                      command: "git gc",
                      syntax: "git gc [options]",
                      description: "Cleans up unnecessary files and optimizes the local repository",
                      example: "git gc --aggressive",
                    },
                    {
                      command: "git fsck",
                      syntax: "git fsck [options]",
                      description: "Verifies the connectivity and validity of objects in the database",
                      example: "git fsck",
                    },
                    {
                      command: "git prune",
                      syntax: "git prune [options]",
                      description: "Prunes all unreachable objects from the object database",
                      example: "git prune",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">Related Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tools/github-desktop" className="text-blue-600 hover:underline">
                    GitHub Desktop - Git GUI Client
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tools/sourcetree" className="text-blue-600 hover:underline">
                    Sourcetree - Free Git GUI
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tools/gitkraken" className="text-blue-600 hover:underline">
                    GitKraken - Git GUI Client
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tools/git-extensions" className="text-blue-600 hover:underline">
                    Git Extensions - Git UI for Windows
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">Git Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/git-basics" className="text-blue-600 hover:underline">
                    Git Basics for Beginners
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/git-branching-strategies" className="text-blue-600 hover:underline">
                    Git Branching Strategies
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/git-workflow" className="text-blue-600 hover:underline">
                    Git Workflow Best Practices
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/git-troubleshooting" className="text-blue-600 hover:underline">
                    Git Troubleshooting Guide
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
