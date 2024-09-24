# Flight Booking Backend projesi 
Schiphol Havaalanı API'sini kullanarak uçuş bilgilerini ve rezervasyonlarını yöneten bir Node.js Express uygulamasıdır. MongoDB, rezervasyonların saklanması için kullanılır.

## Projenin klasör yapısı şu şekildedir:

### config/
- **db.js**: MongoDB bağlantı yapılandırmasını içerir.
### controllers/
- **airlines.js**: Havayolu verilerini yöneten kontrolleri içerir.
- **flights.js**: Uçuş verilerini yöneten kontrolleri içerir.
- **reservations.js**: Rezervasyon işlemlerini yöneten kontrolleri içerir.
### models/
- **Reservation.js**: Rezervasyon modelini içerir.
### routes/
- **airlines.js**: Havayolu rotalarını tanımlar.
- **flights.js**: Uçuş rotalarını tanımlar.
- **reservations.js**: Rezervasyon rotalarını tanımlar.

**.env**: Ortam değişkenlerini içerir.

## API Rotaları

### Havayolu API
- **GET /api/airlines**: Tüm havayolu şirketlerini getirir. Sorgu parametreleri olarak page ve sort kabul eder.
- **GET /api/airlines/**:id Belirli bir havayolu şirketini IATA kodu ile getirir.
### Uçuş API
- **GET /api/flights**: Uçuş bilgilerini getirir. Sorgu parametreleri: page, includeDelays, sort, fromScheduleDate, toScheduleDate.
### Rezervasyon API
- **GET /api/reservations**: Tüm rezervasyonları getirir.
- **POST /api/reservations**: Yeni bir rezervasyon oluşturur. Gövde (body) verisi olarak flightNumber, passengerName, stops, departureDate, price beklenir.
- **DELETE /api/reservations/:id**: Belirli bir rezervasyonu siler.

Kurulum için depoyu klonlayın ve bağımlılıkları yükleyin. .env dosyasını oluşturup MongoDB bağlantı URI'sini ve Schiphol API anahtarlarını ekleyin. MongoDB'nin yerel makinenizde çalıştığından emin olun ve uygulamayı başlatın.

Uygulama, belirli rotalar üzerinden API isteklerini karşılar. Örneğin, /api/airlines rotası ile tüm havayolu bilgilerini alabilir, /api/flights rotası ile uçuş bilgilerine erişebilirsiniz. Rezervasyon işlemleri için /api/reservations rotası kullanılır.

MongoDB yapılandırması config/db.js dosyasında yer almaktadır. Bağlantı kurulamazsa uygulama kapanır.
