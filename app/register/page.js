import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Kayıt Ol</CardTitle>
          <CardDescription className="text-center">
            Yeni bir hesap oluştur ve başla
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              id="name"
              type="text"
              placeholder="Adınız Soyadınız"
            />
            {/* TODO: Logic will be added here */}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@email.com"
            />
            {/* TODO: Logic will be added here */}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Şifre</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
            />
            {/* TODO: Logic will be added here */}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Şifre Tekrar</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
            />
            {/* TODO: Logic will be added here */}
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
              disabled
            />
            {/* TODO: Logic will be added here */}
            <Label htmlFor="terms" className="text-sm font-normal">
              <Link href="/terms" className="text-primary hover:underline">
                Kullanım Şartları
              </Link>
              'nı kabul ediyorum
            </Label>
          </div>
          <Button className="w-full" size="lg">
            {/* TODO: Logic will be added here */}
            Kayıt Ol
          </Button>
          <div className="text-center text-sm">
            Zaten hesabın var mı?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Giriş Yap
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

