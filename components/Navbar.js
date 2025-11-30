'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bell, Search, User } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <Link href="/" className="text-2xl font-bold text-primary">
            TaskFlow
          </Link>
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Ara..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            {/* TODO: Logic will be added here */}
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            {/* TODO: Logic will be added here */}
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

