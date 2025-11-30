# TaskFlow - Görev Yönetim + Not + Profil Ayarları Platformu

## 📋 Proje Hakkında

TaskFlow, modern ve kullanıcı dostu bir görev yönetim platformudur. Kullanıcıların görevlerini organize etmelerine, notlar almalarına ve kişisel ayarlarını yönetmelerine olanak tanıyan full-stack bir web uygulamasıdır.

### 🎯 Projenin Amacı

Bu proje, full-stack web geliştirme öğrenim sürecinde aşağıdaki konuları öğrenmek ve uygulamak için tasarlanmıştır:

- **Frontend Geliştirme**: React/Next.js, Tailwind CSS, component yapısı
- **Backend Geliştirme**: RESTful API, veritabanı işlemleri, authentication
- **State Yönetimi**: React hooks, context API
- **API Entegrasyonu**: Fetch API, axios, error handling
- **Routing**: Next.js App Router, dynamic routes
- **UI/UX Tasarımı**: Modern ve responsive tasarım prensipleri

## 🚀 Projenin İşlevleri

### 1. **Ana Sayfa (Landing Page)**
- **Açıklama**: Kullanıcıları karşılayan ana sayfa
- **Özellikler**:
  - Hero bölümü ile platform tanıtımı
  - Özellikler kartları (Hızlı ve Kolay, Takip ve Raporlama, Zaman Yönetimi, Takım İşbirliği)
  - Kayıt ol ve Giriş yap butonları
  - Responsive tasarım

### 2. **Kimlik Doğrulama (Authentication)**
- **Giriş Sayfası** (`/login`)
  - E-posta ve şifre ile giriş
  - "Beni Hatırla" özelliği
  - Şifremi unuttum linki
  - Kayıt sayfasına yönlendirme

- **Kayıt Sayfası** (`/register`)
  - Ad Soyad, E-posta, Şifre alanları
  - Şifre tekrar kontrolü
  - Kullanım şartları onayı
  - Giriş sayfasına yönlendirme

### 3. **Dashboard (Ana Kontrol Paneli)**
- **Özellikler**:
  - İstatistik kartları:
    - Toplam görev sayısı
    - Devam eden görevler
    - Tamamlanan görevler
    - Yaklaşan görevler (7 gün içinde)
  - Hızlı erişim bölümleri:
    - Yaklaşan görevler listesi
    - Yüksek öncelikli görevler
    - Son tamamlanan görevler
  - Yeni görev oluşturma butonu

### 4. **Görevler Yönetimi**
- **Görevler Listesi Sayfası** (`/tasks`)
  - Tüm görevleri grid görünümünde listeleme
  - Arama özelliği (görev başlığı ve açıklamada arama)
  - Filtreleme (Tümü, Devam Eden, Tamamlanan, Beklemede)
  - Her görev kartında:
    - Görev başlığı ve açıklaması
    - Öncelik badge'i (Düşük/Orta/Yüksek)
    - Tarih bilgisi
    - Atanan kullanıcı
    - İlerleme çubuğu
  - Yeni görev oluşturma butonu

- **Görev Detay Sayfası** (`/tasks/[id]`)
  - Görev başlığı ve açıklaması
  - Durum ve öncelik bilgileri
  - Başlangıç ve bitiş tarihleri
  - Atanan kullanıcı bilgisi
  - İlerleme yüzdesi ve görselleştirme
  - Görevle ilgili notlar
  - Düzenleme ve silme butonları
  - Sağ panelde hızlı düzenleme alanları (Durum, Öncelik, Tarihler)

### 5. **Notlar Yönetimi**
- **Notlar Listesi Sayfası** (`/notes`)
  - Tüm notları grid görünümünde listeleme
  - Arama özelliği
  - Her not kartında:
    - Not başlığı
    - Kategori badge'i
    - Oluşturulma tarihi
    - Not içeriği önizlemesi (3 satır)
  - Yeni not oluşturma butonu
  - Boş durum ekranı (not yoksa)

