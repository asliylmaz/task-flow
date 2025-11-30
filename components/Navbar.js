'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Bell, Search, User, Menu, LayoutDashboard, CheckSquare, FileText, Settings, Home, LogOut, MailIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import MobileSidebar from '@/components/MobileSidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = [
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
    title: 'İletişim',
    href: '/contact',
    icon: MailIcon,
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between relative">
            {/* Left Side - Logo & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Link href="/" className="text-2xl font-bold text-primary">
                TaskFlow
              </Link>
            </div>

            {/* Center - Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                )
              })}
            </div>

            
            {/* Right Side Icons */}
            <div className="flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    {/* TODO: Bildirim sayısını çekme - getNotificationCount */}
                    <Bell className="h-5 w-5" />
                    {/* TODO: Okunmamış bildirim göstergesi */}
                    {/* <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span> */}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Bildirimler</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {/* TODO: Bildirimleri çekme ve listeleme - fetchNotifications */}
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    Henüz bildirim yok
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {/* TODO: Kullanıcı profil fotoğrafı gösterme - user.avatar */}
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    {/* TODO: Kullanıcı bilgilerini çekme - getUserData */}
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Kullanıcı Adı</p>
                      <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/profile">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profil</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/settings">
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Ayarlar</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {/* TODO: Çıkış yapma fonksiyonu - handleLogout */}
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Çıkış Yap</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
      <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}

