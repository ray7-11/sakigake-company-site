
import React from "react";
import { motion } from "framer-motion";
import { Globe2, Store, Megaphone, Boxes, Users, ChartColumnBig, ArrowRight, CheckCircle2, Building2, Sparkles, MapPinned, BadgeCheck, Phone, Mail, Handshake } from "lucide-react";

const services = [
  { icon: Globe2, title: "跨境市場進入", desc: "協助品牌從市場評估、定位、進入策略到在地落地，縮短進軍日本、香港與海外市場的時間。" },
  { icon: Store, title: "通路開發與上架", desc: "整合百貨、零售、電商與直播通路規劃，協助品牌建立可執行的上架與銷售節奏。" },
  { icon: Megaphone, title: "品牌與內容經營", desc: "從品牌訊息、商品賣點、內容包裝到在地化溝通，讓曝光不只停留在聲量，而能導向成交。" },
  { icon: Users, title: "KOL / 直播 / 活動整合", desc: "結合媒體、KOL、直播主與實體活動，打造能放大信任感與轉換率的市場推進組合。" },
  { icon: Boxes, title: "代操與專案執行", desc: "涵蓋行政送件、商品建檔、提案整合、採購對接、上架追蹤與後續管理，讓品牌能專注在產品本身。" },
  { icon: ChartColumnBig, title: "營運優化與擴張", desc: "透過數據、回購訊號、檔期與銷售節點回顧，協助品牌優化 SKU 策略並放大海外成長效率。" },
];
const strengths = [
  "不是只做曝光，而是把策略、內容、通路與執行整合成可落地的成長流程",
  "熟悉台灣與日本市場差異，能處理跨境合作常見的溝通與執行落差",
  "可串接零售、百貨、電商、直播、KOL 與活動資源，建立多點轉換路徑",
  "可依品牌階段客製合作模式，從試水溫到正式放大量都能規劃",
];
const markets = [
  { title: "台灣市場", desc: "協助海外品牌進入台灣，串接電商、團購、直播、通路與品牌內容操作。" },
  { title: "日本市場", desc: "從信任建立、內容在地化、媒體 / KOL 佈局到上架推進，打造更適合日本市場的進入路徑。" },
  { title: "香港市場", desc: "提供香港零售導入與 managed service，協助品牌更有效率進入當地百貨與超市體系。" },
];
const process = ["品牌現況與目標盤點", "市場與通路策略規劃", "內容包裝與提案整合", "採購 / 通路 / 合作對接", "上架導入與曝光推進", "數據回顧與持續優化"];
const channels = ["AEON", "Costco", "7-Eleven", "FamilyMart", "Amazon", "Rakuten", "MOMO", "PChome", "Yahoo購物", "friDay購物", "HKTVmall", "Citysuper"];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div><div className="text-xs tracking-[0.32em] text-slate-500">SAKIGAKE MARKETING</div><div className="text-base font-semibold">珍膳美股份有限公司</div></div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">關於我們</a><a href="#services" className="transition hover:text-slate-900">服務項目</a><a href="#markets" className="transition hover:text-slate-900">市場布局</a><a href="#process" className="transition hover:text-slate-900">合作流程</a><a href="#contact" className="transition hover:text-slate-900">聯絡我們</a>
          </nav>
          <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]">立即洽詢</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_30%),linear-gradient(135deg,#071a3c_0%,#0d2c63_45%,#112b52_100%)] text-white">
        <div className="absolute inset-0 opacity-20"><div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-fuchsia-500 blur-3xl" /><div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-400 blur-3xl" /><div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-sky-400 blur-3xl" /></div>
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10"><div className="flex items-center justify-between rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur"><div><div className="text-sm tracking-[0.35em] text-white/70">SAKIGAKE MARKETING</div><div className="text-lg font-semibold">珍膳美股份有限公司</div></div><a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">聯絡我們</a></div></div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-16">
          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90"><Sparkles className="h-4 w-4" />串聯台日・跨界操盤的實行型團隊</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">把品牌、通路、內容與落地執行，<span className="text-fuchsia-300">整合成真正能成交的跨境成長引擎</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-6 max-w-3xl text-lg leading-8 text-white/80">我們不是只做曝光，也不是只做單點代操。我們協助品牌從市場進入、品牌訊息、商品賣點、通路佈局、KOL / 直播、到實際上架與後續運營，讓跨境成長不只是提案，而是可以被執行、被放大的結果。</motion.p>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-wrap gap-4"><a href="#services" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5">看服務內容 <ArrowRight className="h-4 w-4" /></a><a href="#process" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">看合作流程</a></motion.div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">{[["台灣 × 日本 × 香港","跨境市場執行"],["品牌 × 通路 × 內容","整合式操盤"],["策略規劃 × 上架推進","實行導向合作"]].map(([big, small]) => (<div key={big} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"><div className="text-xl font-bold">{big}</div><div className="mt-1 text-sm text-white/70">{small}</div></div>))}</div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="grid gap-5 self-end">
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur"><div className="flex items-center gap-3 text-white/80"><BadgeCheck className="h-5 w-5 text-fuchsia-300" />公司定位</div><div className="mt-4 text-2xl font-bold leading-snug">跨境操盤的實行型團隊</div><p className="mt-3 text-sm leading-7 text-white/75">專注協助品牌進行海外市場進入、通路規劃、在地化內容、合作媒合與落地執行。</p></div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur"><div className="flex items-center gap-3 text-white/80"><MapPinned className="h-5 w-5 text-orange-300" />主要市場</div><div className="mt-4 space-y-3 text-sm text-white/80"><div>台灣市場導入</div><div>日本市場拓展</div><div>香港零售代操</div></div></div>
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur"><div className="flex items-center gap-3 text-white/80"><Building2 className="h-5 w-5 text-sky-300" />合作型態</div><div className="mt-4 space-y-3 text-sm text-white/80"><div>品牌顧問 / 專案合作</div><div>通路開發 / 上架執行</div><div>直播 / KOL / 活動整合</div></div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><div className="text-sm font-bold tracking-[0.28em] text-fuchsia-600">ABOUT US</div><h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">我們在做的，不只是媒合，<span className="text-slate-500">而是把跨境成長真正做出來。</span></h2></div><div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"><p className="text-lg leading-8 text-slate-700">珍膳美股份有限公司是一支跨境執行團隊，專注於品牌進入海外市場時最常卡住的幾件事：不知道怎麼切市場、不知道如何和通路談、不知道內容怎麼在地化、不知道曝光怎麼轉成成交。</p><p className="mt-5 text-lg leading-8 text-slate-700">因此，我們把品牌策略、商品包裝、內容溝通、通路導入、合作推進與後續運營整合起來，幫品牌從「想進去」走到「真的賣進去」。</p></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-sm font-bold tracking-[0.28em] text-fuchsia-600">OUR VALUE</div><h2 className="mt-3 text-3xl font-black md:text-5xl">我們提供的不只是資源，而是可落地的成長方案</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600">從市場切入、內容溝通、合作推進到實際導入，我們幫品牌把抽象的海外拓展，變成可執行、可追蹤、可放大的專案。</p></div><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-xl"><div className="text-sm font-bold tracking-[0.28em] text-fuchsia-300">WHY US</div><h2 className="mt-4 text-3xl font-black md:text-4xl">為什麼選擇我們</h2><div className="mt-8 space-y-4">{strengths.map((item) => (<div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-fuchsia-300" /><p className="leading-7 text-white/85">{item}</p></div>))}</div></div><div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"><div className="text-sm font-bold tracking-[0.28em] text-fuchsia-600">COOPERATION</div><h2 className="mt-4 text-3xl font-black md:text-4xl">合作方式</h2><div className="mt-8 space-y-4">{["品牌顧問型合作：適合剛開始評估海外市場的品牌","專案導入型合作：適合有明確市場與上架目標的品牌","通路開發型合作：適合想加快市場導入速度的品牌","整合代操型合作：適合需要內容、通路、活動一起推進的品牌"].map((item) => (<div key={item} className="rounded-2xl border border-slate-200 p-5 leading-7 text-slate-600">{item}</div>))}</div></div></div></section>

      <section id="services" className="mx-auto max-w-7xl px-6 pb-8 lg:px-10"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-sm font-bold tracking-[0.28em] text-fuchsia-600">SERVICES</div><h2 className="mt-3 text-3xl font-black md:text-5xl">服務內容</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">從前端策略到後端執行，我們提供品牌進軍海外市場所需的核心模組。</p></div></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map((service,index)=>{const Icon=service.icon;return <motion.div key={service.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{delay:index*0.05,duration:0.45}} className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-2xl font-bold">{service.title}</h3><p className="mt-3 leading-7 text-slate-600">{service.desc}</p></motion.div>})}</div></section>

      <section id="markets" className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"><div className="text-sm font-bold tracking-[0.28em] text-fuchsia-600">MARKETS</div><h2 className="mt-4 text-3xl font-black md:text-4xl">市場佈局</h2><div className="mt-8 grid gap-4">{markets.map((market)=><div key={market.title} className="rounded-2xl border border-slate-200 p-5"><div className="text-xl font-bold">{market.title}</div><p className="mt-2 leading-7 text-slate-600">{market.desc}</p></div>)}</div></div><div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-xl"><div className="text-sm font-bold tracking-[0.28em] text-sky-200">CHANNEL & NETWORK</div><h2 className="mt-4 text-3xl font-black md:text-4xl">可對接的通路與合作網絡</h2><p className="mt-4 text-lg leading-8 text-white/80">我們熟悉電商、零售、百貨、直播與內容合作的運作邏輯，能依品牌定位規劃更適合的進入順序與合作方式。</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{channels.map((channel)=><div key={channel} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center font-semibold text-white/90 backdrop-blur">{channel}</div>)}</div></div></div></section>

      <section id="process" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-sm font-bold tracking-[0.28em] text-fuchsia-600">PROCESS</div><h2 className="mt-3 text-3xl font-black md:text-5xl">合作流程</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">用更清楚的節點推進合作，讓品牌知道每一步在做什麼、接下來怎麼放大。</p></div></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{process.map((step,index)=><div key={step} className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-600 text-lg font-black text-white">{String(index+1).padStart(2,"0")}</div><div className="mt-5 text-2xl font-bold">{step}</div><p className="mt-3 leading-7 text-slate-600">依品牌現況與目標，逐步建立可執行的跨境推進路徑，避免只做單點曝光或單點提案。</p></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10"><div className="grid gap-6 lg:grid-cols-3">{[["適合品牌","食品、保健、美妝、生活選物、跨境新創品牌"],["合作方式","顧問合作 / 專案代操 / 通路開發 / 聯合推進"],["合作目標","提升進入效率、降低試錯成本、建立長期銷售基盤"]].map(([title,desc])=><div key={title} className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200"><div className="flex items-center gap-3 text-slate-900"><Handshake className="h-5 w-5 text-fuchsia-600" /><div className="text-xl font-bold">{title}</div></div><p className="mt-3 leading-7 text-slate-600">{desc}</p></div>)}</div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10"><div className="rounded-[40px] bg-[linear-gradient(135deg,#091226_0%,#0d274f_55%,#1d4ed8_100%)] p-8 text-white shadow-2xl md:p-12"><div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div><div className="text-sm font-bold tracking-[0.28em] text-sky-200">CONTACT</div><h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">將複雜的跨國市場運營，交給最懂落地的操盤團隊。</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">如果你想把品牌帶進日本、香港，或希望把海外品牌帶進台灣，歡迎和我們聊聊。我們可以從品牌現況盤點、目標市場評估，到合作模式建議，為你整理出更清楚的下一步。</p></div><div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur"><div className="text-xl font-bold">聯絡我們</div><div className="mt-6 space-y-4 text-white/85"><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Building2 className="h-5 w-5 text-sky-200" />珍膳美股份有限公司 Sakigake Marketing Co., Ltd.</div><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Mail className="h-5 w-5 text-sky-200" />renketsu.tw@gmail.com</div><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Phone className="h-5 w-5 text-sky-200" />+886 2 2592 0180</div></div><a href="mailto:renketsu.tw@gmail.com" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:-translate-y-0.5">立即洽詢合作 <ArrowRight className="h-4 w-4" /></a></div></div></div></section>
    </div>
  );
}
