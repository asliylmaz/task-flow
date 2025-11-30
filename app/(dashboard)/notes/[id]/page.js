import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Calendar, Edit, Trash2 } from 'lucide-react'

export default function NoteDetailPage({ params }) {
  return (
    <div className="container mx-auto p-6 space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/notes">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Not Detayı</h1>
          <p className="text-muted-foreground">Not bilgilerini görüntüle ve düzenle</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">Not Başlığı</CardTitle>
              {/* TODO: Not başlığını çekme - fetchNoteById(params.id), note.title */}
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary">Kategori</Badge>
                {/* TODO: Kategori badge'i - note.category */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>15 Ocak 2024, 14:30</span>
                  {/* TODO: Tarih formatlama - formatDateTime(note.createdAt) */}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                {/* TODO: Not düzenleme modunu açma - handleEditNote, setEditMode(true) */}
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                {/* TODO: Not silme fonksiyonu - handleDeleteNote, onay dialog'u */}
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Başlık</Label>
            <Input
              className="mt-1"
              placeholder="Not başlığı"
            />
            {/* TODO: Başlık state yönetimi ve güncelleme - handleTitleChange, handleSaveNote */}
          </div>
          <div>
            <Label>Kategori</Label>
            <select 
              className="w-full mt-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              {/* TODO: Kategori değiştirme fonksiyonu - handleCategoryChange, API çağrısı */}
              <option>Genel</option>
              <option>İş</option>
              <option>Kişisel</option>
            </select>
          </div>
          <div>
            <Label>İçerik</Label>
            <textarea
              className="w-full mt-1 min-h-[300px] rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Not içeriğinizi buraya yazın..."
              disabled
            >
              {/* TODO: İçerik state yönetimi ve güncelleme - handleContentChange, handleSaveNote, markdown desteği */}
              Bu notun içeriği buraya gelecek. Notlarınızı burada saklayabilir, düzenleyebilir ve organize edebilirsiniz. Bu örnek not içeriği gösterim amaçlıdır.
            </textarea>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

