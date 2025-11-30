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
  const pathname = usePathname()
  
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside className={cn(
        "fixed top-0 left-0 h-full bg-white border-r z-50 transform transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" onClick={onClose} className="text-xl font-bold text-primary">
            TaskFlow
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
            
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
                onClick={onClose}
              >
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
              {/* TODO: Kullanıcı bilgilerini çekme fonksiyonu - getUserData */}
              <p className="text-sm font-medium truncate">Kullanıcı Adı</p>
              <p className="text-xs text-muted-foreground truncate">user@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

