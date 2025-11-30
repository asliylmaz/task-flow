import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Plus, FileText, Calendar } from 'lucide-react'

export default function NotesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Notlarım</h1>
          <p className="text-muted-foreground">Tüm notlarını görüntüle ve yönet</p>
        </div>
        <Button>
          {/* TODO: Logic will be added here */}
          <Plus className="mr-2 h-4 w-4" />
          Yeni Not
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Notlarda ara..."
          className="pl-10"
        />
        {/* TODO: Logic will be added here */}
      </div>

      {/* Notes Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((note) => (
          <Link key={note} href={`/notes/${note}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-1">Not Başlığı {note}</CardTitle>
                  <Badge variant="secondary">Kategori</Badge>
                </div>
                <CardDescription className="flex items-center gap-2 text-xs">
                  <Calendar className="h-3 w-3" />
                  <span>15 Ocak 2024</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Bu notun içeriği buraya gelecek. Notlarınızı burada saklayabilir, düzenleyebilir ve organize edebilirsiniz. Bu örnek not içeriği gösterim amaçlıdır.
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      <Card className="hidden">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Henüz not yok</h3>
          <p className="text-sm text-muted-foreground mb-4">
            İlk notunu oluşturmak için yukarıdaki butona tıkla
          </p>
          <Button>
            {/* TODO: Logic will be added here */}
            <Plus className="mr-2 h-4 w-4" />
            Yeni Not Oluştur
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

