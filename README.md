# Node.js Learning Modules

این مخزن مجموعه‌اي از تمرين‌ها و نمونه‌کدهاي Node.js است که از مفاهيم پايه تا مباحث کاربردي‌تر مثل HTTP API، کار با فايل، MongoDB، Stream و Design Pattern را پوشش مي‌دهد.

## هدف پروژه

- يادگيري ماژول سيستم Node.js با مثال‌هاي عملي و ساده
- مقايسه روش‌هاي مختلف (CommonJS در مقابل ES Module)
- پياده‌سازي API بدون فريم‌ورک (فقط `http` و `fs`)
- تمرين CRUD در MongoDB Driver
- آشنايي با Buffer/Stream و استريم ويديو

## ساختار پوشه‌ها

```text
NodeJs/
├─ 01-CommonJs-Module/
├─ 02-ES-Module/
├─ 03-http-Module/
├─ 04-fs-Module/
├─ 05-MongoDB/
├─ 06-Design-Pattern/
├─ 07-os-path-module/
├─ 08-buffer-stream/
└─ 09-http-stream-video/
```

## پيش‌نيازها

- Node.js نسخه 18 يا بالاتر (پيشنهادي: LTS)
- npm
- براي بخش‌هاي `05` و `06`:
  - MongoDB Server در حالت اجرا روي `mongodb://localhost:27017`

بررسي نسخه:

```bash
node -v
npm -v
```

## نحوه اجراي هر بخش

> هر پوشه `package.json` مستقل دارد. دستورات را داخل همان پوشه اجرا کنيد.

الگوي عمومي:

```bash
cd <module-folder>
npm install
npm start
```

---

## 01 - CommonJS Module

مسير: `01-CommonJs-Module`

### چي ياد مي‌گيريد؟

- `require` و `module.exports`
- import کردن توابع و مقادير از فايل‌هاي مختلف

### اجرا

```bash
cd 01-CommonJs-Module
npm install
npm start
```

---

## 02 - ES Module

مسير: `02-ES-Module`

### چي ياد مي‌گيريد؟

- `import` / `export` در ES Modules
- نقش `type: "module"` در `package.json`

### اجرا

```bash
cd 02-ES-Module
npm install
npm start
```

---

## 03 - HTTP Module (REST API بدون فريم‌ورک)

مسير: `03-http-Module`

### چي ياد مي‌گيريد؟

- ساخت سرور با `http.createServer`
- Routing دستي بر اساس `url` و `method`
- CRUD روي داده JSON در فايل `data/products.json`

### اجرا

```bash
cd 03-http-Module
npm install
npm start
```

سرور روي آدرس زير بالا مي‌آيد:

`http://localhost:3000`

### Endpoint ها

- `GET /api/products` -> دريافت همه محصولات
- `GET /api/products/:id` -> دريافت محصول بر اساس id
- `POST /api/products` -> ايجاد محصول جديد
- `PUT /api/products/:id` -> آپديت محصول
- `DELETE /api/products/:id` -> حذف محصول

### مثال درخواست‌ها (PowerShell)

دريافت همه:

```powershell
Invoke-RestMethod -Method GET -Uri "http://localhost:3000/api/products"
```

ايجاد محصول:

```powershell
$body = @{
  name = "مانيتور 24 اينچ"
  price = 7800000
  inStock = $true
} | ConvertTo-Json

Invoke-RestMethod -Method POST -Uri "http://localhost:3000/api/products" -ContentType "application/json" -Body $body
```

---

## 04 - FS Module

مسير: `04-fs-Module`

### چي ياد مي‌گيريد؟

- خواندن فايل به شکل `async` و `sync`
- نوشتن و append در فايل
- حذف فايل و پوشه
- ساخت پوشه و خواندن محتواي دايرکتوري

### اجرا

```bash
cd 04-fs-Module
npm install
npm start
```

> بخش‌هاي مختلف در `index.js` به صورت تابع نوشته شده‌اند و براي تست بايد فراخواني شوند.