- **Not Detay Sayfası** (`/notes/[id]`)
  - Not başlığı ve içeriği
  - Kategori bilgisi
  - Oluşturulma tarihi ve saati
  - Düzenleme ve silme butonları
  - İnline düzenleme modu

### 6. **Profil Yönetimi**
- **Profil Sayfası** (`/profile`)
  - **Profil Fotoğrafı Bölümü**:
    - Profil fotoğrafı gösterme ve yükleme
    - Fotoğraf düzenleme butonu
  
  - **Kişisel Bilgiler Bölümü**:
    - Ad ve Soyad
    - E-posta adresi
    - Telefon numarası
    - Hakkımda (bio) metni
    - Kaydet ve İptal butonları
  
  - **Şifre Değiştirme Bölümü**:
    - Mevcut şifre
    - Yeni şifre
    - Yeni şifre tekrar
    - Şifre güncelleme butonu

### 7. **Ayarlar**
- **Ayarlar Sayfası** (`/settings`)
  - **Bildirim Ayarları**:
    - E-posta bildirimleri açık/kapalı
    - Anlık bildirimler (push notifications) açık/kapalı
    - Görev hatırlatıcıları açık/kapalı
  
  - **Görünüm Ayarları**:
    - Tema seçimi (Açık/Koyu/Sistem)
    - Dil seçimi (Türkçe/English)
  
  - **Gizlilik Ayarları**:
    - Profil görünürlüğü
    - Aktivite takibi
  
  - **E-posta Ayarları**:
    - E-posta sıklığı (Anında/Günlük Özet/Haftalık Özet)
    - Pazarlama e-postaları
  
  - **Tehlikeli Bölge**:
    - Hesap silme işlemi

