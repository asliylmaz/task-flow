import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Plus, Filter, Calendar, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function TasksPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Görevlerim</h1>
          <p className="text-muted-foreground">Tüm görevlerini görüntüle ve yönet</p>
        </div>
        <Button>
          {/* TODO: Yeni görev oluşturma modal/dialog açma fonksiyonu - handleCreateTask */}
          <Plus className="mr-2 h-4 w-4" />
          Yeni Görev
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Görevlerde ara..."
            className="pl-10"
          />
          {/* TODO: Görev arama fonksiyonu - handleSearchTasks, handleSearchInputChange */}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {/* TODO: Logic will be added here */}
              <Filter className="mr-2 h-4 w-4" />
              Filtrele
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              {/* TODO: Tüm görevleri göster - handleFilterChange('all') */}
              Tümü
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* TODO: Devam eden görevleri filtrele - handleFilterChange('in-progress') */}
              Devam Eden
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* TODO: Tamamlanan görevleri filtrele - handleFilterChange('completed') */}
              Tamamlanan
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* TODO: Beklemedeki görevleri filtrele - handleFilterChange('pending') */}
              Beklemede
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tasks Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* TODO: Görevleri çekme fonksiyonu - fetchTasks, useEffect ile veri çekme */}
        {[1, 2, 3, 4, 5, 6].map((task) => (
          <Link key={task} href={`/tasks/${task}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">Örnek Görev {task}</CardTitle>
                  {/* TODO: Görev başlığını göster - task.title */}
                  <Badge variant={task % 2 === 0 ? "destructive" : "secondary"}>
                    {task % 2 === 0 ? "Yüksek" : "Orta"}
                  </Badge>
                  {/* TODO: Öncelik badge'i göster - task.priority */}
                </div>
                <CardDescription>
                  Bu görev için açıklama metni buraya gelecek. Görevin detaylarını burada görebilirsiniz.
                </CardDescription>
                {/* TODO: Görev açıklamasını göster - task.description */}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>15 Ocak 2024</span>
                  {/* TODO: Tarih formatlama fonksiyonu - formatDate(task.dueDate) */}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="mr-2 h-4 w-4" />
                  <span>Atanan: Kullanıcı Adı</span>
                  {/* TODO: Atanan kullanıcı bilgisi - task.assignedTo */}
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-muted-foreground">%{task * 15} Tamamlandı</span>
                  {/* TODO: İlerleme yüzdesi hesaplama - calculateProgress(task.progress) */}
                  <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all"
                      style={{ width: `${task * 15}%` }}
                    />
                    {/* TODO: İlerleme barı genişliği - task.progress */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

