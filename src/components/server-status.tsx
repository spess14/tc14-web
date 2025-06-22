"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Server, Hash } from "lucide-react"
import { BiCube } from "react-icons/bi"

interface ServerInfo {
  name: string,
  players: number,
  tags: Array<string>,
  map: string,
  round_id: number,
  soft_max_players: number,
  panic_bunker: boolean,
  run_level: number,
  preset: string
}

export function ServerStatus() {
  const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        const response = await fetch("https://tc14.space/status")
        if (!response.ok) {
          throw new Error("Server unavailable")
        }
        const data = await response.json()
        setServerInfo(data)
        setError(null)
      } catch (err) {
        setError("Unable to connect to server")
        console.error("Failed to fetch server info:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchServerInfo()
    // Refresh every 30 seconds
    const interval = setInterval(fetchServerInfo, 30000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Card className="bg-black/40 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Server className="h-5 w-5 mr-2 text-green-400" />
            Server Status
            <Badge className="ml-2 bg-gray-500/20 text-gray-300 border-gray-500/30">Loading</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-gray-300">Loading server information...</div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="bg-black/40 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Server className="h-5 w-5 mr-2 text-red-400" />
            Server Status
            <Badge className="ml-2 bg-red-500/20 text-red-300 border-red-500/30">Error</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-300">{error}</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-black/40 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="h-5 w-5 mr-2 text-green-400" />
          Server Status
          <Badge className="ml-2 bg-green-500/20 text-green-300 border-green-500/30">Online</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-blue-400" />
            <span className="text-gray-300">Players:</span>
            <span className="text-white font-semibold">
              {serverInfo?.players}/{serverInfo?.soft_max_players}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Hash className="h-4 w-4 text-purple-400" />
            <span className="text-gray-300">Round:</span>
            <span className="text-white font-semibold">#{serverInfo?.round_id}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <BiCube className="h-4 w-4 text-yellow-400" />
          <span className="text-gray-300">Preset:</span>
          <span className="text-white font-semibold">{serverInfo?.preset}</span>
        </div>
      </CardContent>
    </Card>
  )
}