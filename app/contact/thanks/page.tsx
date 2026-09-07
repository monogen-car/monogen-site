import { CheckCircle2 } from 'lucide-react';

export const metadata = { title: 'お問い合わせを受け付けました | MONOGEN' };

export default function ContactThanksPage() {
  return <main className="legal-page"><header className="legal-header"><div className="container"><a className="brand" href="/"><span className="brand-mark">M</span><span>MONOGEN</span></a></div></header><section className="thanks-page"><CheckCircle2 size={48} /><p className="eyebrow">Thank you</p><h1>お問い合わせを<br />受け付けました。</h1><p>内容を確認のうえ、担当者よりご連絡します。</p><a className="form-submit" href="/">トップページへ戻る</a></section></main>;
}
