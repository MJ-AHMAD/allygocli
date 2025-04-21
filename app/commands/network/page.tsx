import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, ArrowLeft, Search, Wifi, Server, Network, Share2 } from "lucide-react"
import { CommandTable } from "@/components/command-table"

export default function NetworkCommandsPage() {
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
              <Globe className="h-8 w-8 text-primary" />
              Network Commands
            </h1>
            <p className="text-muted-foreground md:text-xl mt-1">
              Comprehensive reference for network diagnostics and configuration commands
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/40 dark:to-blue-950/40 rounded-lg p-6 my-6 border border-cyan-100 dark:border-cyan-900 w-full">
          <h2 className="text-2xl font-bold mb-3">নেটওয়ার্ক কমান্ড পরিচিতি</h2>
          <p className="text-muted-foreground mb-4">
            নেটওয়ার্ক কমান্ডগুলি আপনাকে আপনার নেটওয়ার্ক কানেকশন ডায়াগনোস করতে, কনফিগার করতে এবং মনিটর করতে সাহায্য করে। এই কমান্ডগুলি ব্যবহার
            করে আপনি নেটওয়ার্ক সমস্যা সমাধান করতে, কানেকশন টেস্ট করতে এবং নেটওয়ার্ক পারফরম্যান্স অপ্টিমাইজ করতে পারবেন।
          </p>
          <Link href="/learn/network">
            <Button variant="outline" className="gap-2">
              <Globe className="h-4 w-4" />
              নেটওয়ার্ক কমান্ড সম্পর্কে বিস্তারিত জানুন
            </Button>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <Link href="/search?category=network">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Search Network Commands
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="diagnostics" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="wireless">Wireless</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="diagnostics" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-primary" />
                  Network Diagnostic Commands
                </CardTitle>
                <CardDescription>Commands for testing and troubleshooting network connections</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "ping",
                      syntax: "ping [host]",
                      description: "Tests a network connection by sending ICMP echo requests",
                      example: "ping google.com",
                    },
                    {
                      command: "tracert / traceroute",
                      syntax: "tracert [host]",
                      description: "Traces the route taken by packets to a destination",
                      example: "tracert github.com",
                    },
                    {
                      command: "nslookup",
                      syntax: "nslookup [host]",
                      description: "Queries DNS servers for domain name or IP address mapping",
                      example: "nslookup example.com",
                    },
                    {
                      command: "Test-NetConnection",
                      syntax: "Test-NetConnection [host] [-Port port]",
                      description: "PowerShell cmdlet for testing network connectivity",
                      example: "Test-NetConnection -ComputerName google.com -Port 443",
                    },
                    {
                      command: "Resolve-DnsName",
                      syntax: "Resolve-DnsName [name]",
                      description: "PowerShell cmdlet for DNS name resolution",
                      example: "Resolve-DnsName microsoft.com",
                    },
                    {
                      command: "dig",
                      syntax: "dig [name] [type]",
                      description: "DNS lookup utility (Linux/Git Bash)",
                      example: "dig example.com MX",
                    },
                    {
                      command: "pathping",
                      syntax: "pathping [host]",
                      description: "Combines features of ping and tracert with additional information",
                      example: "pathping github.com",
                    },
                    {
                      command: "telnet",
                      syntax: "telnet [host] [port]",
                      description: "Tests connectivity to a specific port on a host",
                      example: "telnet smtp.example.com 25",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="configuration" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Network Configuration Commands
                </CardTitle>
                <CardDescription>Commands for viewing and modifying network settings</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "ipconfig",
                      syntax: "ipconfig [/all]",
                      description: "Displays all current TCP/IP network configuration values",
                      example: "ipconfig /all",
                    },
                    {
                      command: "ifconfig",
                      syntax: "ifconfig [interface]",
                      description: "Configures or displays network interface parameters (Linux/Git Bash)",
                      example: "ifconfig eth0",
                    },
                    {
                      command: "Get-NetIPAddress",
                      syntax: "Get-NetIPAddress",
                      description: "PowerShell cmdlet to get IP address configuration",
                      example: "Get-NetIPAddress | Where-Object AddressFamily -eq IPv4",
                    },
                    {
                      command: "Get-NetAdapter",
                      syntax: "Get-NetAdapter",
                      description: "PowerShell cmdlet to get network adapter information",
                      example: "Get-NetAdapter | Where-Object Status -eq 'Up'",
                    },
                    {
                      command: "netsh",
                      syntax: "netsh [context] [command]",
                      description: "Network shell command for configuring network settings",
                      example: "netsh interface show interface",
                    },
                    {
                      command: "route",
                      syntax: "route [command]",
                      description: "Displays or modifies the IP routing table",
                      example: "route print",
                    },
                    {
                      command: "Set-NetIPAddress",
                      syntax: "Set-NetIPAddress [parameters]",
                      description: "PowerShell cmdlet to modify IP address settings",
                      example: "Set-NetIPAddress -InterfaceIndex 12 -IPAddress 192.168.1.100 -PrefixLength 24",
                    },
                    {
                      command: "New-NetIPAddress",
                      syntax: "New-NetIPAddress [parameters]",
                      description: "PowerShell cmdlet to create a new IP address",
                      example:
                        "New-NetIPAddress -InterfaceIndex 12 -IPAddress 192.168.1.100 -PrefixLength 24 -DefaultGateway 192.168.1.1",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  Network Monitoring Commands
                </CardTitle>
                <CardDescription>Commands for monitoring network activity and connections</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "netstat",
                      syntax: "netstat [options]",
                      description: "Displays active TCP connections, ports, and more",
                      example: "netstat -ano",
                    },
                    {
                      command: "Get-NetTCPConnection",
                      syntax: "Get-NetTCPConnection",
                      description: "PowerShell cmdlet to display TCP connections",
                      example: "Get-NetTCPConnection -State Established",
                    },
                    {
                      command: "tcpdump",
                      syntax: "tcpdump [options]",
                      description: "Packet analyzer (Linux/Git Bash)",
                      example: "tcpdump -i eth0 port 80",
                    },
                    {
                      command: "arp",
                      syntax: "arp [options]",
                      description: "Displays and modifies the IP-to-Physical address translation tables",
                      example: "arp -a",
                    },
                    {
                      command: "Get-NetNeighbor",
                      syntax: "Get-NetNeighbor",
                      description: "PowerShell cmdlet to display the Address Resolution Protocol (ARP) cache",
                      example: "Get-NetNeighbor",
                    },
                    {
                      command: "nbtstat",
                      syntax: "nbtstat [options]",
                      description: "Displays NetBIOS over TCP/IP protocol statistics and connections",
                      example: "nbtstat -n",
                    },
                    {
                      command: "ss",
                      syntax: "ss [options]",
                      description: "Socket statistics (Linux/Git Bash)",
                      example: "ss -tuln",
                    },
                    {
                      command: "Get-NetUDPEndpoint",
                      syntax: "Get-NetUDPEndpoint",
                      description: "PowerShell cmdlet to display UDP endpoints",
                      example: "Get-NetUDPEndpoint",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wireless" className="mt-6 w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  Wireless Network Commands
                </CardTitle>
                <CardDescription>Commands for managing wireless network connections</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "netsh wlan show networks",
                      syntax: "netsh wlan show networks",
                      description: "Displays available wireless networks",
                      example: "netsh wlan show networks mode=bssid",
                    },
                    {
                      command: "netsh wlan show profiles",
                      syntax: "netsh wlan show profiles",
                      description: "Displays wireless profiles stored on the computer",
                      example: "netsh wlan show profiles",
                    },
                    {
                      command: "netsh wlan connect",
                      syntax: "netsh wlan connect name=[profile]",
                      description: "Connects to a wireless network",
                      example: 'netsh wlan connect name="Home Network"',
                    },
                    {
                      command: "netsh wlan disconnect",
                      syntax: "netsh wlan disconnect",
                      description: "Disconnects from a wireless network",
                      example: "netsh wlan disconnect",
                    },
                    {
                      command: "Get-NetAdapter -Physical",
                      syntax: "Get-NetAdapter -Physical",
                      description: "PowerShell cmdlet to display physical network adapters including wireless",
                      example: "Get-NetAdapter -Physical | Where-Object MediaType -eq 'Native 802.11'",
                    },
                    {
                      command: "iwconfig",
                      syntax: "iwconfig [interface]",
                      description: "Configures wireless network interfaces (Linux/Git Bash)",
                      example: "iwconfig wlan0",
                    },
                    {
                      command: "netsh wlan export profile",
                      syntax: 'netsh wlan export profile name="[profile]" folder=[path]',
                      description: "Exports a wireless profile to an XML file",
                      example: 'netsh wlan export profile name="Home Network" folder=C:\\Temp',
                    },
                    {
                      command: "netsh wlan add profile",
                      syntax: "netsh wlan add profile filename=[path]",
                      description: "Adds a wireless profile from an XML file",
                      example: 'netsh wlan add profile filename="C:\\Temp\\Wi-Fi-Home Network.xml"',
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
                  <Server className="h-5 w-5 text-primary" />
                  Advanced Network Commands
                </CardTitle>
                <CardDescription>Advanced commands for network administration and security</CardDescription>
              </CardHeader>
              <CardContent>
                <CommandTable
                  commands={[
                    {
                      command: "New-NetFirewallRule",
                      syntax: "New-NetFirewallRule [parameters]",
                      description: "PowerShell cmdlet to create a new firewall rule",
                      example:
                        'New-NetFirewallRule -DisplayName "Allow Port 80" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow',
                    },
                    {
                      command: "Get-NetFirewallRule",
                      syntax: "Get-NetFirewallRule",
                      description: "PowerShell cmdlet to display firewall rules",
                      example: "Get-NetFirewallRule | Where-Object Enabled -eq 'True'",
                    },
                    {
                      command: "netsh advfirewall",
                      syntax: "netsh advfirewall [command]",
                      description: "Configures Windows Firewall with Advanced Security",
                      example: "netsh advfirewall show allprofiles",
                    },
                    {
                      command: "Test-NetConnection -TraceRoute",
                      syntax: "Test-NetConnection [host] -TraceRoute",
                      description: "PowerShell cmdlet to perform a traceroute",
                      example: "Test-NetConnection google.com -TraceRoute",
                    },
                    {
                      command: "Test-NetConnection -DiagnoseRouting",
                      syntax: "Test-NetConnection [host] -DiagnoseRouting",
                      description: "PowerShell cmdlet to diagnose routing problems",
                      example: "Test-NetConnection google.com -DiagnoseRouting",
                    },
                    {
                      command: "iptables",
                      syntax: "iptables [options]",
                      description: "Firewall utility for Linux (Git Bash)",
                      example: "iptables -L",
                    },
                    {
                      command: "Set-NetConnectionProfile",
                      syntax: "Set-NetConnectionProfile [parameters]",
                      description: "PowerShell cmdlet to set the network profile",
                      example: "Set-NetConnectionProfile -InterfaceIndex 12 -NetworkCategory Private",
                    },
                    {
                      command: "Get-NetRoute",
                      syntax: "Get-NetRoute",
                      description: "PowerShell cmdlet to display the IP routing table",
                      example: "Get-NetRoute | Where-Object DestinationPrefix -eq '0.0.0.0/0'",
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
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tools/wireshark" className="text-blue-600 hover:underline">
                    Wireshark - Network Protocol Analyzer
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tools/nmap" className="text-blue-600 hover:underline">
                    Nmap - Network Scanner
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tools/putty" className="text-blue-600 hover:underline">
                    PuTTY - SSH and Telnet Client
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tools/advanced-ip-scanner" className="text-blue-600 hover:underline">
                    Advanced IP Scanner
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">Network Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/network-troubleshooting" className="text-blue-600 hover:underline">
                    Network Troubleshooting Guide
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/home-network-setup" className="text-blue-600 hover:underline">
                    Home Network Setup
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/network-security" className="text-blue-600 hover:underline">
                    Network Security Basics
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <Link href="/tutorials/vpn-setup" className="text-blue-600 hover:underline">
                    VPN Setup Guide
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
