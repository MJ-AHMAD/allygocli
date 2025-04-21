import type React from "react"
import Link from "next/link"
import {
  Terminal,
  Command,
  GitBranch,
  Server,
  CheckCircle2,
  Shield,
  Zap,
  Clock,
  Globe,
  Download,
  Gift,
  CreditCard,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OverviewArPage() {
  return (
    <div dir="rtl" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      {/* Hero Section */}
      <section className="py-12 md:py-20 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">نظرة عامة على مشروع تي-ألي سي إل آي</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مرجعك الشامل لسطر الأوامر ومجموعة أدوات لباورشل، موجه الأوامر، جيت باش، نود.جي إس والمزيد.
          </p>
        </div>

        <Card className="border-2 border-primary/10 shadow-lg w-full mx-auto mb-12">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl md:text-3xl text-center">مهمة المشروع</CardTitle>
            <CardDescription className="text-center text-base">
              توفير دليل كامل لواجهات سطر الأوامر المختلفة مع أمثلة عملية وأدوات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              تم تصميم تي-ألي سي إل آي ليكون مصدرك الأساسي لجميع احتياجات سطر الأوامر، سواء كنت مبتدئًا تتعلم الأساسيات
              أو خبيرًا تبحث عن تقنيات متقدمة. تجمع منصتنا بين وثائق شاملة وأدوات قوية لتعزيز تجربتك في سطر الأوامر.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Terminal className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">مرجع الأوامر</h3>
                <p className="text-sm text-muted-foreground">وثائق شاملة لبيئات سطر الأوامر المتعددة</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">أدوات الإنتاجية</h3>
                <p className="text-sm text-muted-foreground">أدوات برمجية لتعزيز سير عملك في سطر الأوامر</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">حلول الأمان</h3>
                <p className="text-sm text-muted-foreground">أدوات لتأمين أنظمتك والحفاظ على الامتثال</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>الميزات الرئيسية</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>دعم متعدد البيئات (باورشل، موجه الأوامر، جيت باش، نود.جي إس)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>هيكل أوامر منظم مع أمثلة عملية</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>وظائف بحث متقدمة عبر جميع البيئات</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>وثائق مفصلة مع تمييز بناء الجملة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>تصميم متجاوب لأجهزة سطح المكتب والأجهزة المحمولة</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>الجمهور المستهدف</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>المطورون الذين يسعون لتحسين كفاءة سطر الأوامر</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>مسؤولو النظام الذين يديرون الخوادم والشبكات</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>محترفو DevOps الذين يقومون بأتمتة سير العمل</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>الطلاب الذين يتعلمون أساسيات سطر الأوامر</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>محترفو تكنولوجيا المعلومات الذين يبحثون عن مواد مرجعية</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products and Services Section */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">المنتجات والخدمات</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            استكشف مجموعتنا الشاملة من أدوات وخدمات سطر الأوامر
          </p>
        </div>

        <Tabs defaultValue="command-line" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="command-line">أدوات سطر الأوامر</TabsTrigger>
            <TabsTrigger value="system-admin">إدارة النظام</TabsTrigger>
            <TabsTrigger value="development">أدوات التطوير</TabsTrigger>
            <TabsTrigger value="automation">الأتمتة والإنتاجية</TabsTrigger>
            <TabsTrigger value="security">الأمان والامتثال</TabsTrigger>
          </TabsList>

          {/* Command Line Tools */}
          <TabsContent value="command-line" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="سي إل آي ماستر"
                description="واجهة سطر أوامر متقدمة مع اقتراحات ذكية وإكمال تلقائي"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="فريميوم"
                features={["اقتراحات أوامر ذكية", "توافق عبر المنصات", "أسماء مستعارة واختصارات مخصصة"]}
                price="من 9.99$ شهريًا"
              />
              <ProductCard
                name="تيرمينال برو"
                description="محاكي طرفية احترافي مع ميزات متقدمة للمطورين"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["علامات تبويب متعددة وعروض مقسمة", "سمات وخطوط قابلة للتخصيص", "تكامل SSH و FTP"]}
                price="من 12.99$ شهريًا"
                popular={true}
              />
              <ProductCard
                name="مستكشف الأوامر"
                description="مستكشف أوامر تفاعلي مع وثائق مفصلة وأمثلة"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="مجاني"
                features={["قاعدة بيانات أوامر شاملة", "أمثلة تفاعلية", "تمييز بناء جملة الأوامر"]}
                price="مجاني"
              />
              <ProductCard
                name="شيل سكريبتر"
                description="محرر نصوص شيل قوي مع إمكانيات التصحيح والاختبار"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="دفعة واحدة"
                features={["تمييز بناء الجملة لأصداف متعددة", "مصحح أخطاء متكامل", "إطار اختبار النصوص البرمجية"]}
                price="من 49.99$"
              />
              <ProductCard
                name="كوماند هاب"
                description="إدارة أوامر مركزية للفرق والمؤسسات"
                icon={<Terminal className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["مشاركة الأوامر للفريق", "التحكم في الوصول المستند إلى الأدوار", "تدقيق وتسجيل الأوامر"]}
                price="من 14.99$ شهريًا"
              />
            </div>
          </TabsContent>

          {/* System Administration */}
          <TabsContent value="system-admin" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="مراقب النظام"
                description="أداة شاملة لمراقبة النظام وتحليل الأداء"
                icon={<Server className="h-8 w-8 text-primary" />}
                pricingModel="فريميوم"
                features={["مراقبة الموارد في الوقت الفعلي", "تحليلات الأداء", "إشعارات التنبيه"]}
                price="من 19.99$ شهريًا"
              />
              <ProductCard
                name="محلل الشبكة"
                description="مجموعة أدوات متقدمة لتحليل الشبكة واستكشاف الأخطاء وإصلاحها"
                icon={<Globe className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["تحليل حركة مرور الشبكة", "مراقبة عرض النطاق الترددي", "فحص البروتوكول"]}
                price="من 24.99$ شهريًا"
                popular={true}
              />
              <ProductCard
                name="باكأب ماستر"
                description="حل نسخ احتياطي آلي للبيانات والأنظمة الحرجة"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="دفعة واحدة"
                features={["نسخ احتياطي مجدول", "نسخ احتياطي تزايدي وتفاضلي", "تكامل التخزين السحابي"]}
                price="من 79.99$"
              />
              <ProductCard
                name="مدير التصحيح"
                description="تصحيح النظام الآلي وإدارة التحديث"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["نشر التصحيح الآلي", "تقارير الامتثال", "قدرات التراجع"]}
                price="من 19.99$ شهريًا"
              />
            </div>
          </TabsContent>

          {/* Development Tools */}
          <TabsContent value="development" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="كود كوماندر"
                description="أداة إنشاء وتسقيل الكود من سطر الأوامر"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="مجاني"
                features={["قوالب المشروع", "تسقيل الكود", "تكامل الإطار"]}
                price="مجاني"
              />
              <ProductCard
                name="جيت ويزارد"
                description="واجهة سطر أوامر جيت متقدمة مع التصور"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="فريميوم"
                features={["إدارة الفروع المرئية", "إعادة القاعدة التفاعلية", "حل التعارض"]}
                price="من 14.99$ شهريًا"
                popular={true}
              />
              <ProductCard
                name="بيئة التطوير"
                description="إعداد وتكوين بيئة تطوير فوري"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["إعداد البيئة بأمر واحد", "إعدادات مسبقة للغة والإطار", "تكامل دوكر"]}
                price="من 19.99$ شهريًا"
              />
              <ProductCard
                name="مختبر API"
                description="أداة اختبار وتوثيق API من سطر الأوامر"
                icon={<Zap className="h-8 w-8 text-primary" />}
                pricingModel="دفعة واحدة"
                features={["اختبار طلب HTTP", "نصوص اختبار آلية", "التحقق من صحة الاستجابة"]}
                price="من 59.99$"
              />
            </div>
          </TabsContent>

          {/* Automation & Productivity */}
          <TabsContent value="automation" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="مؤتمت المهام"
                description="أداة قوية لأتمتة المهام والجدولة"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="فريميوم"
                features={["منشئ سير عمل مرئي", "مهام مجدولة", "منطق شرطي"]}
                price="من 9.99$ شهريًا"
              />
              <ProductCard
                name="مكتبة النصوص البرمجية"
                description="مجموعة منسقة من نصوص وأدوات الإنتاجية"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["مئات النصوص البرمجية الجاهزة للاستخدام", "تحديثات منتظمة", "خيارات التخصيص"]}
                price="من 7.99$ شهريًا"
                popular={true}
              />
              <ProductCard
                name="فايل ويزارد"
                description="أداة متقدمة لإدارة وتنظيم الملفات"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="دفعة واحدة"
                features={["عمليات ملف دفعية", "بحث وتصفية متقدمة", "اكتشاف التكرار"]}
                price="من 39.99$"
              />
              <ProductCard
                name="مجدول الأوامر"
                description="جدولة أوامر متقدمة وإدارة التنفيذ"
                icon={<Clock className="h-8 w-8 text-primary" />}
                pricingModel="مجاني"
                features={["جدولة على غرار كرون", "إدارة التبعيات", "تسجيل التنفيذ"]}
                price="مجاني"
              />
            </div>
          </TabsContent>

          {/* Security & Compliance */}
          <TabsContent value="security" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="ماسح الأمان"
                description="فحص أمان شامل وتقييم الثغرات"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["فحص الثغرات", "التحقق من الامتثال", "إرشادات المعالجة"]}
                price="من 29.99$ شهريًا"
                popular={true}
              />
              <ProductCard
                name="أدوات التشفير"
                description="أدوات تشفير وأمان سطر الأوامر"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="فريميوم"
                features={["تشفير/فك تشفير الملفات", "إدارة كلمات المرور", "التعامل مع الشهادات"]}
                price="من 14.99$ شهريًا"
              />
              <ProductCard
                name="مدير الامتثال"
                description="أداة التحقق من الامتثال وإعداد التقارير الآلية"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="اشتراك"
                features={["تنفيذ السياسة", "تقارير الامتثال", "سجل التدقيق"]}
                price="من 49.99$ شهريًا"
              />
              <ProductCard
                name="التحكم في الوصول"
                description="نظام متقدم لإدارة الأذونات والتحكم في الوصول"
                icon={<Shield className="h-8 w-8 text-primary" />}
                pricingModel="دفعة واحدة"
                features={["التحكم في الوصول المستند إلى الأدوار", "أذونات دقيقة", "تسجيل التدقيق"]}
                price="من 89.99$"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">نماذج التسعير</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            نقدم خيارات تسعير مرنة لتناسب الاحتياجات والميزانيات المختلفة
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <PricingModelCard
              title="مجاني"
              icon={<Gift className="h-6 w-6 text-green-600" />}
              description="أدوات أساسية بدون تكلفة"
              color="green"
            />
            <PricingModelCard
              title="فريميوم"
              icon={<Gift className="h-6 w-6 text-blue-600" />}
              description="ميزات أساسية مجانية مع ترقيات متميزة"
              color="blue"
            />
            <PricingModelCard
              title="اشتراك"
              icon={<CreditCard className="h-6 w-6 text-purple-600" />}
              description="مدفوعات منتظمة للوصول المستمر"
              color="purple"
            />
            <PricingModelCard
              title="دفعة واحدة"
              icon={<Download className="h-6 w-6 text-amber-600" />}
              description="دفعة واحدة للوصول الدائم"
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* CLI Environments Section */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">بيئات سطر الأوامر المدعومة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            وثائق وأدوات شاملة لواجهات سطر الأوامر المتعددة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <EnvironmentCard
            title="باورشل"
            icon={<Command className="h-10 w-10 text-primary" />}
            description="إطار عمل حديث لأتمتة المهام وإدارة التكوين"
            commandCount="+500"
          />
          <EnvironmentCard
            title="موجه الأوامر"
            icon={<Terminal className="h-10 w-10 text-primary" />}
            description="مفسر سطر أوامر ويندوز التقليدي"
            commandCount="+300"
          />
          <EnvironmentCard
            title="جيت باش"
            icon={<GitBranch className="h-10 w-10 text-primary" />}
            description="سطر أوامر شبيه بيونكس للتحكم في إصدار جيت"
            commandCount="+250"
          />
          <EnvironmentCard
            title="نود.جي إس"
            icon={<Server className="h-10 w-10 text-primary" />}
            description="أوامر وأدوات بيئة تشغيل جافاسكريبت"
            commandCount="+200"
          />
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/commands">تصفح جميع الأوامر</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg w-full mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لإتقان سطر الأوامر؟</h2>
          <p className="text-xl text-muted-foreground mb-8">
            استكشف وثائقنا الشاملة وأدواتنا وخدماتنا لتعزيز تجربتك في سطر الأوامر.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">استكشاف المنتجات</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">عرض الأسعار</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Complete Product List */}
      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">كتالوج المنتجات الكامل</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">قائمة شاملة بجميع منتجاتنا وخدماتنا</p>
        </div>

        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-12">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold sm:pl-6">
                  اسم المنتج
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold hidden md:table-cell">
                  الفئة
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold hidden lg:table-cell">
                  نموذج التسعير
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold">
                  السعر الأولي
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                  الإجراء
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-background">
              {productList.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? undefined : "bg-muted/30"}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6">
                    <div className="flex items-center gap-2">
                      {product.popular && (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          شائع
                        </Badge>
                      )}
                      {product.nameAr || product.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-muted-foreground hidden md:table-cell">
                    {product.categoryAr || product.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm hidden lg:table-cell">
                    <PricingBadge model={product.pricingModel} modelAr={product.pricingModelAr} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {product.price === "Free" ? (
                      <span className="text-green-600 font-medium">مجاني</span>
                    ) : (
                      product.priceAr || product.price
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-left">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/products#${product.id}`}>التفاصيل</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/products">عرض جميع المنتجات</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Product Card Component
function ProductCard({
  name,
  description,
  icon,
  pricingModel,
  features,
  price,
  popular = false,
}: {
  name: string
  description: string
  icon: React.ReactNode
  pricingModel: string
  features: string[]
  price: string
  popular?: boolean
}) {
  return (
    <Card className={`flex flex-col h-full ${popular ? "border-primary shadow-md" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle>{name}</CardTitle>
          </div>
          {popular && <Badge className="bg-primary">شائع</Badge>}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <PricingBadge model={pricingModel} />
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <div className="flex justify-between items-center w-full mb-4">
            <span className="text-sm text-muted-foreground">السعر</span>
            <span className="font-medium">{price}</span>
          </div>
          <Button asChild className="w-full">
            <Link href="/products">معرفة المزيد</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Pricing Model Card Component
function PricingModelCard({
  title,
  icon,
  description,
  color,
}: {
  title: string
  icon: React.ReactNode
  description: string
  color: "green" | "blue" | "purple" | "amber"
}) {
  const colorClasses = {
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
    amber: "bg-amber-50 border-amber-200",
  }

  return (
    <Card className={`border-2 ${colorClasses[color]}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/pricing/${title.toLowerCase()}-model`}>معرفة المزيد</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Environment Card Component
function EnvironmentCard({
  title,
  icon,
  description,
  commandCount,
}: {
  title: string
  icon: React.ReactNode
  description: string
  commandCount: string
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex flex-col items-center text-center">
          {icon}
          <CardTitle className="mt-4">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          {commandCount} أمر
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline">
          <Link href={`/commands/${title.toLowerCase().replace(" ", "-")}`}>تصفح الأوامر</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Pricing Badge Component
function PricingBadge({ model, modelAr }: { model: string; modelAr?: string }) {
  const displayModel = modelAr || model

  const badgeClasses = {
    Free: "bg-green-50 text-green-700 border-green-200",
    Freemium: "bg-blue-50 text-blue-700 border-blue-200",
    Subscription: "bg-purple-50 text-purple-700 border-purple-200",
    "One-time": "bg-amber-50 text-amber-700 border-amber-200",
    مجاني: "bg-green-50 text-green-700 border-green-200",
    فريميوم: "bg-blue-50 text-blue-700 border-blue-200",
    اشتراك: "bg-purple-50 text-purple-700 border-purple-200",
    "دفعة واحدة": "bg-amber-50 text-amber-700 border-amber-200",
  }

  const icons = {
    Free: <Gift className="h-3 w-3 mr-1" />,
    Freemium: <Gift className="h-3 w-3 mr-1" />,
    Subscription: <CreditCard className="h-3 w-3 mr-1" />,
    "One-time": <Download className="h-3 w-3 mr-1" />,
    مجاني: <Gift className="h-3 w-3 mr-1" />,
    فريميوم: <Gift className="h-3 w-3 mr-1" />,
    اشتراك: <CreditCard className="h-3 w-3 mr-1" />,
    "دفعة واحدة": <Download className="h-3 w-3 mr-1" />,
  }

  return (
    <Badge variant="outline" className={badgeClasses[displayModel] || badgeClasses[model]}>
      {icons[displayModel] || icons[model]}
      {displayModel}
    </Badge>
  )
}

// Complete product list data
const productList = [
  {
    id: "cli-master",
    name: "CLI Master",
    nameAr: "سي إل آي ماستر",
    category: "Command Line Tools",
    categoryAr: "أدوات سطر الأوامر",
    pricingModel: "Freemium",
    pricingModelAr: "فريميوم",
    price: "From $9.99/mo",
    priceAr: "من 9.99$ شهريًا",
  },
  {
    id: "terminal-pro",
    name: "Terminal Pro",
    nameAr: "تيرمينال برو",
    category: "Command Line Tools",
    categoryAr: "أدوات سطر الأوامر",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $12.99/mo",
    priceAr: "من 12.99$ شهريًا",
    popular: true,
  },
  {
    id: "command-explorer",
    name: "Command Explorer",
    nameAr: "مستكشف الأوامر",
    category: "Command Line Tools",
    categoryAr: "أدوات سطر الأوامر",
    pricingModel: "Free",
    pricingModelAr: "مجاني",
    price: "Free",
    priceAr: "مجاني",
  },
  {
    id: "shell-scripter",
    name: "Shell Scripter",
    nameAr: "شيل سكريبتر",
    category: "Command Line Tools",
    categoryAr: "أدوات سطر الأوامر",
    pricingModel: "One-time",
    pricingModelAr: "دفعة واحدة",
    price: "From $49.99",
    priceAr: "من 49.99$",
  },
  {
    id: "command-hub",
    name: "Command Hub",
    nameAr: "كوماند هاب",
    category: "Command Line Tools",
    categoryAr: "أدوات سطر الأوامر",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $14.99/mo",
    priceAr: "من 14.99$ شهريًا",
  },
  {
    id: "system-monitor",
    name: "System Monitor",
    nameAr: "مراقب النظام",
    category: "System Administration",
    categoryAr: "إدارة النظام",
    pricingModel: "Freemium",
    pricingModelAr: "فريميوم",
    price: "From $19.99/mo",
    priceAr: "من 19.99$ شهريًا",
  },
  {
    id: "network-analyzer",
    name: "Network Analyzer",
    nameAr: "محلل الشبكة",
    category: "System Administration",
    categoryAr: "إدارة النظام",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $24.99/mo",
    priceAr: "من 24.99$ شهريًا",
    popular: true,
  },
  {
    id: "backup-master",
    name: "Backup Master",
    nameAr: "باكأب ماستر",
    category: "System Administration",
    categoryAr: "إدارة النظام",
    pricingModel: "One-time",
    pricingModelAr: "دفعة واحدة",
    price: "From $79.99",
    priceAr: "من 79.99$",
  },
  {
    id: "patch-manager",
    name: "Patch Manager",
    nameAr: "مدير التصحيح",
    category: "System Administration",
    categoryAr: "إدارة النظام",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $19.99/mo",
    priceAr: "من 19.99$ شهريًا",
  },
  {
    id: "code-commander",
    name: "Code Commander",
    nameAr: "كود كوماندر",
    category: "Development Tools",
    categoryAr: "أدوات التطوير",
    pricingModel: "Free",
    pricingModelAr: "مجاني",
    price: "Free",
    priceAr: "مجاني",
  },
  {
    id: "git-wizard",
    name: "Git Wizard",
    nameAr: "جيت ويزارد",
    category: "Development Tools",
    categoryAr: "أدوات التطوير",
    pricingModel: "Freemium",
    pricingModelAr: "فريميوم",
    price: "From $14.99/mo",
    priceAr: "من 14.99$ شهريًا",
    popular: true,
  },
  {
    id: "dev-environment",
    name: "Dev Environment",
    nameAr: "بيئة التطوير",
    category: "Development Tools",
    categoryAr: "أدوات التطوير",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $19.99/mo",
    priceAr: "من 19.99$ شهريًا",
  },
  {
    id: "api-tester",
    name: "API Tester",
    nameAr: "مختبر API",
    category: "Development Tools",
    categoryAr: "أدوات التطوير",
    pricingModel: "One-time",
    pricingModelAr: "دفعة واحدة",
    price: "From $59.99",
    priceAr: "من 59.99$",
  },
  {
    id: "task-automator",
    name: "Task Automator",
    nameAr: "مؤتمت المهام",
    category: "Automation & Productivity",
    categoryAr: "الأتمتة والإنتاجية",
    pricingModel: "Freemium",
    pricingModelAr: "فريميوم",
    price: "From $9.99/mo",
    priceAr: "من 9.99$ شهريًا",
  },
  {
    id: "script-library",
    name: "Script Library",
    nameAr: "مكتبة النصوص البرمجية",
    category: "Automation & Productivity",
    categoryAr: "الأتمتة والإنتاجية",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $7.99/mo",
    priceAr: "من 7.99$ شهريًا",
    popular: true,
  },
  {
    id: "file-wizard",
    name: "File Wizard",
    nameAr: "فايل ويزارد",
    category: "Automation & Productivity",
    categoryAr: "الأتمتة والإنتاجية",
    pricingModel: "One-time",
    pricingModelAr: "دفعة واحدة",
    price: "From $39.99",
    priceAr: "من 39.99$",
  },
  {
    id: "command-scheduler",
    name: "Command Scheduler",
    nameAr: "مجدول الأوامر",
    category: "Automation & Productivity",
    categoryAr: "الأتمتة والإنتاجية",
    pricingModel: "Free",
    pricingModelAr: "مجاني",
    price: "Free",
    priceAr: "مجاني",
  },
  {
    id: "security-scanner",
    name: "Security Scanner",
    nameAr: "ماسح الأمان",
    category: "Security & Compliance",
    categoryAr: "الأمان والامتثال",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $29.99/mo",
    priceAr: "من 29.99$ شهريًا",
    popular: true,
  },
  {
    id: "crypto-tools",
    name: "Crypto Tools",
    nameAr: "أدوات التشفير",
    category: "Security & Compliance",
    categoryAr: "الأمان والامتثال",
    pricingModel: "Freemium",
    pricingModelAr: "فريميوم",
    price: "From $14.99/mo",
    priceAr: "من 14.99$ شهريًا",
  },
  {
    id: "compliance-manager",
    name: "Compliance Manager",
    nameAr: "مدير الامتثال",
    category: "Security & Compliance",
    categoryAr: "الأمان والامتثال",
    pricingModel: "Subscription",
    pricingModelAr: "اشتراك",
    price: "From $49.99/mo",
    priceAr: "من 49.99$ شهريًا",
  },
  {
    id: "access-control",
    name: "Access Control",
    nameAr: "التحكم في الوصول",
    category: "Security & Compliance",
    categoryAr: "الأمان والامتثال",
    pricingModel: "One-time",
    pricingModelAr: "دفعة واحدة",
    price: "From $89.99",
    priceAr: "من 89.99$",
  },
]
