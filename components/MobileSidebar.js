'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  CheckSquare, 
  FileText, 
  Settings, 
  User,
  Home,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const sidebarItems = [
  {
    title: 'Ana Sayfa',
    href: '/',
    icon: Home,
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Görevler',
    href: '/tasks',
    icon: CheckSquare,
  },
  {
    title: 'Notlar',
    href: '/notes',
    icon: FileText,
  },
  {
    title: 'Profil',
    href: '/profile',
    icon: User,
  },
  {
    title: 'Ayarlar',
    href: '/settings',
    icon: Settings,
  },
]

export default function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          // TODO: Logic will be added here
        />
      )}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-64 bg-white border-r z-50 transform transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-primary">TaskFlow</span>
          <Button variant="ghost" size="icon">
            {/* TODO: Logic will be added here */}
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={onClose}
              >
                {/* TODO: Logic will be added here */}
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

