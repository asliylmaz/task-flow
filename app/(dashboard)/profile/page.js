import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, Camera, Save } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Profil</h1>
        <p className="text-muted-foreground">Profil bilgilerini görüntüle ve düzenle</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Profil Fotoğrafı</CardTitle>
            <CardDescription>Profil fotoğrafını güncelle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-16 w-16 text-primary" />
                </div>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute bottom-0 right-0 rounded-full"
                >
                  {/* TODO: Profil fotoğrafı düzenleme fonksiyonu - handleEditProfilePhoto */}
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                {/* TODO: Fotoğraf yükleme fonksiyonu - handleUploadPhoto, file input açma */}
                Fotoğraf Yükle
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Kişisel Bilgiler</CardTitle>
            <CardDescription>Ad, soyad ve iletişim bilgilerin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Ad</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Adınız"
                />
                {/* TODO: Kullanıcı adını çekme ve güncelleme - getUserProfile, handleFirstNameChange */}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Soyad</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Soyadınız"
                />
                {/* TODO: Kullanıcı soyadını çekme ve güncelleme - handleLastNameChange */}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@email.com"
              />
              {/* TODO: E-posta çekme ve güncelleme - handleEmailChange, email validasyonu */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+90 555 123 45 67"
              />
              {/* TODO: Telefon çekme ve güncelleme - handlePhoneChange, telefon formatı */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Hakkımda</Label>
              <textarea
                id="bio"
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Kendiniz hakkında bir şeyler yazın..."
                disabled
              >
                {/* TODO: Bio çekme ve güncelleme - handleBioChange, karakter limiti kontrolü */}
              </textarea>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">
                {/* TODO: Değişiklikleri iptal etme fonksiyonu - handleCancel, form reset */}
                İptal
              </Button>
              <Button>
                {/* TODO: Profil bilgilerini kaydetme fonksiyonu - handleSaveProfile, API çağrısı */}
                <Save className="mr-2 h-4 w-4" />
                Kaydet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Şifre Değiştir</CardTitle>
          <CardDescription>Hesap güvenliğin için şifreni güncelle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Mevcut Şifre</Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="••••••••"
            />
            {/* TODO: Mevcut şifre kontrolü - handleCurrentPasswordChange */}
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">Yeni Şifre</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="••••••••"
            />
            {/* TODO: Yeni şifre validasyonu - handleNewPasswordChange, şifre güçlülüğü kontrolü */}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Yeni Şifre Tekrar</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
            />
            {/* TODO: Şifre eşleşme kontrolü - handleConfirmPasswordChange, şifre karşılaştırma */}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">
              {/* TODO: Şifre değişikliğini iptal etme - handleCancelPasswordChange */}
              İptal
            </Button>
            <Button>
              {/* TODO: Şifre güncelleme fonksiyonu - handleUpdatePassword, API çağrısı */}
              Şifreyi Güncelle
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

