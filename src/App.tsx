import React from 'react';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col font-sans pb-16">
      
      {/* 
        主展示容器：限制最大宽度针对 PC 端展示效果最优，
        而在手机端则自然撑满 100% 达成竖排滚动海报的效果。
      */}
      <main className="w-full max-w-[800px] mx-auto bg-white shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* ========== 第 1-2 部分：标题块 ========== */}
        <div className="flex flex-col md:flex-row w-full bg-white">
          <img src="/1以诚信铸品牌.jpg" className="w-full md:w-1/2 h-auto object-contain block" alt="以诚信铸品牌" />
          <img src="/2以品质铸市场.jpg" className="w-full md:w-1/2 h-auto object-contain block" alt="以品质铸市场" />
        </div>

        {/* ========== 特别展区：公司产品 ========== */}
        <div className="bg-white py-8 px-4 w-full">
          <div className="text-center mb-6">
             <h2 className="text-2xl font-black text-[#2a7df4] tracking-[0.2em] relative inline-block">
               公司产品
               <span className="absolute -bottom-2 w-1/2 left-1/4 h-1 bg-[#e8892f] rounded-full"></span>
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4 md:px-0">
             <img src="/包装1.jpg" className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 object-cover aspect-[2/3] bg-white border border-slate-100 p-2" alt="满堂兴对虾料" />
             <img src="/包装2.jpg" className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 object-cover aspect-[2/3] bg-white border border-slate-100 p-2" alt="泓一丰南美白对虾料" />
             <img src="/包装3.jpg" className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 object-cover aspect-[2/3] bg-white border border-slate-100 p-2" alt="泓一丰金鲳鱼料" />
          </div>
        </div>

        {/* ========== 第 3 部分：品牌墙 ========== */}
        <img src="/3品牌墙.jpg" className="w-full h-auto object-contain block bg-white" alt="品牌墙" />

        {/* ========== 第 4-5 部分：愿景与使命 ========== */}
        {/* 已按要求移动到价值观上方 */}
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

      {/* 悬浮拨号栏：固定在页面底部 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#e8892f] shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.2)] pb-safe env(safe-area-inset-bottom)">
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
