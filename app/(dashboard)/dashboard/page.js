import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckSquare, Clock, AlertCircle, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Hoş geldin, işte bugünün özeti</p>
        </div>
        <Button>
          {/* TODO: Logic will be added here */}
          Yeni Görev
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Toplam Görev</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 bu hafta
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Devam Eden</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 yüksek öncelik
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tamamlanan</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              +12% geçen aya göre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yaklaşan</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Sonraki 7 gün içinde
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Tasks */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Yaklaşan Görevler</CardTitle>
            <CardDescription>Sonraki 7 gün içindeki görevlerin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">Örnek Görev {item}</p>
                  <p className="text-sm text-muted-foreground">2 gün sonra</p>
                </div>
                <Badge variant="secondary">Orta</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Yüksek Öncelik</CardTitle>
            <CardDescription>Acil görevlerin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">Önemli Görev {item}</p>
                  <p className="text-sm text-muted-foreground">Bugün</p>
                </div>
                <Badge variant="destructive">Yüksek</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tamamlananlar</CardTitle>
            <CardDescription>Son tamamlanan görevler</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 border rounded-lg opacity-60">
                <div className="flex-1">
                  <p className="font-medium line-through">Tamamlanan Görev {item}</p>
                  <p className="text-sm text-muted-foreground">2 gün önce</p>
                </div>
                <Badge variant="outline">Tamamlandı</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

