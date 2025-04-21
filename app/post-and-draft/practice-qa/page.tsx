"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Copy, Check, Search, BookOpen, Brain } from "lucide-react"

export default function PracticeQA() {
  const [searchTerm, setSearchTerm] = useState("")
  const [copied, setCopied] = useState<string | null>(null)
  const [practiceMode, setPracticeMode] = useState(false)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const qaData = [
    {
      category: "Basic Information",
      questions: [
        {
          id: "q1",
          question: "What is AllyGo CLI?",
          answer:
            "AllyGo CLI is an integrated educational platform that simplifies the process of learning, searching, and using commands across different terminal environments including PowerShell, Command Prompt, Git Bash, and Node.js. It's designed to make command line interfaces more accessible to users of all skill levels.",
        },
        {
          id: "q2",
          question: "When was AllyGo CLI founded?",
          answer:
            "AllyGo CLI was founded in 2023 as a solution to address the challenges many students, developers, and IT professionals face when learning and using command line interfaces.",
        },
        {
          id: "q3",
          question: "What does 'AllyGo' stand for?",
          answer:
            "The name 'AllyGo' represents our mission to be an ally that helps users 'go' further in their command line journey. The 'Ally' part emphasizes our supportive approach to learning, while 'Go' signifies progress and advancement in technical skills.",
        },
        {
          id: "q4",
          question: "What languages does AllyGo CLI support?",
          answer:
            "AllyGo CLI currently supports both English and Bengali languages, making it particularly accessible for users in Bangladesh and Bengali-speaking regions. We plan to add support for more languages in future updates.",
        },
        {
          id: "q5",
          question: "Who created AllyGo CLI?",
          answer:
            "AllyGo CLI was created by a team of developers and educators who recognized the need for a more accessible and comprehensive command line learning platform, particularly one that supports multiple languages including Bengali.",
        },
      ],
    },
    {
      category: "Features and Functionality",
      questions: [
        {
          id: "q6",
          question: "What terminal environments does AllyGo CLI support?",
          answer:
            "AllyGo CLI supports multiple terminal environments including PowerShell, Command Prompt (CMD), Git Bash, and Node.js. This comprehensive coverage allows users to learn and work with commands across different platforms from a single interface.",
        },
        {
          id: "q7",
          question: "How are commands organized in AllyGo CLI?",
          answer:
            "Commands in AllyGo CLI are organized into intuitive categories such as file operations, networking, system commands, package management, git version control, and text processing. This categorical organization makes it easier for users to find and learn related commands.",
        },
        {
          id: "q8",
          question: "Does AllyGo CLI offer interactive learning?",
          answer:
            "Yes, AllyGo CLI features interactive learning modules that provide hands-on experience with commands. These modules guide users through practical exercises, allowing them to apply commands in realistic scenarios and receive immediate feedback.",
        },
        {
          id: "q9",
          question: "What search capabilities does AllyGo CLI have?",
          answer:
            "AllyGo CLI includes an advanced search system that allows users to quickly find commands based on keywords, functionality, or category. The smart search feature understands natural language queries and can suggest related commands.",
        },
        {
          id: "q10",
          question: "Can AllyGo CLI be used offline?",
          answer:
            "Yes, AllyGo CLI has an offline mode that allows users to access the command reference and basic learning materials without an internet connection. However, some advanced features like community forums and real-time updates require connectivity.",
        },
      ],
    },
    {
      category: "Target Audience and Use Cases",
      questions: [
        {
          id: "q11",
          question: "Who is the target audience for AllyGo CLI?",
          answer:
            "AllyGo CLI is designed for a diverse audience including students learning programming, new developers, experienced IT professionals, educators teaching technical subjects, and system administrators. It's particularly valuable for Bengali-speaking users who may face language barriers with other tools.",
        },
        {
          id: "q12",
          question: "How can educational institutions benefit from AllyGo CLI?",
          answer:
            "Educational institutions can use AllyGo CLI as a teaching tool for computer science and IT courses. It provides a structured learning path for students, reduces the learning curve for command line interfaces, and offers bilingual support which is especially valuable in regions like Bangladesh.",
        },
        {
          id: "q13",
          question: "Is AllyGo CLI suitable for complete beginners?",
          answer:
            "Absolutely. AllyGo CLI is designed with beginners in mind, offering clear explanations, step-by-step tutorials, and a user-friendly interface. The platform gradually introduces concepts, starting from basic commands and progressing to more advanced operations.",
        },
        {
          id: "q14",
          question: "How can professional developers use AllyGo CLI?",
          answer:
            "Professional developers can use AllyGo CLI as a quick reference tool for less frequently used commands, to explore alternative commands across different terminal environments, and to improve their workflow efficiency. The categorized command structure helps them find the right command quickly.",
        },
        {
          id: "q15",
          question: "Can AllyGo CLI be used for team training in companies?",
          answer:
            "Yes, AllyGo CLI is excellent for team training and onboarding new employees. Companies can use it to standardize command line knowledge across teams, accelerate the onboarding process, and ensure consistent practices. Our enterprise plans include team management features specifically for this purpose.",
        },
      ],
    },
    {
      category: "Technical Details",
      questions: [
        {
          id: "q16",
          question: "What technologies are used to build AllyGo CLI?",
          answer:
            "AllyGo CLI is built using modern web technologies including React, Next.js, and TypeScript for the frontend, with Node.js for the backend services. We use a combination of relational and NoSQL databases to store command information and user data.",
        },
        {
          id: "q17",
          question: "Is AllyGo CLI a web-based platform or a desktop application?",
          answer:
            "AllyGo CLI is primarily a web-based platform accessible through any modern browser. However, we also offer desktop applications for Windows, macOS, and Linux that provide additional features like deeper integration with the local terminal and offline access to all content.",
        },
        {
          id: "q18",
          question: "How often is the command database updated?",
          answer:
            "We update our command database continuously. Minor updates occur weekly to add new commands and improve existing documentation. Major updates happen quarterly to introduce new features, terminal environments, or significant improvements to the learning modules.",
        },
        {
          id: "q19",
          question: "Does AllyGo CLI integrate with other development tools?",
          answer:
            "Yes, AllyGo CLI offers integrations with popular development tools including VS Code, GitHub, and various IDEs. These integrations allow users to access AllyGo CLI's command reference directly from their development environment, enhancing productivity.",
        },
        {
          id: "q20",
          question: "How does AllyGo CLI handle different versions of terminal environments?",
          answer:
            "AllyGo CLI maintains documentation for multiple versions of each supported terminal environment. Users can specify which version they're working with, and the platform will display the appropriate commands and syntax for that specific version.",
        },
      ],
    },
    {
      category: "Pricing and Plans",
      questions: [
        {
          id: "q21",
          question: "What pricing plans does AllyGo CLI offer?",
          answer:
            "AllyGo CLI offers several pricing tiers: a Free plan with basic features, a Starter plan for individual users, a Professional plan with complete features for professionals, and an Enterprise plan for organizations. We also offer special educational pricing for students and academic institutions.",
        },
        {
          id: "q22",
          question: "What features are included in the Free plan?",
          answer:
            "The Free plan includes access to the basic command reference, limited searches per day, access to fundamental learning modules, and support for two terminal environments. It's designed to give users a taste of the platform while providing genuine value for casual users.",
        },
        {
          id: "q23",
          question: "What additional features come with paid plans?",
          answer:
            "Paid plans include features such as unlimited searches, access to all terminal environments, advanced learning modules, offline access, custom command collections, team collaboration tools, priority support, and analytics. Higher-tier plans add features like API access, custom integrations, and dedicated account management.",
        },
        {
          id: "q24",
          question: "Do you offer special pricing for educational institutions?",
          answer:
            "Yes, we offer significant discounts for educational institutions. Schools, colleges, and universities can get up to 60% off our standard pricing, with special bulk licensing options. We also provide completely free access to students in certain developing regions as part of our educational outreach program.",
        },
        {
          id: "q25",
          question: "Is there a trial period for paid plans?",
          answer:
            "Yes, we offer a 14-day free trial for all paid plans. This allows users to experience the full feature set before committing to a subscription. No credit card is required for the trial, and users can downgrade to the Free plan at any time if they choose not to continue with a paid subscription.",
        },
      ],
    },
    {
      category: "Implementation and Integration",
      questions: [
        {
          id: "q26",
          question: "How can an organization implement AllyGo CLI across their team?",
          answer:
            "Organizations can implement AllyGo CLI by signing up for our Enterprise plan, which includes team management features. An administrator can invite team members, set up custom learning paths, track progress, and manage permissions. We provide onboarding support to ensure smooth implementation.",
        },
        {
          id: "q27",
          question: "Can AllyGo CLI be integrated into an existing Learning Management System (LMS)?",
          answer:
            "Yes, AllyGo CLI supports integration with popular LMS platforms like Moodle, Canvas, and Blackboard. We provide LTI (Learning Tools Interoperability) compliance, allowing seamless integration with educational systems while maintaining user authentication and progress tracking.",
        },
        {
          id: "q28",
          question: "Is there an API available for custom integrations?",
          answer:
            "Yes, AllyGo CLI offers a comprehensive REST API that allows for custom integrations with your organization's internal tools, dashboards, or development environments. The API is available on Professional and Enterprise plans and includes detailed documentation and support.",
        },
        {
          id: "q29",
          question: "How long does it typically take to implement AllyGo CLI in an educational setting?",
          answer:
            "Implementation time varies depending on the scale and specific requirements, but typically an educational institution can fully implement AllyGo CLI within 1-2 weeks. This includes account setup, user onboarding, LMS integration if needed, and initial training for instructors.",
        },
        {
          id: "q30",
          question: "Do you provide implementation support or consulting services?",
          answer:
            "Yes, we offer implementation support for all paid plans, with dedicated implementation specialists for Enterprise customers. We also provide consulting services for organizations that need custom solutions, specialized training programs, or deeper integration with their existing systems.",
        },
      ],
    },
    {
      category: "Support and Resources",
      questions: [
        {
          id: "q31",
          question: "What kind of support does AllyGo CLI provide?",
          answer:
            "AllyGo CLI provides tiered support based on the subscription plan. All users have access to our knowledge base and community forums. Paid plans include email support, while Professional and Enterprise plans add priority support, live chat, and dedicated account managers for Enterprise customers.",
        },
        {
          id: "q32",
          question: "Are there learning resources available for new users?",
          answer:
            "Yes, we provide extensive learning resources including getting started guides, video tutorials, webinars, and documentation. New users receive a guided onboarding experience that introduces them to the platform's features and helps them set up their learning path.",
        },
        {
          id: "q33",
          question: "Do you offer training for educators who want to use AllyGo CLI in their teaching?",
          answer:
            "Yes, we offer specialized training sessions for educators that cover how to incorporate AllyGo CLI into curriculum, create custom learning paths for students, track student progress, and leverage the platform's features for effective teaching. These sessions are complimentary for educational institutions on paid plans.",
        },
        {
          id: "q34",
          question: "Is there a community forum for AllyGo CLI users?",
          answer:
            "Yes, we maintain an active community forum where users can ask questions, share tips, discuss best practices, and connect with other command line enthusiasts. The forum is moderated by our team and includes sections in both English and Bengali.",
        },
        {
          id: "q35",
          question: "How quickly can I expect a response from support?",
          answer:
            "Support response times vary by plan. Free users can expect community forum responses within 24-48 hours. Starter plan users receive email support with 24-hour response time. Professional plan users get priority support with 8-hour response time. Enterprise customers receive the fastest support with 4-hour response time and dedicated channels.",
        },
      ],
    },
    {
      category: "Competitive Advantages",
      questions: [
        {
          id: "q36",
          question: "How does AllyGo CLI compare to other command line learning resources?",
          answer:
            "AllyGo CLI differentiates itself through its comprehensive multi-terminal support, bilingual interface (especially Bengali support), structured learning approach, and interactive exercises. Unlike many resources that focus on a single terminal environment or provide only reference material, we offer a complete educational ecosystem.",
        },
        {
          id: "q37",
          question: "What makes AllyGo CLI unique in the market?",
          answer:
            "AllyGo CLI's uniqueness comes from its combination of features: bilingual support, multi-terminal coverage, category-based organization, interactive learning, and specialized solutions for different sectors. Our focus on making command line interfaces accessible to non-English speakers, particularly Bengali users, sets us apart.",
        },
        {
          id: "q38",
          question: "Why should someone choose AllyGo CLI over free online tutorials?",
          answer:
            "While free tutorials offer valuable information, AllyGo CLI provides a structured, comprehensive learning experience with interactive exercises, progress tracking, and a unified reference across multiple terminal environments. Our platform saves users the time of piecing together information from various sources and ensures they learn best practices.",
        },
        {
          id: "q39",
          question: "How does AllyGo CLI help users learn faster than traditional methods?",
          answer:
            "AllyGo CLI accelerates learning through its structured approach, interactive exercises, immediate feedback, and comprehensive reference material. Our data shows users can reduce command line learning time by up to 60% compared to traditional methods, thanks to our focused, practical learning modules and intuitive organization.",
        },
        {
          id: "q40",
          question: "What ROI can organizations expect from implementing AllyGo CLI?",
          answer:
            "Organizations typically see ROI in three areas: reduced training time for new employees (40-60% reduction), increased productivity for existing staff (up to 40% improvement in command-related tasks), and fewer errors in command execution (reducing troubleshooting time). For educational institutions, we see improved student outcomes and engagement in technical courses.",
        },
      ],
    },
    {
      category: "Future Development",
      questions: [
        {
          id: "q41",
          question: "What new features are planned for AllyGo CLI?",
          answer:
            "Our roadmap includes adding support for more terminal environments (including specialized ones like AWS CLI and Docker), expanding language support beyond English and Bengali, developing advanced simulation environments for practice, implementing AI-assisted learning features, and creating more specialized learning paths for different industries.",
        },
        {
          id: "q42",
          question: "Will AllyGo CLI support more languages in the future?",
          answer:
            "Yes, expanding language support is a key priority. After establishing our English and Bengali interfaces, we plan to add support for Arabic, Hindi, Spanish, and French in the next phase, followed by additional languages based on user demand and market opportunities.",
        },
        {
          id: "q43",
          question: "Are there plans to develop mobile applications for AllyGo CLI?",
          answer:
            "Yes, we're currently developing native mobile applications for iOS and Android. These apps will focus on the learning and reference aspects of AllyGo CLI, allowing users to study on the go, with specialized interfaces optimized for mobile learning experiences.",
        },
        {
          id: "q44",
          question: "How does AllyGo CLI incorporate user feedback into development?",
          answer:
            "We have a structured feedback system that includes regular user surveys, feature request tracking, usage analytics, and direct engagement through our community forums. Our development prioritization process heavily weights user feedback, and we maintain a public roadmap that is influenced by community input.",
        },
        {
          id: "q45",
          question: "Will AllyGo CLI expand beyond command line interfaces to other technical topics?",
          answer:
            "While our core focus remains on command line interfaces, we are exploring expansions into closely related areas such as shell scripting, automation, DevOps practices, and cloud CLI tools. These expansions will maintain our commitment to accessibility and structured learning approaches.",
        },
      ],
    },
    {
      category: "Business and Partnerships",
      questions: [
        {
          id: "q46",
          question: "Does AllyGo CLI offer partnership or affiliate programs?",
          answer:
            "Yes, we offer both partnership and affiliate programs. Our affiliate program allows content creators, bloggers, and educators to earn commission by referring users to AllyGo CLI. Our partnership program is designed for educational institutions, training companies, and technology firms looking for deeper collaboration.",
        },
        {
          id: "q47",
          question: "Can AllyGo CLI be white-labeled for corporate training programs?",
          answer:
            "Yes, our Enterprise plan includes white-labeling options that allow organizations to customize the platform with their branding, specific command sets, and custom learning paths. This is particularly popular for corporate training programs and educational institutions that want to provide a branded experience.",
        },
        {
          id: "q48",
          question: "How does AllyGo CLI support educational institutions in developing regions?",
          answer:
            "We have a dedicated educational outreach program that provides free or heavily discounted access to educational institutions in developing regions, with a particular focus on Bangladesh and other South Asian countries. We also provide localized content and support to address specific regional needs.",
        },
        {
          id: "q49",
          question: "Are there opportunities for content creators to contribute to AllyGo CLI?",
          answer:
            "Yes, we have a content contributor program where terminal experts, educators, and technical writers can contribute learning modules, command documentation, or translations. Contributors receive compensation, recognition, and premium access to the platform.",
        },
        {
          id: "q50",
          question: "What is the long-term vision for AllyGo CLI?",
          answer:
            "Our long-term vision is to become the world's most accessible and comprehensive platform for technical command-based learning, breaking down language barriers in technology education. We aim to support all major command line environments, offer content in dozens of languages, and help millions of users worldwide master command line interfaces regardless of their background or primary language.",
        },
      ],
    },
  ]

  const filteredQA = qaData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">AllyGo CLI: 50 Practice Q&A</h1>
      <p className="text-center mb-8 text-gray-600">
        Comprehensive questions and answers to help you discuss the AllyGo CLI project confidently
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search questions or answers..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant={practiceMode ? "default" : "outline"}
          onClick={() => setPracticeMode(!practiceMode)}
          className="min-w-[180px]"
        >
          {practiceMode ? (
            <>
              <BookOpen className="mr-2 h-4 w-4" /> Study Mode
            </>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" /> Practice Mode
            </>
          )}
        </Button>
      </div>

      {searchTerm && filteredQA.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No questions or answers match your search term.</p>
        </div>
      )}

      {filteredQA.map((category) => (
        <Card key={category.category} className="mb-6">
          <CardHeader>
            <CardTitle>{category.category}</CardTitle>
            <CardDescription>
              {category.questions.length} question{category.questions.length !== 1 ? "s" : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((qa) => (
                <AccordionItem key={qa.id} value={qa.id}>
                  <AccordionTrigger className="text-left">{qa.question}</AccordionTrigger>
                  <AccordionContent className={practiceMode ? "hidden" : ""}>
                    <div className="relative">
                      <p className="pr-10">{qa.answer}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-0 right-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard(qa.answer, qa.id)
                        }}
                      >
                        {copied === qa.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}

      {practiceMode && (
        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">Practice Mode Active</h3>
          <p className="text-yellow-700">
            Answers are hidden. Click on questions to reveal them mentally, then check your answers by switching back to
            Study Mode.
          </p>
        </div>
      )}
    </div>
  )
}
