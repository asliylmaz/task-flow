'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  CheckSquare, 
  FileText, 
  Settings, 
  User,
  Home
} from 'lucide-react'

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

export default function Sidebar() {
  const pathname = '/dashboard' // TODO: Logic will be added here - usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r bg-white h-[calc(100vh-65px)] sticky top-[65px]">
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {/* TODO: Logic will be added here */}
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.title}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Kullanıcı Adı</p>
            <p className="text-xs text-muted-foreground truncate">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