---

## 05 - MongoDB

مسير: `05-MongoDB`

### چي ياد مي‌گيريد؟

- اتصال به MongoDB با `mongodb` driver
- عمليات `insert`, `find`, `update`, `delete`
- کار با `ObjectId`، `projection`, `sort`, `aggregate`

### اجرا

```bash
cd 05-MongoDB
npm install
npm start
```

اجراي توسعه‌اي:

```bash
npm run dev
```

### نکته

در `index.js` بيشتر نمونه‌ها کامنت شده‌اند؛ براي تست هر سناريو، بلاک موردنظر را uncomment کنيد.

---

## 06 - Design Pattern (Singleton + MongoDB)

مسير: `06-Design-Pattern`

### چي ياد مي‌گيريد؟

- پياده‌سازي Singleton براي اتصال DB
- reuse کردن يک اتصال مشترک در اپ

### اجرا

```bash
cd 06-Design-Pattern
npm install
npm start
```

اجراي توسعه‌اي:

```bash
npm run dev
```

---

## 07 - OS & Path Module

مسير: `07-os-path-module`

### چي ياد مي‌گيريد؟

- کار با `path` (`join`, `basename`, `dirname`, `extname`, `parse`, `normalize`)
- خواندن اطلاعات سيستم با `os` (cpu، memory، user، network)

### اجرا

```bash
cd 07-os-path-module
npm install
npm start
```

---

## 08 - Buffer & Stream

مسير: `08-buffer-stream`

### چي ياد مي‌گيريد؟

- مفاهيم Buffer
- Readable/Writable Stream
- `pipe()` براي انتقال داده بين stream ها
- stream روي HTTP
- ورودي استاندارد (`stdin`)

### اجرا

```bash
cd 08-buffer-stream
npm install
npm start
```

### نکته

نمونه‌ها در `index.js` به شکل کامنت‌شده هستند. براي هر سناريو، بخش موردنظر را فعال کنيد.

---

## 09 - HTTP Video Streaming

مسير: `09-http-stream-video`

### چي ياد مي‌گيريد؟

- پخش فايل ويديو با HTTP
- پشتيباني از `Range Requests` و پاسخ `206 Partial Content`
- استريم chunk-by-chunk براي بهينه‌سازي مصرف حافظه

### اجرا

```bash
cd 09-http-stream-video
npm install
npm start
```

سپس مرورگر:

`http://localhost:3000`

### نکته مهم

فايل `server.js` انتظار دارد فايل ويديو با نام `black-video.webm` داخل همين پوشه باشد.
اگر فايل وجود نداشته باشد، اجرا با خطا مواجه مي‌شود.

---

## پيشنهاد مسير يادگيري

1. `01` و `02`: درک ماژول‌ها
2. `04` و `07`: آشنايي با ماژول‌هاي داخلي Node
3. `03`: طراحي API خام
4. `08` و `09`: مفاهيم پيشرفته‌تر استريم
5. `05` و `06`: اتصال به MongoDB و الگوهاي طراحي

## عيب‌يابي سريع

- خطاي `EADDRINUSE: 3000`:
  - پورت 3000 توسط برنامه ديگري اشغال است (پروسه را ببنديد يا پورت را عوض کنيد)
- خطاي MongoDB connection:
  - از اجرا بودن سرويس MongoDB و درست بودن آدرس اتصال مطمئن شويد
- خطاي فايل پيدا نشد در بخش ويديو:
  - وجود `black-video.webm` را در پوشه `09-http-stream-video` بررسي کنيد

## مشارکت

اگر بخواهيد، مي‌توانيم در مرحله بعد اين README را با موارد زير هم ارتقا بدهيم:

- اضافه کردن `LICENSE`
- اضافه کردن اسکرين‌شات يا GIF
- نوشتن تست براي API بخش `03`
- يک اسکریپت ريشه براي اجراي آسان همه بخش‌ها
