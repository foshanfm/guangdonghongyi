import React from 'react';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col font-sans pb-16">
      
      <main className="w-full max-w-[800px] mx-auto bg-white shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* ========== 公司名称标题栏 ========== */}
        {/*
          使用 fit-text 策略：默认字号大，再用 whitespace-nowrap 保证不折行，
          配合 overflow-hidden + w-full 让文字随父容器缩放。
          对于手机端超窄屏，用 clamp 或 vw 单位让字体自动缩小，永远保持一行。
        */}
        <header className="w-full py-8 md:py-14 bg-white border-b-4 border-[#2a7df4]/10 overflow-hidden">
          <div className="text-center px-2">
            <h1
              className="font-black text-[#2a7df4] tracking-tight leading-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(1.2rem, 6vw, 3.8rem)' }}
            >
              广东泓一生物科技有限公司
            </h1>
            <p
              className="mt-2 font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap"
              style={{ fontSize: 'clamp(0.5rem, 2vw, 1rem)' }}
            >
              Guangdong Hongyi Biotechnology Co., Ltd.
            </p>
          </div>
        </header>

        {/* ========== 第 1-2 部分：以诚信铸品牌 / 以品质铸市场 ========== */}
        <div className="flex flex-col md:flex-row w-full bg-white px-2 sm:px-8 md:px-12 py-4 gap-2 md:gap-4 justify-center items-center">
          <img src="/1以诚信铸品牌.jpg" className="w-full md:w-[45%] h-auto object-contain block max-w-[380px]" alt="以诚信铸品牌" />
          <img src="/2以品质铸市场.jpg" className="w-full md:w-[45%] h-auto object-contain block max-w-[380px]" alt="以品质铸市场" />
        </div>

        {/* ========== 第 3 部分：品牌墙 ========== */}
        <img src="/3品牌墙.jpg" className="w-full h-auto object-contain block bg-white" alt="品牌墙" />

        {/* ========== 公司产品（6款）========== */}
        <div className="bg-white py-8 px-4 w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-[#2a7df4] tracking-[0.2em] relative inline-block">
              公司产品
              <span className="absolute -bottom-2 w-1/2 left-1/4 h-1 bg-[#e8892f] rounded-full"></span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-2 md:px-0">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={`/包装${n}.jpg`}
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 object-contain bg-white border border-slate-100 p-2"
                alt={`产品包装 ${n}`}
              />
            ))}
          </div>
        </div>

        {/* ========== 第 4-5 部分：愿景与使命 ========== */}
        <div className="flex flex-col md:flex-row w-full bg-white">
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
        <a href="tel:13590022878" className="flex items-center justify-center space-x-2 py-3.5 text-white active:bg-[#d07b22] hover:bg-[#d07b22] transition-colors max-w-[800px] mx-auto w-full">
          <div className="bg-white p-1.5 rounded-full text-[#e8892f] animate-pulse">
            <Phone size={24} className="fill-current" />
          </div>
          <div className="flex flex-col ml-2 items-start justify-center">
            <span className="text-sm font-bold opacity-90">联系人：何经理</span>
            <span className="text-lg font-black tracking-wide leading-tight">点击这里一键拨打热线</span>
          </div>
        </a>
      </div>

    </div>
  );
}
