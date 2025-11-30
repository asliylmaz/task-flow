import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Bell, Globe, Moon, Shield, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto p-6 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">İletişim</h1>
        <p className="text-muted-foreground">İletişim bilgilerini görüntüle ve düzenle</p>
      </div>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Bildirimler</CardTitle>
          </div>
          <CardDescription>Bildirim tercihlerini yönet</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">E-posta Bildirimleri</Label>
              <p className="text-sm text-muted-foreground">
                Yeni görevler ve güncellemeler için e-posta bildirimleri al
              </p>
            </div>
            <Switch id="email-notifications" />
            {/* TODO: E-posta bildirim ayarını kaydetme - handleEmailNotificationsChange, API çağrısı */}
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-notifications">Anlık Bildirimler</Label>
              <p className="text-sm text-muted-foreground">
                Tarayıcı anlık bildirimlerini etkinleştir
              </p>
            </div>
            <Switch id="push-notifications" />
            {/* TODO: Anlık bildirim ayarını kaydetme - handlePushNotificationsChange, tarayıcı bildirim izni */}
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="task-reminders">Görev Hatırlatıcıları</Label>
              <p className="text-sm text-muted-foreground">
                Yaklaşan görevler için hatırlatıcılar gönder
              </p>
            </div>
            <Switch id="task-reminders" />
            {/* TODO: Görev hatırlatıcı ayarını kaydetme - handleTaskRemindersChange */}
          </div>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Moon className="h-5 w-5" />
            <CardTitle>Görünüm</CardTitle>
          </div>
          <CardDescription>Uygulama görünümü ayarları</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Tema</Label>
            <select 
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              {/* TODO: Tema değiştirme fonksiyonu - handleThemeChange, localStorage kaydı, dark mode toggle */}
              <option>Açık</option>
              <option>Koyu</option>
              <option>Sistem</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Dil</Label>
            <select 
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              {/* TODO: Dil değiştirme fonksiyonu - handleLanguageChange, i18n entegrasyonu */}
              <option>Türkçe</option>
              <option>English</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <CardTitle>Gizlilik</CardTitle>
          </div>
          <CardDescription>Gizlilik ve güvenlik ayarları</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="profile-visibility">Profil Görünürlüğü</Label>
              <p className="text-sm text-muted-foreground">
                Profilini diğer kullanıcılara göster
              </p>
            </div>
            <Switch id="profile-visibility" />
            {/* TODO: Profil görünürlüğü ayarını kaydetme - handleProfileVisibilityChange */}
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="activity-tracking">Aktivite Takibi</Label>
              <p className="text-sm text-muted-foreground">
                Aktivite verilerini topla ve analiz et
              </p>
            </div>
            <Switch id="activity-tracking" />
            {/* TODO: Aktivite takibi ayarını kaydetme - handleActivityTrackingChange */}
          </div>
        </CardContent>
      </Card>

      {/* Email Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <CardTitle>E-posta Ayarları</CardTitle>
          </div>
          <CardDescription>E-posta tercihlerini yönet</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>E-posta Sıklığı</Label>
            <select 
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              {/* TODO: E-posta sıklığı ayarını kaydetme - handleEmailFrequencyChange */}
              <option>Anında</option>
              <option>Günlük Özet</option>
              <option>Haftalık Özet</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing-emails">Pazarlama E-postaları</Label>
              <p className="text-sm text-muted-foreground">
                Ürün güncellemeleri ve özel teklifler hakkında e-posta al
              </p>
            </div>
            <Switch id="marketing-emails" />
            {/* TODO: Pazarlama e-postaları ayarını kaydetme - handleMarketingEmailsChange */}
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Tehlikeli Bölge</CardTitle>
          <CardDescription>Bu işlemler geri alınamaz</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Hesabı Sil</h4>
              <p className="text-sm text-muted-foreground">
                Hesabını ve tüm verilerini kalıcı olarak sil
              </p>
            </div>
            <Button variant="destructive">
              {/* TODO: Hesap silme fonksiyonu - handleDeleteAccount, onay dialog'u, API çağrısı */}
              Hesabı Sil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

