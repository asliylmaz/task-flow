import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Giriş Yap</CardTitle>
          <CardDescription className="text-center">
            Hesabına giriş yaparak devam et
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@email.com"
            />
            {/* TODO: E-posta state yönetimi - email state, handleEmailChange */}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Şifre</Label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Şifremi Unuttum
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
            />
            {/* TODO: Şifre state yönetimi - password state, handlePasswordChange */}
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
              disabled
            />
            {/* TODO: Beni hatırla checkbox state - rememberMe state, handleRememberMeChange */}
            <Label htmlFor="remember" className="text-sm font-normal">
              Beni Hatırla
            </Label>
          </div>
          <Button className="w-full" size="lg">
            {/* TODO: Giriş yapma fonksiyonu - handleLogin, form validasyonu, API çağrısı, token kaydı, yönlendirme */}
            Giriş Yap
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Veya
              </span>
            </div>
          </div>
          <div className="text-center text-sm">
            Hesabın yok mu?{' '}
            <Link href="/register" className="text-primary hover:underline font-medium">
              Kayıt Ol
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

