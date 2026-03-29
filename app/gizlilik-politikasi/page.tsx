import tr from '@/messages/tr.json';
import GizlilikPolitikasiClient from './gizlilik-politikasi-client';

/** Türkçe gizlilik politikası — metin sunucuda yüklenir (Chrome’da useEffect/hidrasyon takılması olmaz). */
export default function GizlilikPolitikasiPage() {
  return <GizlilikPolitikasiClient privacy={tr.legal.privacy} />;
}