### 8. **Navigasyon ve Layout**
- **Navbar (Üst Menü)**:
  - TaskFlow logosu ve başlık
  - Arama çubuğu (desktop'ta)
  - Bildirim ikonu
  - Kullanıcı menüsü ikonu
  - Mobil menü butonu

- **Sidebar (Yan Menü)**:
  - Ana Sayfa
  - Dashboard
  - Görevler
  - Notlar
  - Profil
  - Ayarlar
  - Kullanıcı bilgileri (alt kısım)
  - Aktif sayfa vurgulama

- **Mobile Sidebar**:
  - Mobil cihazlarda hamburger menü
  - Overlay ile açılıp kapanma
  - Sidebar ile aynı menü öğeleri

## 🛠️ Teknik Detaylar

### Frontend Teknolojileri
- **Framework**: Next.js 14 (App Router)
- **UI Kütüphanesi**: React 18
- **Styling**: Tailwind CSS
- **UI Bileşenleri**: Radix UI (Dialog, Dropdown, Switch, vb.)
- **İkonlar**: Lucide React
- **State Yönetimi**: React Hooks (useState, useEffect, useContext)

### Proje Yapısı
```
task-flow/
├── app/                    # Next.js App Router sayfaları
│   ├── (dashboard)/       # Dashboard route group
│   │   ├── dashboard/     # Dashboard sayfası
│   │   ├── tasks/         # Görevler sayfaları
│   │   ├── notes/         # Notlar sayfaları
│   │   ├── profile/       # Profil sayfası
│   │   └── settings/      # Ayarlar sayfası
│   ├── login/             # Giriş sayfası
│   ├── register/          # Kayıt sayfası
│   └── page.js            # Ana sayfa (Landing)
├── components/            # React bileşenleri
│   ├── ui/               # UI bileşenleri (Button, Card, Input, vb.)
│   ├── Navbar.js         # Üst menü
│   ├── Sidebar.js        # Yan menü (desktop)
│   └── MobileSidebar.js  # Yan menü (mobil)
├── lib/                  # Yardımcı fonksiyonlar
│   └── utils.js         # Utility fonksiyonlar
└── styles/              # Global stiller
    └── globals.css      # Tailwind CSS ve özel stiller
```

## 📝 Öğrenilecek Konular (Fonksiyonlar)

Tüm fonksiyonlar için yorum satırlarında başlıklar eklendi. İşte öğrenilecek ana konular:

### 1. **State Yönetimi**
- useState hook kullanımı
- Form state yönetimi
- Local state vs global state

### 2. **API İşlemleri**
- Fetch API kullanımı
- GET, POST, PUT, DELETE istekleri
- Error handling
- Loading states

### 3. **Form Yönetimi**
- Form validation
- Controlled components
- Form submission
- Error messages

### 4. **Authentication**
- JWT token yönetimi
- Login/Register işlemleri
- Protected routes
- Token storage (localStorage/cookies)

### 5. **CRUD İşlemleri**
- Create (Oluşturma)
- Read (Okuma/Listeleme)
- Update (Güncelleme)
- Delete (Silme)

### 6. **Routing**
- Next.js dynamic routes (`[id]`)
- Programmatic navigation
- Query parameters

### 7. **Data Fetching**
- useEffect hook ile veri çekme
- Dependency arrays
- Cleanup functions

### 8. **UI İyileştirmeleri**
- Loading spinners
- Error messages
- Success notifications
- Empty states

## 🎨 UI Bileşenleri

Projede kullanılan hazır UI bileşenleri:

- **Button**: Farklı varyantlar (default, outline, ghost, destructive)
- **Card**: İçerik kartları
- **Input**: Form input alanları
- **Label**: Form etiketleri
- **Badge**: Durum ve kategori göstergeleri
- **Dialog**: Modal pencereler
- **Dropdown Menu**: Açılır menüler
- **Switch**: Toggle anahtarları

## 🔄 Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Tarayıcıda aç
http://localhost:3000
```

## 📌 Önemli Notlar

1. **Sadece UI Hazır**: Şu anda sadece görsel arayüz (UI) tamamlanmıştır. Fonksiyonlar için yorum satırlarında başlıklar eklenmiştir.

2. **Fonksiyonlar Eklenecek**: Her TODO yorum satırında hangi fonksiyonun ekleneceği belirtilmiştir. Bu fonksiyonları siz yazacaksınız.

3. **Backend API**: Backend API'leri hazır olduğunda, frontend'deki fonksiyonlar bu API'ler ile entegre edilecektir.

4. **Hata Yönetimi**: API çağrılarında hata durumları için error handling eklenmelidir.

5. **Loading States**: Veri çekme işlemleri sırasında loading göstergeleri eklenmelidir.

## 🎓 Öğrenme Yolu

1. **Temel Fonksiyonlar**: Önce basit CRUD işlemlerini öğrenin
2. **State Yönetimi**: React hooks ile state yönetimini öğrenin
3. **API Entegrasyonu**: Backend API'leri ile iletişimi öğrenin
4. **Form Validation**: Form doğrulama işlemlerini öğrenin
5. **Authentication**: Kullanıcı giriş/çıkış sistemini öğrenin
6. **Error Handling**: Hata yönetimi ve kullanıcı geri bildirimlerini öğrenin

## 🚧 Yapılacaklar

- [ ] API entegrasyonu
- [ ] State yönetimi (useState, useEffect)
- [ ] Form validation
- [ ] Authentication (login/register)
- [ ] CRUD işlemleri
- [ ] Error handling
- [ ] Loading states
- [ ] Toast notifications
- [ ] Protected routes
- [ ] Image upload (profil fotoğrafı)

## 📚 Faydalı Kaynaklar

- [Next.js Dokümantasyonu](https://nextjs.org/docs)
- [React Dokümantasyonu](https://react.dev)
- [Tailwind CSS Dokümantasyonu](https://tailwindcss.com/docs)
- [Radix UI Dokümantasyonu](https://www.radix-ui.com)

---

**Not**: Bu proje, full-stack web geliştirme öğrenim sürecinde uygulamalı öğrenme için tasarlanmıştır. Tüm fonksiyonlar adım adım öğrenilerek eklenebilir.

