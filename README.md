# RoboComp — GitHub Pages Otomatik Güncelleme & Dağıtım Paketi

Bu paket, **RoboComp (`pre-Alpha v0.9.8.2`)** uygulamasını ücretsiz olarak **GitHub Pages** üzerinden yayınlamanız ve gelecekte yapacağımız tüm güncellemeleri kullanıcılara **link göndermeden, otomatik bildirim + tek tıkla otomatik indirme/güncelleme** şeklinde dağıtmanız için hazırlanmıştır.

## 1. İlk Kurulum (2 Dakika — Tek Seferlik)
1. GitHub hesabınızda `robocomp` adında **Public** bir yeni depo (Repository) oluşturun.
2. Bu ZIP içindeki 4 dosyayı (`index.html`, `version.json`, `manifest.json`, `sw.js`) doğrudan deponun ana dizinine yükleyin (**Add file → Upload files → Commit changes**).
3. Deponun **Settings → Pages** menüsüne girin, **Branch** kısmından `main` / `/ (root)` seçip **Save** butonuna basın.
4. Yaklaşık 1 dakika içinde uygulamanız `https://KULLANICI_ADINIZ.github.io/robocomp/` adresinde yayına alınacaktır.
5. Kullanıcılar bu adresi Chrome veya Edge ile bir kez açıp sağ üstten **"Uygulama Olarak Yükle"** dediklerinde bilgisayar/telefonlarına masaüstü uygulaması olarak kurulur.

## 2. Yeni Güncelleme Nasıl Yayınlanır? (Otomatik Bildirim)
İleride birlikte yeni bir sürüm (örneğin `pre-Alpha v0.9.8.3`) hazırladığımızda:
1. Sadece yeni `index.html` dosyasını ve içindeki `"version"` alanını güncellediğiniz `version.json` dosyasını GitHub deponuza yükleyin.
2. Uygulamaya sahip tüm kullanıcılar RoboComp'u çevrim içi açtığında arka planda `version.json` sessizce kontrol edilir.
3. Kullanıcılara hiçbir link gösterilmeden **"Yeni Güncelleme Hazır — Şimdi Güncelle"** bildirimi çıkar; onayladıklarında uygulama önbelleği temizlenip yeni sürüm otomatik olarak yüklenir.
