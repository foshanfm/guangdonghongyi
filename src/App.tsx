import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const data = JSON.stringify({
      screen: `${window.screen.width}x${window.screen.height}`,
      lang: navigator.language,
    });
    navigator.sendBeacon('/track', new Blob([data], { type: 'application/json' }));
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col font-sans pb-16">
      
      <main className="w-full max-w-[800px] mx-auto bg-white shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* ========== 公司名称标题栏 ========== */}
        {/* 
          使用 min(10vw, 5rem) 确保在小屏幕上由于相对于视口宽度缩放而保持单行，
          在大屏幕上封顶在 5rem。
        */}
        <header className="w-full py-8 md:py-14 bg-white border-b-4 border-[#2a7df4]/10 overflow-hidden">
          <div className="text-center px-4">
            <h1
              className="font-black text-[#2a7df4] leading-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(1.2rem, 4.8vw, 4.2rem)' }}
            >
              广东泓一生物科技有限公司
            </h1>
            <p
              className="mt-2 font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap opacity-80"
              style={{ fontSize: 'clamp(0.5rem, 1.8vw, 1rem)' }}
            >
              Guangdong Hongyi Biotechnology Co., Ltd.
            </p>
          </div>
        </header>

        {/* ========== 第 1-2 部分：以诚信铸品牌 / 以品质铸市场 (显著缩小以配合标题) ========== */}
        <div className="flex flex-col md:flex-row w-full bg-white px-8 sm:px-16 md:px-24 py-6 gap-4 md:gap-8 justify-center items-center border-b border-slate-50">
          <img src="/1以诚信铸品牌.jpg" className="w-[70%] md:w-[35%] h-auto object-contain block opacity-90" alt="以诚信铸品牌" />
          <img src="/2以品质铸市场.jpg" className="w-[70%] md:w-[35%] h-auto object-contain block opacity-90" alt="以品质铸市场" />
        </div>

        {/* ========== 第 3 部分：品牌墙 ========== */}
        <img src="/3品牌墙.jpg" className="w-full h-auto object-contain block bg-white" alt="品牌墙" />

        {/* ========== 公司产品（6款比例统一）========== */}
        <div className="bg-white py-10 px-4 w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-[#2a7df4] tracking-[0.2em] relative inline-block">
              公司产品
              <span className="absolute -bottom-2 w-1/2 left-1/4 h-1 bg-[#e8892f] rounded-full"></span>
            </h2>
          </div>
          {/* 
            使用 aspect-square 和 p-4 确保无论原始图片比例如何，
            在网格中看起来都是整齐划一的大小。
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="flex flex-col space-y-2">
                <div className="aspect-[3/4] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-slate-100 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/包装${n}.jpg`}
                    className="w-full h-full object-contain"
                    alt={`产品包装 ${n}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== 第 4-5 部分：愿景与使命 ========== */}
        <div className="flex flex-col md:flex-row w-full bg-slate-50">
          <img src="/4愿景.jpg" className="w-full md:w-1/2 h-auto object-contain block" alt="愿景" />
          <img src="/5使命.jpg" className="w-full md:w-1/2 h-auto object-contain block" alt="使命" />
        </div>
        
        {/* ========== 第 6-7 部分：价值观与服务宗旨 ========== */}
        <div className="w-full bg-white flex flex-col">
          <img src="/6价值观.jpg" className="w-full h-auto object-contain block" alt="价值观" />
          <img src="/7服务宗旨.jpg" className="w-full h-auto object-contain block" alt="服务宗旨" />
        </div>
        
      </main>
      
      {/* 底部版权信息 */}
      <footer className="w-full text-center py-8 text-xs text-slate-500 mt-auto bg-slate-100 mb-4">
        <p>© {new Date().getFullYear()} 广东泓一生物科技有限公司 版权所有</p>
      </footer>

      {/* 悬浮拨号栏 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#e8892f] shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.2)]">
        <a href="tel:13590022878" className="flex items-center justify-center space-x-2 py-4 text-white active:bg-[#d07b22] hover:bg-[#d07b22] transition-colors max-w-[800px] mx-auto w-full px-4">
          <div className="bg-white p-2 rounded-full text-[#e8892f] shrink-0">
             <Phone size={24} className="fill-current" />
          </div>
          <div className="flex flex-col ml-3 items-start justify-center">
            <span className="text-sm font-bold opacity-90">业务咨询：何生</span>
            <span className="text-xl font-black tracking-widest leading-tight">点击这里一键拨打热线</span>
          </div>
        </a>
      </div>

    </div>
  );
}
