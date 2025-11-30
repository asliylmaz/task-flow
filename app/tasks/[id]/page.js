import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Calendar, User, Clock, Edit, Trash2 } from 'lucide-react'

export default function TaskDetailPage({ params }) {
  return (
    <div className="container mx-auto p-6 space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/tasks">
          <Button variant="ghost" size="icon">
            {/* TODO: Logic will be added here */}
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Görev Detayı</h1>
          <p className="text-muted-foreground">Görev bilgilerini görüntüle ve düzenle</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">Örnek Görev Başlığı</CardTitle>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="destructive">Yüksek Öncelik</Badge>
                    <Badge variant="secondary">Devam Ediyor</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    {/* TODO: Logic will be added here */}
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    {/* TODO: Logic will be added here */}
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Açıklama</h3>
                <p className="text-muted-foreground">
                  Bu görev için detaylı açıklama buraya gelecek. Görevin amacı, gereksinimleri ve diğer önemli bilgiler bu bölümde yer alacak.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Başlangıç:</span>
                  <span>10 Ocak 2024</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Bitiş:</span>
                  <span>25 Ocak 2024</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Atanan:</span>
                  <span>Kullanıcı Adı</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">İlerleme</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: '45%' }} />
                  </div>
                  <span className="text-sm font-medium">%45</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notlar</CardTitle>
              <CardDescription>Bu görevle ilgili notlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm">Görevle ilgili önemli bir not buraya yazılabilir.</p>
                <p className="text-xs text-muted-foreground mt-2">2 gün önce eklendi</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Görev Bilgileri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Durum</Label>
                <select 
                  className="w-full mt-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  disabled
                >
                  {/* TODO: Logic will be added here */}
                  <option>Beklemede</option>
                  <option>Devam Ediyor</option>
                  <option>Tamamlandı</option>
                </select>
              </div>
              <div>
                <Label>Öncelik</Label>
                <select 
                  className="w-full mt-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  disabled
                >
                  {/* TODO: Logic will be added here */}
                  <option>Düşük</option>
                  <option>Orta</option>
                  <option>Yüksek</option>
                </select>
              </div>
              <div>
                <Label>Başlangıç Tarihi</Label>
                <Input 
                  type="date"
                  className="mt-1"
                />
                {/* TODO: Logic will be added here */}
              </div>
              <div>
                <Label>Bitiş Tarihi</Label>
                <Input 
                  type="date"
                  className="mt-1"
                />
                {/* TODO: Logic will be added here */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

