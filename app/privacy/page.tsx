import { ArrowLeft } from 'lucide-react';

export const metadata = { title: 'プライバシーポリシー | MONOGEN' };

export default function PrivacyPage() {
  return <main className="legal-page"><header className="legal-header"><div className="container"><a className="brand" href="/"><span className="brand-mark">M</span><span>MONOGEN</span></a></div></header><article className="legal-content"><a className="back-link" href="/"><ArrowLeft size={17} /> トップページへ戻る</a><p className="eyebrow">Privacy policy</p><h1>プライバシーポリシー</h1><p className="legal-lead">株式会社MONOGEN（以下「当社」）は、お客様の個人情報を大切に扱い、適切な保護と管理に努めます。</p><section><h2>1. 個人情報の取得</h2><p>当社は、お問い合わせ、各種サービスのお申込み、採用活動などに際し、氏名、連絡先、運転免許証情報その他サービス提供に必要な情報を、適法かつ公正な方法で取得します。</p></section><section><h2>2. 利用目的</h2><p>取得した個人情報は、レンタカー・カーリース・保険に関するご案内、契約の締結および履行、お問い合わせへの対応、サービス改善、法令上必要な対応のために利用します。</p></section><section><h2>3. 第三者提供</h2><p>当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。ただし、業務委託先へ必要な範囲で取り扱いを委託することがあります。</p></section><section><h2>4. 安全管理</h2><p>当社は、個人情報への不正アクセス、紛失、漏えい、改ざんなどを防ぐため、適切な技術的・組織的安全管理措置を講じます。</p></section><section><h2>5. 開示・訂正等のご請求</h2><p>保有する個人情報の開示、訂正、削除、利用停止をご希望の場合は、ご本人確認のうえ、合理的な範囲で対応します。</p></section><section><h2>6. お問い合わせ窓口</h2><p>個人情報の取り扱いに関するお問い合わせは、<a href="mailto:info@monogen.co.jp">info@monogen.co.jp</a> までご連絡ください。</p></section><p className="legal-date">制定日：2026年9月7日</p></article></main>;
}
