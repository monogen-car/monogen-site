import { ArrowLeft, ArrowRight, CarFront, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata = { title: '会社概要 | MONOGEN' };

const businesses = [{ icon: CarFront, title: 'レンタカー事業', text: '日常の移動から法人の一時的な増車まで、用途に応じた一台をご用意します。' }, { icon: Sparkles, title: 'カーリース事業', text: '月々定額で、導入からメンテナンスまで見通しのよい車両利用を支えます。' }, { icon: ShieldCheck, title: '保険代理店事業', text: '安心して運転を続けられるよう、暮らしと事業に合った補償をご提案します。' }];

export default function CompanyPage() {
  return <main className="legal-page"><header className="legal-header"><div className="container"><a className="brand" href="/"><span className="brand-mark">M</span><span>MONOGEN</span></a></div></header><article className="company-content"><a className="back-link" href="/"><ArrowLeft size={17} /> トップページへ戻る</a><p className="eyebrow">Company</p><h1>会社概要</h1><p className="legal-lead">人と地域の移動を、もっと心地よく。MONOGENは、クルマを通じて毎日の可能性を広げます。</p><div className="company-vision"><p>Our vision</p><h2>移動の自由を、<br />すべての人の日常へ。</h2></div><section><h2>事業内容</h2><div className="business-grid">{businesses.map(({ icon: Icon, title, text }) => <div key={title}><Icon size={27} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></div>)}</div></section><section className="company-table"><h2>基本情報</h2><dl><div><dt>会社名</dt><dd>株式会社MONOGEN</dd></div><div><dt>事業内容</dt><dd>レンタカー事業／カーリース事業／損害保険代理店事業</dd></div><div><dt>お問い合わせ</dt><dd><a href="mailto:info@monogen.co.jp">info@monogen.co.jp <ArrowRight size={15} /></a></dd></div></dl></section><p className="company-note">所在地・代表者・設立年月日などの会社情報は、正式な登記情報の確認後に掲載します。</p></article></main>;
}
