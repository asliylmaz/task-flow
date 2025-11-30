import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckSquare, Clock, Users, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              TaskFlow ile
              <span className="text-primary block">Görevlerini Yönet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern ve kullanıcı dostu görev yönetim platformu ile işlerini organize et, takımınla işbirliği yap ve hedeflerine ulaş.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8">
                  {/* TODO: Kayıt sayfasına yönlendirme - zaten Link ile yapılmış */}
                  Başla
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8">
                {/* TODO: Özellikler bölümüne kaydırma veya daha fazla bilgi modal açma - handleLearnMore */}
                Daha Fazla Bilgi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Neden TaskFlow?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Hızlı ve Kolay</CardTitle>
                <CardDescription>
                  Basit ve sezgisel arayüz ile görevlerini hızlıca oluştur ve yönet.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckSquare className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Takip ve Raporlama</CardTitle>
                <CardDescription>
                  Görevlerini takip et, ilerlemeyi görselleştir ve raporlar al.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Zaman Yönetimi</CardTitle>
                <CardDescription>
                  Tarihler ve hatırlatıcılar ile zamanını verimli kullan.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Takım İşbirliği</CardTitle>
                <CardDescription>
                  Takımınla birlikte çalış, görevleri paylaş ve işbirliği yap.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold">Hemen Başla</h2>
          <p className="text-xl text-muted-foreground">
            TaskFlow ile görev yönetimini bir üst seviyeye taşı.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                {/* TODO: Logic will be added here */}
                Ücretsiz Kayıt Ol
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-lg px-8">
                {/* TODO: Logic will be added here */}
                Giriş Yap
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

