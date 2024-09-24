# Air Flights Reservation App

## Proje Açıklaması

Bu proje, uçuş bilgilerini listeleyen ve rezervasyon yapma/kaldırma gibi işlemleri içeren bir web uygulamasıdır. Schiphol Havaalanı API'si kullanılarak uçuşlar hakkında veri alınmakta ve rezervasyon bilgileri bir MongoDB veritabanında saklanmaktadır. React, Redux Toolkit ve TypeScript gibi modern teknolojiler kullanılarak geliştirilmiştir.

## İçerik Açıklamaları

### `src/api/`

- **airlinesApi.ts**: Havayolu bilgilerini almak için API çağrılarını içerir.
- **apiUrl.ts**: Tüm API uç noktalarının tanımlandığı dosya.
- **flightsApi.ts**: Uçuş bilgilerini almak için yapılan API isteklerini yönetir.
- **instanceAxios.ts**: API istekleri için özel bir Axios örneği yaratır.
- **reservationApi.ts**: Rezervasyon işlemleri için gerekli olan API isteklerini içerir (rezervasyon yapma, rezervasyonu silme vb.).

### `src/components/`

- **ExtraServices.tsx**: Uçuş sırasında ekstra hizmet seçeneklerini görüntüleyen bileşen.
- **FilterOptions.tsx**: Uçuş aramalarını filtreleme seçeneklerini içeren bileşen.
- **FlightBooking.tsx**: Uçuş rezervasyonu yapmak için kullanılan bileşen.
- **TicketDetails.tsx**: Uçuş biletlerinin detaylarını görüntüleyen bileşen.

### `src/pages/`

- **Home.tsx**: Ana sayfa bileşeni. Uçuş arama ve bilet bilgileri burada görüntülenir.
- **MyFlights.tsx**: Kullanıcının yaptığı rezervasyonları listeleyen ve silmesine olanak tanıyan sayfa.

### `src/store/`

- **slices/airlinesSlice.ts**: Redux Toolkit ile havayolu bilgilerini yönetmek için oluşturulan slice.
- **slices/flightsSlice.ts**: Uçuş bilgilerini yöneten slice.
- **slices/reservationsSlice.ts**: Kullanıcının rezervasyonlarını yöneten slice.
- **thunks/airlinesThunk.ts**: Havayolu API isteklerini yöneten thunk.
- **thunks/flightsThunk.ts**: Uçuş API isteklerini yöneten thunk.
- **thunks/reservationThunk.ts**: Rezervasyon işlemleri için gerekli olan API isteklerini yöneten thunk.
- **store.tsx**: Redux mağazasının tanımlandığı ve tüm slice'ların bağlandığı dosya.

### `src/styles/`

- **index.css**: Uygulamanın temel stillerini içerir.
- **modal.ts**: Modal bileşeni için gerekli stiller ve animasyonlar.

### Diğer Dosyalar

- **App.tsx**: Uygulamanın yönlendirme ve genel yapısını içeren ana dosya.
- **index.tsx**: Uygulamanın başlatıldığı giriş dosyası.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için.
- **Redux Toolkit**: Durum yönetimi için.
- **TypeScript**: Tip güvenliğini sağlamak ve geliştirme sırasında hata ayıklamak için.
- **Axios**: API isteklerini yapmak için.
- **Schiphol Airport API**: Uçuş verilerini almak için kullanılan harici API.
- **Toastify**: Kullanıcıya işlemler hakkında bildirimler vermek için.
- **Tailwind CSS**: Uygulamanın stil ve düzenlerini oluşturmak için.

## Proje Kurulumu

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Depoyu Klonlayın**:

   ```bash
   git clone https://github.com/kullaniciAdiniz/air-flights-reservation.git
   ```

2. **Gerekli Bağımlılıkları Kurun**:

   ```bash
   npm install
   ```

3. **Çevresel Değişkenleri Ayarlayın**:
   `.env` dosyasını oluşturup gerekli API anahtarlarını ve bağlantı noktalarını girin.

4. **Projeyi Başlatın**:

   ```bash
   npm start
   ```

5. **Yapıyı Derleyin**:
   ```bash
   npm run build
   ```
