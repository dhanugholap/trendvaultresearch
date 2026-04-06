'use client';
import Image from 'next/image';

const clients = [
    { name: 'amazon', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/amazone.png' },
    { name: 'cloudflare', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/cloudflare.png' },
    { name: 'comcast', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/comcast.png' },
    { name: 'corning', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/corning.png' },
    { name: 'eastman', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/eastman.png' },
    { name: 'eaton', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/eaton.png' },
    { name: 'etas', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/ETAS.png' },
    { name: 'exxonmobil', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/ExonMobil.png' },
    { name: 'falken', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/falken.png' },
    { name: 'honeywell', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/honeywell.png' },
    { name: 'kerry', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/kerry.png' },
    { name: 'kogas', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/Kogas.png' },
    { name: 'leaseplan', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/LeasePlan.png' },
    { name: 'nestle', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/nestle.png' },
    { name: 'olympus', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/olympus.png' },
    { name: 'pepsico', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/pepsico.png' },
    { name: 'philips', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/philips.png' },
    { name: 'providence', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/Providence.png' },
    { name: 'totalenergies', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/total.png' },
    { name: 'zf', src: 'https://tvr-img.s3.amazonaws.com/clients/tvr/zf.png' },
];

export default function ClientLogos() {
    return (
        <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Trusted by leading companies worldwide</p>
            </div>
            <div className="relative">
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                    {[...clients, ...clients].map((c, i) => (
                        <div
                            key={i}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-xl flex-shrink-0 border border-gray-100 hover:border-blue-200 transition-all"
                            style={{ minWidth: '130px', height: '60px', background: '#f9fafb' }}
                        >
                            <Image
                                src={c.src}
                                alt={c.name}
                                width={100}
                                height={40}
                                className="object-contain max-h-10 grayscale hover:grayscale-0 transition-all"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
