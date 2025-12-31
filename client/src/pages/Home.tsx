import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Gift, DollarSign, TrendingUp, Zap, Video, Users, Clock, Home, BarChart3, Lightbulb, Building2, PieChart, Award, Menu, X } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleContactClick = () => {
    window.open("https://lin.ee/Sjm0DTi", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="司法書士法人そうぞう" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition">
              サービスについて
            </a>
            <a href="#features" className="text-sm font-medium hover:text-blue-600 transition">
              特徴
            </a>
            <a href="#curriculum" className="text-sm font-medium hover:text-blue-600 transition">
              講座内容
            </a>
            <a href="#support" className="text-sm font-medium hover:text-blue-600 transition">
              サポート
            </a>
          </nav>
          <Button onClick={handleContactClick} className="hidden md:flex btn-primary text-xl px-12 py-7">
            LINEで受講を申し込む
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container py-4 flex flex-col gap-4">
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
                サービスについて
              </a>
              <a href="#features" className="text-sm font-medium hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
                特徴
              </a>
              <a href="#curriculum" className="text-sm font-medium hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
                講座内容
              </a>
              <a href="#support" className="text-sm font-medium hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
                サポート
              </a>
              <Button onClick={() => { handleContactClick(); setMobileMenuOpen(false); }} className="btn-primary text-base md:text-xl px-8 md:px-12 py-5 md:py-7 w-full">
                LINEで受講を申し込む
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Full Design */}
      <section className="bg-yellow-50 text-gray-900 py-12 md:py-20 relative overflow-hidden">
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Illustration - Full Width */}
            <div className="w-full md:w-auto flex justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}hero-smart-startup.png`} 
                alt="スマート創業講座" 
                className="w-4/5 md:w-full max-w-4xl h-auto"
              />
            </div>
          </div>
          
          {/* CTA Button Below */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleContactClick}
              className="btn-primary text-base md:text-xl px-8 md:px-12 py-5 md:py-7"
            >
              LINEで受講を申し込む
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container max-w-5xl mx-auto">
          {/* Banner Image Header */}
          <div className="flex justify-center mb-12">
            <img src={`${import.meta.env.BASE_URL}about-banner-illust.png`} alt="スマート創業支援講座とは" className="w-full max-w-4xl rounded-lg shadow-sm" />
          </div>
          <div style={{backgroundColor: '#f0f4ff'}} className="p-8 md:p-12 rounded-lg border-l-4 border-blue-600">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
              スマート創業支援講座は、福岡市が実施する「特定創業支援等事業」として認定された創業支援講座です。
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              国の認定を受けた制度のもと、創業に必要な4つの知識（経営・財務・販路拡大・人材育成）を、オンラインで体系的に学べます。
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          {/* Banner Image Header */}
          <div className="flex justify-center mb-12">
            <img src={`${import.meta.env.BASE_URL}benefits-banner-illust.png`} alt="受講修了で得られるメリット" className="w-full max-w-4xl rounded-lg shadow-sm" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-2xl"><DollarSign className="h-8 w-8 text-blue-600" /></CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  会社設立時の登録免許税半額軽減
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  <strong>株式会社：</strong> 15万円 → 7.5万円
                </p>
                <p className="text-sm">
                  <strong>合同会社：</strong> 6万円 → 3万円
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-2xl"><Building2 className="h-8 w-8 text-red-500" /></CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  創業関連保証の利用開始月前倒し
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  通常2ヶ月前 → <strong>6ヶ月前</strong>から利用可能
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-2xl"><TrendingUp className="h-8 w-8 text-green-500" /></CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  日本政策金融公庫の金利優遇
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  新規開業資金の貸付利率引き下げ
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-2xl"><Award className="h-8 w-8 text-purple-500" /></CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  小規模事業者持続化補助金
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  「創業枠」が使えるようになります
                </p>
                <p className="text-sm">
                  通常50万円 → <strong>最大200万円</strong>まで
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            ※これらのメリットを受けるには、受講修了後に福岡市から発行される証明書が必要です
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-gradient-to-br from-yellow-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full opacity-20 -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32 -mb-32"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          {/* Banner Image Header */}
          <div className="flex justify-center mb-12">
            <img src={`${import.meta.env.BASE_URL}features-banner-illust.png`} alt="オンライン学習 & 柔軟性" className="w-full max-w-4xl rounded-lg shadow-sm" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4"><Video className="h-12 w-12 text-blue-600" /></div>
              <h3 className="text-xl font-bold mb-3">完全オンデマンド配信</h3>
              <p className="text-gray-600">
                24時間365日、あなたの都合の良い時間に学習可能。移動時間ゼロで効率的に知識を習得できます。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4"><Clock className="h-12 w-12 text-green-600" /></div>
              <h3 className="text-xl font-bold mb-3">最短1日で修了可能</h3>
              <p className="text-gray-600">
                全4回の講座（合計約6時間）を自分のペースで進められます。週末にまとめて受講することも可能です。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4"><Users className="h-12 w-12 text-orange-500" /></div>
              <h3 className="text-xl font-bold mb-3">専門家による質の高い講義</h3>
              <p className="text-gray-600">
                創業支援の経験豊富な専門家が講師を担当。実務に即した具体的な知識が身につきます。
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleContactClick}
              className="btn-primary text-base md:text-xl px-8 md:px-12 py-5 md:py-7"
            >
              LINEで受講を申し込む
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section-padding bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            講座内容（全4章）
          </h2>
          
          <div className="space-y-6">
            {/* Chapter 1 */}
            <div className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg hover:bg-gray-50 transition">
              <div className="md:w-1/4 flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4">
                <span className="text-blue-800 font-bold text-lg">第1章</span>
                <span className="text-2xl font-bold mt-2">経営</span>
                <span className="text-sm text-gray-600 mt-2">約120分</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3">経営の基本と事業計画</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>経営者の心構えとリーダーシップ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>事業計画書の作成方法とポイント</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>ビジネスモデルの構築</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg hover:bg-gray-50 transition">
              <div className="md:w-1/4 flex flex-col items-center justify-center bg-green-100 rounded-lg p-4">
                <span className="text-green-800 font-bold text-lg">第2章</span>
                <span className="text-2xl font-bold mt-2">財務</span>
                <span className="text-sm text-gray-600 mt-2">約60分</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3">資金調達と収支計画</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>創業時の資金調達方法</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>収支計画の立て方と管理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>税務・会計の基礎知識</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg hover:bg-gray-50 transition">
              <div className="md:w-1/4 flex flex-col items-center justify-center bg-orange-100 rounded-lg p-4">
                <span className="text-orange-800 font-bold text-lg">第3章</span>
                <span className="text-2xl font-bold mt-2">人材育成</span>
                <span className="text-sm text-gray-600 mt-2">約30分</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3">組織づくりと人材マネジメント</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>採用の基本と法的手続き</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>人材育成と評価制度</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>労務管理の基礎</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Chapter 4 */}
            <div className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg hover:bg-gray-50 transition">
              <div className="md:w-1/4 flex flex-col items-center justify-center bg-purple-100 rounded-lg p-4">
                <span className="text-purple-800 font-bold text-lg">第4章</span>
                <span className="text-2xl font-bold mt-2">販路拡大</span>
                <span className="text-sm text-gray-600 mt-2">約30分</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3">マーケティングと営業戦略</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>ターゲット設定と市場分析</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>効果的なプロモーション手法</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Webマーケティングの活用</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -ml-32 -mb-32"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          {/* Banner Image Header */}
          <div className="flex justify-center mb-12">
            <img src={`${import.meta.env.BASE_URL}target-banner-illust.png`} alt="こんな方におすすめ：忙しい起業家" className="w-full max-w-4xl rounded-lg shadow-sm" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4"><Clock className="h-10 w-10 text-blue-600" /></div>
              <h3 className="text-xl font-bold mb-2">時間がない方</h3>
              <p className="text-gray-600">
                忙しい中でも効率よく創業知識を身につけたい
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4"><Home className="h-10 w-10 text-green-600" /></div>
              <h3 className="text-xl font-bold mb-2">移動ができない方</h3>
              <p className="text-gray-600">
                会場に通うことが難しい環境にいる
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4"><BarChart3 className="h-10 w-10 text-orange-600" /></div>
              <h3 className="text-xl font-bold mb-2">効率重視の方</h3>
              <p className="text-gray-600">
                無駄な時間を削って、要点だけを学びたい
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4"><Lightbulb className="h-10 w-10 text-yellow-500" /></div>
              <h3 className="text-xl font-bold mb-2">とりあえず聞きたい方</h3>
              <p className="text-gray-600">
                無料なので、まずは情報収集したい
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleContactClick}
              className="btn-secondary text-base md:text-xl px-8 md:px-12 py-5 md:py-7"
            >
              LINEで受講を申し込む
            </Button>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            受講の流れ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 flex flex-col items-center justify-center min-h-64 border-2 border-blue-200 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">情報入力</h3>
              <p className="text-sm text-gray-700 text-center">
                簡単なフォームに必要事項を入力
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 flex flex-col items-center justify-center min-h-64 border-2 border-green-200 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">即時アクセス</h3>
              <p className="text-sm text-gray-700 text-center">
                入力完了後、すぐに学習サイトにアクセス可能
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 flex flex-col items-center justify-center min-h-64 border-2 border-yellow-200 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-yellow-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">動画視聴</h3>
              <p className="text-sm text-gray-700 text-center">
                お好きな時間に6時間の講座を受講
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8 flex flex-col items-center justify-center min-h-64 border-2 border-red-200 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">修了証取得</h3>
              <p className="text-sm text-gray-700 text-center">
                受講完了後、PDF形式の修了証を発行
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section id="support" className="section-padding bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32 -mb-32"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          {/* Banner Image Header */}
          <div className="flex justify-center mb-12">
            <img src={`${import.meta.env.BASE_URL}support-banner-illust.png`} alt="受講後のサポートサービス" className="w-full max-w-4xl rounded-lg shadow-sm" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-2xl"><Building2 className="h-8 w-8 text-blue-600" /></CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  会社設立サポート
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  完全オンライン・効率重視の会社設立手続き
                </p>
                <p className="text-lg font-bold text-blue-600">
                  3万円〜100万円
                </p>
                <p className="text-sm text-gray-600">
                  ライト・ミドル・高額の3プランからお選びいただけます
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-2xl"><PieChart className="h-8 w-8 text-green-600" /></CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  記帳代行サービス
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  設立後の会計業務を完全サポート
                </p>
                <p className="text-lg font-bold text-blue-600">
                  月額1万円〜
                </p>
                <p className="text-sm text-gray-600">
                  規模に応じた柔軟なプランをご用意しています
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            ※今後サービス業向け、製造業向けの特化コンテンツも拡充予定
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-primary text-white py-20 md:py-32">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            今すぐ無料で創業知識を習得しませんか？
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            完全無料・6時間で完結・いつでもどこでも学習可能
          </p>
          <Button
            onClick={handleContactClick}
            className="btn-primary text-base md:text-xl px-8 md:px-12 py-5 md:py-7"
          >
            LINEで受講を申し込む
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <p className="text-sm mt-6 opacity-75">
            ※申し込み完了後、即時で学習サイトにアクセスできます
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center text-sm">
            <p>© 2025 司法書士法人そうぞう. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
