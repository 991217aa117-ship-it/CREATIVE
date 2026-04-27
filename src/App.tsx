import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { ChevronRight, ChevronLeft, Smartphone, Zap, Shield, BarChart3, Users, X, Twitter, Facebook, Linkedin, Share2, MapPin, ShoppingCart, PenTool, Instagram, Youtube, Music, Code, Newspaper, ArrowUp } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

const IconFrame = ({ icon: Icon, className }: { icon: any, className: string }) => {
  if (!Icon) return null;
  if (typeof Icon === 'string') return <span className={className}>{Icon}</span>;
  return <Icon className={className} />;
};

const PLACE_SLIDES = [
  {
    id: 1,
    title: "지도 최적화 육성",
    subtitle: "지도 최적화 육성이란",
    description: "관련 키워드(검색어) 검색 시 대표님의 업체 정보가<br /><span class='text-green-500 underline'>상단 영역</span>에 노출될 수 있도록 성장시키는 과정입니다.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    icon: "📍"
  },
  {
    id: 4,
    title: "검색어 상위 노출 작업",
    subtitle: "검색어 상위 노출 작업이란",
    description: "플레이스의 소비자 유입과 최적화 점수 상승을 위해 크리에이티브가 자체 개발한 리워드 형식의<br /><span class='text-green-500 underline'>'실유저 트래픽'</span> 작업을 진행합니다.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    icon: "🔍"
  },
  {
    id: 2,
    title: "지도 저장하기, 알림받기",
    subtitle: "지도 저장하기, 알림받기란",
    description: "소비자의 <span class='text-green-500 underline'>신뢰도 상승</span> 및 <span class='text-green-500 underline'>지도 순위 상승</span>에 있어<br />큰 점수를 반영합니다.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e514b3?w=1200&h=800&fit=crop",
    icon: "🔔"
  },
  {
    id: 3,
    title: "블로그, 방문자 리뷰 작성",
    subtitle: "블로그, 방문자 리뷰 작성이란",
    description: "검색엔진 최적화에 맞춰 작성하는 리뷰로 소비자분들의 신뢰와 선호도를 얻을 수 있는 후기성 리뷰를 증가시켜 <span class='text-green-500 underline'>구매전환율</span>을 높여드립니다.",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&h=800&fit=crop",
    icon: "✍️"
  }
];

const PlaceMarketingPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % PLACE_SLIDES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + PLACE_SLIDES.length) % PLACE_SLIDES.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110]"
      >
        <X className="w-8 h-8 text-white" />
      </button>

      <div className="relative w-full max-w-6xl aspect-[16/9] bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6 text-toss-gray-900" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all z-20"
        >
          <ChevronRight className="w-6 h-6 text-toss-gray-900" />
        </button>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row h-full">
          {/* Left: Info (Representing the Slide Header/Title) */}
          <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-3xl text-white font-bold shadow-lg shadow-green-500/20">
                  <IconFrame icon={PLACE_SLIDES[currentIndex].icon} className="" />
                </div>
                <h2 className="text-3xl md:text-[38px] font-black text-green-500 leading-tight whitespace-nowrap">
                  {PLACE_SLIDES[currentIndex].title}
                </h2>
              </div>
              
              <div className="space-y-5">
                <h3 className="text-xl md:text-2xl font-black text-toss-gray-900 whitespace-nowrap">
                  {PLACE_SLIDES[currentIndex].subtitle}
                </h3>
                <p 
                  className="text-lg md:text-[19px] font-bold text-toss-gray-500 leading-relaxed break-keep"
                  dangerouslySetInnerHTML={{ __html: PLACE_SLIDES[currentIndex].description }}
                />
              </div>
            </motion.div>

            {/* Indicators */}
            <div className="mt-auto flex gap-2">
              {PLACE_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-green-500' : 'w-2 bg-toss-gray-200'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: The "Image" (Slide Content) */}
          <div className="flex-1 bg-toss-gray-50 relative p-8 flex items-center justify-center">
            <motion.div
              key={currentIndex + "-img"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-toss-gray-100 bg-white"
            >
              <img 
                src={PLACE_SLIDES[currentIndex].image} 
                alt={PLACE_SLIDES[currentIndex].title}
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              />
              {/* Fallback pattern to mimic slide screenshot if image fails */}
              <div className="absolute inset-4 border-2 border-green-500/10 rounded-xl pointer-events-none" />
              <div className="absolute top-8 right-8 text-[80px] font-black text-green-500/5 select-none uppercase -rotate-12">NAVER</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveNumber = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, radius: 120 };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = 1.2;
        this.density = (Math.random() * 30) + 10;
        this.color = '#0064FF';
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
          this.color = '#3182F6';
          this.size = 1.8;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
          this.color = '#0064FF';
          this.size = 1.2;
        }
      }
    }

    const init = () => {
      const parent = containerRef.current!;
      const width = parent.clientWidth;
      const height = 200; // Reduced height for better fit

      if (width === 0) return;

      canvas.width = width;
      canvas.height = height;
      
      const textCanvas = document.createElement('canvas');
      const textCtx = textCanvas.getContext('2d')!;
      textCanvas.width = canvas.width;
      textCanvas.height = canvas.height;
      
      const fontSize = Math.min(canvas.width / 6.5, 130);
      const text = '50,000,000';
      
      textCtx.fillStyle = 'white';
      textCtx.textAlign = 'center';
      textCtx.textBaseline = 'middle';
      
      const fontMain = `900 ${fontSize}px "Pretendard Variable", Pretendard, sans-serif`;
      const fontComma = `900 ${fontSize * 0.85}px "Pretendard Variable", Pretendard, sans-serif`;
      
      textCtx.font = fontMain;
      
      let totalWidth = 0;
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        textCtx.font = char === ',' ? fontComma : fontMain;
        totalWidth += textCtx.measureText(char).width + (char === ',' ? -8 : -5);
      }

      let startX = (canvas.width - totalWidth) / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ',') {
          textCtx.font = fontComma;
          const charWidth = textCtx.measureText(char).width;
          textCtx.fillText(char, startX + charWidth / 2, centerY + fontSize * 0.12);
          startX += charWidth - 8;
        } else {
          textCtx.font = fontMain;
          const charWidth = textCtx.measureText(char).width;
          textCtx.fillText(char, startX + charWidth / 2, centerY);
          startX += charWidth - 5;
        }
      }

      if (textCanvas.width === 0 || textCanvas.height === 0) return;
      
      const pixels = textCtx.getImageData(0, 0, textCanvas.width, textCanvas.height).data;
      particles = [];
      
      const gap = 3.6; // Refined gap for distinct dot look
      for (let y = 0; y < textCanvas.height; y += gap) {
        for (let x = 0; x < textCanvas.width; x += gap) {
          const index = (Math.floor(y) * textCanvas.width + Math.floor(x)) * 4;
          if (pixels[index + 3] > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', init);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Wait for fonts to be ready for accurate measurement
    if (document.fonts) {
      document.fonts.ready.then(init);
    } else {
      init();
    }
    
    animate();

    return () => {
      window.removeEventListener('resize', init);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto h-[200px] cursor-crosshair">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

const CountUp = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const TossIncomeSection = () => {
  const stats = [
    { label: "누적 클라이언트", value: "1,800", suffix: "+" },
    { label: "누적 컨텐츠 조회수", value: "110,000", suffix: "+" },
    { label: "재계약 진행률", value: "87.46", suffix: "%" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#6EB7FF_0%,#3182F6_50%,#5B64FF_100%)]" />
      
      {/* Subtle Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[52px] font-black text-white leading-tight tracking-tight mb-4"
          >
            업종별 딱 맞는 마케팅으로<br />
            혁신적인 변화를 만들어요
          </motion.h2>
        </div>
        
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[40px] p-8 md:px-16 md:py-20 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center text-center ${
                  index !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''
                }`}
              >
                <p className="text-white/70 text-base md:text-xl font-bold mb-4">{stat.label}</p>
                <div className="text-3xl md:text-[44px] font-black text-white tracking-tight">
                  {stat.value}
                  <span className="text-xl md:text-2xl ml-1 font-bold opacity-90">{stat.suffix}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm md:text-base text-white/50 font-medium"
        >
          2025년 누적 데이터 기준
        </motion.p>
      </div>
    </section>
  );
};

interface Platform {
  id: string;
  name: string;
  title: string;
  desc: string;
  color: string;
  icon: any;
  searchKeyword: string;
}

const PLATFORMS: Platform[] = [
  {
    id: "place",
    name: "네이버 플레이스",
    title: "네이버 플레이스 마케팅",
    desc: "4015만명이 사용하는 플랫폼\n네이버 플레이스 최적화 통해 당신의 사업을 노출시켜드립니다.",
    color: "#2DB400",
    icon: MapPin,
    searchKeyword: "판교 맛집"
  },
  {
    id: "shopping",
    name: "네이버 쇼핑",
    title: "네이버 쇼핑 마케팅",
    desc: "네이버 쇼핑 유입 및 구매 전환을 위한 최적화 광고 서비스",
    color: "#2DB400",
    icon: ShoppingCart,
    searchKeyword: "프리미엄 린넨 셔츠"
  },
  {
     id: "blog",
     name: "네이버 블로그",
     title: "네이버 블로그 마케팅",
     desc: "네이버 블로그 포스팅을 통해 검색 결과 상단 노출 및 바이럴 효과 극대화",
     color: "#2DB400",
     icon: PenTool,
     searchKeyword: "여름 휴가 추천 코스"
  },
  {
    id: "insta",
    name: "인스타그램",
    title: "인스타그램 마케팅",
    desc: "트렌드에 민감한 사용자들에게 브랜드 이미지를 각인시키는 비주얼 마케팅",
    color: "#E1306C",
     icon: Instagram,
     searchKeyword: "성수동 카페"
  },
  {
    id: "youtube",
    name: "유튜브",
    title: "유튜브 마케팅",
    desc: "검색과 영상 시청을 동시에 하는 유저들에게 최적화된 영상 광고",
    color: "#FF0000",
    icon: Youtube,
    searchKeyword: "내돈내산 테크 리뷰"
  },
  {
    id: "tiktok",
    name: "틱톡",
    title: "틱톡 마케팅",
    desc: "MZ세대를 넘어 전 연령층으로 확대된\n숏폼 트렌드의 중심, 틱톡 바이럴 마케팅",
    color: "#000000",
    icon: Music,
    searchKeyword: "챌린지 유행"
  },
  {
    id: "dev",
    name: "웹/앱/프로그램",
    title: "웹/앱/프로그램 제작",
    desc: "모든 기기에서 최적화된 사용자 경험을 제공하는\n고퀄리티 웹사이트, 앱 및 PC 프로그램 개발 서비스",
    color: "#3182F6",
    icon: Code,
    searchKeyword: "웹사이트 제작"
  },
  {
    id: "press",
    name: "언론 송출",
    title: "뉴스 언론 송출 마케팅",
    desc: "공신력 있는 언론사를 통해 브랜드 신뢰도를 구축하고\n검색 결과에 영구적으로 남는 강력한 홍보 기사 송출",
    color: "#4A5568",
    icon: Newspaper,
    searchKeyword: "신제품 런칭 보도"
  }
];

const MarketingPlatforms = () => {
  const [activeTab, setActiveTab] = useState<Platform>(PLATFORMS[0]);
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState(false);

  const nextPlatform = () => {
    const currentIndex = PLATFORMS.findIndex(p => p.id === activeTab.id);
    const nextIndex = (currentIndex + 1) % PLATFORMS.length;
    setActiveTab(PLATFORMS[nextIndex]);
  };

  const prevPlatform = () => {
    const currentIndex = PLATFORMS.findIndex(p => p.id === activeTab.id);
    const prevIndex = (currentIndex - 1 + PLATFORMS.length) % PLATFORMS.length;
    setActiveTab(PLATFORMS[prevIndex]);
  };

  return (
    <section id="marketing-platforms" className="py-32 bg-white overflow-hidden relative">
      <PlaceMarketingPopup isOpen={isPlaceModalOpen} onClose={() => setIsPlaceModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-toss-blue font-bold mb-4">내 사업 마케팅 파트너</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
            크리에이티브 <br />
            <span className="text-toss-blue">컨설팅 하나면 끝!</span>
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 mb-24">
          {/* Navigation Arrows (Visual) */}
          <button 
            onClick={prevPlatform}
            className="hidden xl:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-toss-gray-300 hover:text-toss-gray-900 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-10 h-10 stroke-[1.5]" />
          </button>
          <button 
            onClick={nextPlatform}
            className="hidden xl:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-toss-gray-300 hover:text-toss-gray-900 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-10 h-10 stroke-[1.5]" />
          </button>

          {/* Left Card */}
          <motion.div 
            key={activeTab.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-[400px] bg-white rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.06)] p-10 border border-toss-gray-50 flex flex-col items-start min-h-[480px] z-10"
          >
            <div 
              className="w-16 h-16 rounded-[20px] flex items-center justify-center text-white text-3xl font-black mb-10 shadow-lg"
              style={{ backgroundColor: activeTab.color }}
            >
              <IconFrame icon={activeTab.icon} className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-8 tracking-tight">{activeTab.title}</h3>
            <p className="text-toss-gray-500 leading-relaxed mb-12 text-[17px] font-medium whitespace-pre-line">
              {activeTab.desc}
            </p>
            <button 
              onClick={() => {
                if (activeTab.id === "place") {
                  setIsPlaceModalOpen(true);
                }
              }}
              className="mt-auto group flex items-center gap-2 text-[15px] font-bold text-toss-gray-900"
            >
              자세히 보기 
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Layered Preview */}
          <motion.div 
            key={activeTab.id + "-preview"}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="flex-1 w-full max-w-[800px] min-h-[520px] relative pointer-events-none select-none"
          >
            {/* Desktop-like Search Result View */}
            <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-toss-gray-100 overflow-hidden z-10 flex flex-col">
               {/* Search Bar Area */}
                <div className="px-6 pt-5 pb-3 border-b border-toss-gray-100 bg-white">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center text-white font-black text-lg" style={{ backgroundColor: activeTab.color }}>
                        <IconFrame icon={activeTab.icon} className="w-5 h-5" />
                      </div>
                      <div className="flex-1 h-11 bg-white border-2 rounded-full flex items-center px-4 justify-between" style={{ borderColor: activeTab.color }}>
                         <span className="text-[16px] font-bold text-toss-gray-900">{activeTab.searchKeyword}</span>
                         <div className="flex items-center gap-3">
                            <div className="w-5 h-5 text-toss-gray-300">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </div>
                            <div className="w-5 h-5" style={{ color: activeTab.color }}>
                              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                            </div>
                         </div>
                      </div>
                   </div>
                   {/* Tabs */}
                   <div className="flex items-center gap-6 overflow-x-hidden whitespace-nowrap px-1">
                      {['블로그', '카페', '이미지', '클립', '지식iN', '인플루언서', '동영상', '쇼핑'].map((tab, i) => (
                        <span key={tab} className={`text-[14px] font-bold ${i === 2 ? 'text-toss-gray-900' : 'text-toss-gray-400'}`}>{tab}</span>
                      ))}
                      <div className="ml-auto w-6 h-6 rounded-full border border-toss-gray-100 flex items-center justify-center text-toss-gray-400">
                         <ChevronRight className="w-4 h-4" />
                      </div>
                   </div>
                </div>

               {/* Place Content Area */}
               <div className="flex-1 overflow-y-auto no-scrollbar bg-white p-6">
                  <div className="flex items-center justify-between mb-5">
                     <div className="flex items-center gap-2">
                        <h4 className="text-xl font-black tracking-tight">{activeTab.id === 'dev' ? '포트폴리오' : '플레이스'}</h4>
                        <div className="w-4 h-4 rounded-full border border-toss-gray-200 text-[10px] flex items-center justify-center text-toss-gray-400 font-bold">i</div>
                     </div>
                     <div className="flex items-center gap-4 text-[13px] font-bold text-toss-gray-400">
                        <span className="italic flex items-center gap-1">creative+ <div className="w-3 h-3 rounded-full border border-toss-gray-200 flex items-center justify-center text-[8px]">i</div></span>
                        <span className="text-toss-blue">서비스 등록</span>
                        <span className="text-toss-blue">견적 문의</span>
                     </div>
                  </div>

                  {/* Filters */}
                  <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
                     <button className="w-9 h-8 border border-toss-gray-100 rounded-lg flex items-center justify-center bg-white shadow-sm">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-toss-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>
                     </button>
                     {['신속개발', '1:1 맞춤', '유지보수', '고퀄리티'].map(f => (
                       <button key={f} className="px-4 py-1.5 border border-toss-gray-100 rounded-full text-[12px] font-bold text-toss-gray-600 bg-white shadow-sm whitespace-nowrap">
                         {f}
                       </button>
                     ))}
                  </div>

                  {/* Content Preview */}
                  <div className="w-full h-48 bg-[#f8f9fa] rounded-2xl relative mb-6 border border-toss-gray-100 overflow-hidden shadow-inner flex flex-col p-4">
                     {activeTab.id === 'dev' ? (
                        <div className="w-full h-full space-y-3 font-mono text-[10px]">
                           <div className="flex gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-400" />
                              <div className="w-2 h-2 rounded-full bg-yellow-400" />
                              <div className="w-2 h-2 rounded-full bg-green-400" />
                           </div>
                           <div className="text-toss-blue">class Portfolio extends React.Component {"{"}</div>
                           <div className="pl-4 text-toss-gray-400">render() {"{"}</div>
                           <div className="pl-8 text-toss-gray-900 font-bold">return (</div>
                           <div className="pl-12 text-toss-gray-400">&lt;div className="responsive-web"&gt;</div>
                           <div className="pl-16 text-toss-gray-900">Success Built with Creative</div>
                           <div className="pl-12 text-toss-gray-400">&lt;/div&gt;</div>
                        </div>
                     ) : activeTab.id === 'place' ? (
                        <div className="w-full h-full relative bg-[#e3f2fd]">
                           <div className="absolute inset-0 opacity-20" style={{ 
                             backgroundImage: 'linear-gradient(#90a4ae 1px, transparent 1px), linear-gradient(90deg, #90a4ae 1px, transparent 1px)',
                             backgroundSize: '30px 30px'
                           }} />
                           <div className="absolute top-1/2 left-0 w-full h-6 bg-white -translate-y-1/2 opacity-60" />
                           <div className="absolute left-1/3 top-0 w-8 h-full bg-white opacity-60" />
                           <motion.div 
                             initial={{ scale: 0 }} animate={{ scale: 1 }}
                             className="absolute top-[20%] left-[20%] flex flex-col items-center"
                           >
                              <div className="bg-white px-2 py-1 rounded-full shadow-lg border border-toss-blue/20 flex items-center gap-1 mb-1">
                                 <div className="w-1.5 h-1.5 rounded-full bg-toss-blue" />
                                 <span className="text-[9px] font-black">스타트업 A</span>
                              </div>
                              <div className="w-4 h-4 bg-toss-blue rounded-full border-2 border-white shadow-md"></div>
                           </motion.div>
                           <motion.div 
                             initial={{ scale: 0 }} animate={{ scale: 1 }}
                             className="absolute bottom-[30%] right-[25%] flex flex-col items-center"
                           >
                              <div className="bg-white px-2 py-1 rounded-full shadow-lg border border-red-400/20 flex items-center gap-1 mb-1">
                                 <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                 <span className="text-[9px] font-black">베이커리 카페</span>
                              </div>
                              <div className="w-4 h-4 bg-red-400 rounded-full border-2 border-white shadow-md"></div>
                           </motion.div>
                        </div>
                     ) : activeTab.id === 'shopping' ? (
                        <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto h-full bg-toss-gray-50 no-scrollbar">
                           {[1, 2, 3, 4].map(i => (
                              <motion.div 
                                 key={i}
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: i * 0.1 }}
                                 className="bg-white rounded-xl overflow-hidden shadow-sm border border-toss-gray-100"
                              >
                                 <div className="aspect-square bg-toss-gray-100 mb-1 relative">
                                    <div className="absolute top-2 left-2 bg-toss-blue text-white text-[9px] px-1.5 py-0.5 rounded font-bold">AD</div>
                                    <div className="w-full h-full flex items-center justify-center opacity-10">
                                       <ShoppingCart className="w-8 h-8" />
                                    </div>
                                    <img src={`https://images.unsplash.com/photo-${[
                                      '1523381210434-271e8be1f52b',
                                      '1618354691373-d851c5c3a991',
                                      '1576566588028-4147f3842f27',
                                      '1434389677669-e08b493021fe'
                                    ][i-1]}?w=200&h=200&fit=crop`} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                                 </div>
                                 <div className="p-2">
                                    <div className="text-[10px] font-bold text-toss-gray-900 line-clamp-1 mb-0.5">프리미엄 린넨 {i % 2 === 0 ? '팬츠' : '셔츠'}</div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] font-black text-red-500">30%</span>
                                      <span className="text-xs font-black text-toss-gray-900">{(19900 + (i * 1500)).toLocaleString()}원</span>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1">
                                      <div className="flex gap-0.5">
                                        {[1,2,3,4,5].map(s => <div key={s} className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />)}
                                      </div>
                                      <span className="text-[8px] text-toss-gray-400">({(100 + i * 50)})</span>
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     ) : activeTab.id === 'blog' ? (
                        <div className="p-4 space-y-4 overflow-y-auto h-full bg-white no-scrollbar">
                           {[1, 2, 3].map(i => (
                              <motion.div 
                                 key={i}
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: i * 0.1 }}
                                 className="flex items-start gap-3 border-b border-toss-gray-50 pb-4"
                              >
                                 <div className="flex-1">
                                    <div className="text-[14px] font-bold text-toss-gray-900 mb-1.5 line-clamp-2 leading-tight">
                                       {[
                                         '2024년 꼭 가봐야 할 성수동 카페 추천 TOP 5',
                                         '직접 다녀온 루프탑 브런치 매장 솔직 후기',
                                         '주말 데이트 코스로 완벽한 이곳, 분위기 대박입니다'
                                       ][i-1]}
                                    </div>
                                    <div className="text-[11px] text-toss-gray-400 line-clamp-2 leading-normal mb-2">
                                       직접 방문해서 경험해본 결과 이곳은 정말 특별했습니다. 사장님이 직접 로스팅하신 원두의 향이 아직도 기억나네요. 성수동에 가신다면...
                                    </div>
                                    <div className="flex items-center gap-2">
                                       <div className="w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center text-[7px] text-white font-bold">N</div>
                                       <span className="text-[10px] font-bold text-toss-gray-600">트래블로그</span>
                                       <span className="text-[10px] text-toss-gray-300">2시간 전</span>
                                    </div>
                                 </div>
                                 <div className="w-20 h-20 bg-toss-gray-100 rounded-lg overflow-hidden shrink-0 border border-toss-gray-50">
                                    <img src={`https://images.unsplash.com/photo-${[
                                      '1495474472287-4d71bcdd2085',
                                      '1554118811-1e0d58224f24',
                                      '1559925373-2f8218b5f320'
                                    ][i-1]}?w=120&h=120&fit=crop`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     ) : activeTab.id === 'insta' ? (
                        <div className="p-2 grid grid-cols-3 gap-0.5 overflow-y-auto h-full bg-white no-scrollbar">
                           {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                              <motion.div 
                                 key={i}
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 transition={{ delay: i * 0.05 }}
                                 className="aspect-square bg-toss-gray-100 relative group"
                              >
                                 <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?w=150&h=150&fit=crop`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                 {i % 4 === 0 && <div className="absolute top-1.5 right-1.5"><Music className="w-3 h-3 text-white fill-white" /></div>}
                                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 transition-opacity">
                                    <div className="flex items-center gap-0.5 text-white"><X className="w-2.5 h-2.5" /> <span className="text-[9px] font-black">{i * 12}</span></div>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     ) : activeTab.id === 'youtube' ? (
                        <div className="p-0 overflow-y-auto h-full bg-[#0f0f0f] no-scrollbar">
                           {[1, 2, 3].map(i => (
                              <motion.div 
                                 key={i}
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 className="w-full mb-3"
                              >
                                 <div className="aspect-video bg-toss-gray-900 relative">
                                    <img src={`https://images.unsplash.com/photo-${1510000000000 + i * 2000000}?w=480&h=270&fit=crop`} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">10:45</div>
                                 </div>
                                 <div className="p-3 flex gap-3">
                                    <div className="w-9 h-9 rounded-full bg-toss-gray-800 shrink-0 border border-white/10" />
                                    <div className="flex-1 space-y-1">
                                       <div className="text-[14px] font-medium text-white line-clamp-2 leading-tight">
                                          {[
                                            '성수동에서 가장 핫한 카페, 제가 직접 가봤습니다 🔥',
                                            '광고 없는 찐 맛집 탐방 브이로그 | 1편',
                                            '요즘 떠오르는 창업 트렌드 완벽 분석'
                                          ][i-1]}
                                       </div>
                                       <div className="text-[11px] text-[#aaaaaa]">CREATIVE Channel • 조회수 {i}5만회 • 2일 전</div>
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     ) : activeTab.id === 'tiktok' ? (
                        <div className="p-0 grid grid-cols-2 gap-1 overflow-y-auto h-full bg-black no-scrollbar">
                           {[1, 2, 3, 4].map(i => (
                              <motion.div 
                                 key={i}
                                 initial={{ scale: 0.95, opacity: 0 }}
                                 animate={{ scale: 1, opacity: 1 }}
                                 className="aspect-[9/16] bg-toss-gray-900 relative border border-white/5"
                              >
                                 <img src={`https://images.unsplash.com/photo-${1520000000000 + i * 3000000}?w=300&h=533&fit=crop`} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                                 <div className="absolute bottom-3 left-3 right-3 text-white">
                                    <div className="text-[10px] font-bold mb-1">@creator_id{i}</div>
                                    <div className="text-[9px] line-clamp-1 opacity-80">성수동 예쁜 카페 탐방기 #카페 #추천</div>
                                    <div className="flex items-center gap-1 mt-2">
                                       <Music className="w-2.5 h-2.5" />
                                       <span className="text-[8px]">Original Sound - Creative</span>
                                    </div>
                                 </div>
                                 <div className="absolute right-2 bottom-12 flex flex-col items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-toss-gray-100/20 backdrop-blur-sm flex items-center justify-center text-white"><X className="w-4 h-4" /></div>
                                    <div className="w-8 h-8 rounded-full bg-toss-gray-100/20 backdrop-blur-sm flex items-center justify-center text-white"><Share2 className="w-4 h-4" /></div>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     ) : activeTab.id === 'press' ? (
                        <div className="p-6 overflow-y-auto h-full bg-white no-scrollbar">
                           <div className="mb-6 border-b border-toss-gray-100 pb-6">
                              <div className="text-xs font-bold text-toss-blue mb-2">경제 뉴스</div>
                              <h1 className="text-2xl font-black text-toss-gray-900 leading-tight mb-4">
                                 [기획] '크리에이티브', 인공지능 기반 마케팅 자동화 솔루션 공개... 업계 긴장
                              </h1>
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-toss-gray-100 flex items-center justify-center font-bold text-toss-gray-400 text-xs">일보</div>
                                 <div className="text-[11px]">
                                    <div className="font-bold text-toss-gray-900">김미소 기자</div>
                                    <div className="text-toss-gray-400">입력 2024.03.25 10:12</div>
                                 </div>
                              </div>
                           </div>
                           <div className="space-y-4">
                              <div className="aspect-video bg-toss-gray-100 rounded-lg overflow-hidden mb-4 relative">
                                 <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <p className="text-[13px] leading-relaxed text-toss-gray-600">
                                 국내 최고의 마케팅 에이전시 '크리에이티브'가 창사 이래 최대 실적을 달성했다. 업체 측에 따르면 지난 분기 대비 매출이 200% 이상...
                              </p>
                              <p className="text-[13px] leading-relaxed text-toss-gray-600">
                                 특히 이번에 공개된 자동화 솔루션은 소상공인부터 대기업까지 아우르는 범용성을 바탕으로 시장의 뜨거운 관심을...
                              </p>
                           </div>
                        </div>
                     ) : (
                        <div className="m-auto text-center">
                           <div className="w-20 h-20 bg-toss-blue/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                              <Smartphone className="w-10 h-10 text-toss-blue" />
                           </div>
                           <p className="text-[13px] font-bold text-toss-gray-400">모바일에서 더 선명하게</p>
                        </div>
                     )}
                  </div>

                  {/* Real-time Insights Area */}
                  <div className="mt-8 pt-8 border-t border-toss-gray-50">
                    <div className="flex items-center justify-between mb-6">
                      <h5 className="text-[14px] font-black text-toss-gray-900 tracking-tight">실시간 마케팅 인사이트</h5>
                      <span className="text-[10px] text-toss-blue font-bold px-2 py-0.5 bg-toss-blue/5 rounded-full">LIVE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: '노출도', val: '+24%', color: 'text-toss-blue' },
                        { label: '전환율', val: '5.2%', color: 'text-green-500' },
                        { label: '효율', val: 'x3.2', color: 'text-purple-500' }
                      ].map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] font-bold text-toss-gray-400 mb-1">{stat.label}</span>
                          <span className={`text-[15px] font-black ${stat.color}`}>{stat.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Platform Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 max-w-7xl mx-auto border-t border-toss-gray-50 pt-20">
          {PLATFORMS.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform)}
              className={`flex flex-col items-center gap-4 transition-all duration-500 group ${activeTab.id === platform.id ? 'opacity-100 scale-105' : 'opacity-30 grayscale hover:opacity-100 hover:grayscale-0'}`}
            >
                <div 
                  className={`w-[64px] h-[64px] rounded-[22px] flex items-center justify-center text-white text-xl font-black transition-all duration-500 shadow-[0_12px_24px_rgba(0,0,0,0.08)] ${activeTab.id === platform.id ? 'shadow-lg ring-4 ring-offset-2 scale-110' : 'group-hover:scale-105'}`}
                  style={{ backgroundColor: platform.color }}
                >
                  <IconFrame icon={platform.icon} className="w-7 h-7" />
                </div>
              <span className={`text-[13px] font-bold text-toss-gray-900 transition-colors text-center ${activeTab.id === platform.id ? 'text-toss-gray-900' : 'text-toss-gray-400'}`}>
                {platform.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-toss-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="text-2xl font-black tracking-tighter text-toss-blue cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          CREATIVE
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-toss-gray-600">
          <a 
            href="#marketing-platforms" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('marketing-platforms')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-toss-blue transition-colors"
          >
            서비스
          </a>
          <a href="#" className="hover:text-toss-blue transition-colors">파트너십</a>
          <a href="#" className="hover:text-toss-blue transition-colors">개발자 센터</a>
          <button 
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="toss-button py-2 px-4 text-xs"
          >
            문의하기
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-48 pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-[72px] font-black tracking-tighter text-toss-gray-900 leading-tight">
            내 사업이
          </h1>
          <div className="py-2">
            <InteractiveNumber />
          </div>
          <h1 className="text-4xl md:text-[72px] font-black tracking-tighter text-toss-gray-900 mb-12 leading-tight">
            국민에게 닿는 방법
          </h1>
          
          <p className="text-xl md:text-2xl font-bold tracking-tight text-toss-gray-600 mb-14">
            5,000만 사용자가 당신의 사업을 기다립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="toss-button w-full sm:w-auto text-lg px-10 py-4 shadow-sm">내 사업 바로 홍보하기</button>
            <button 
              onClick={() => document.getElementById('marketing-platforms')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-1 text-toss-gray-600 font-semibold hover:text-toss-gray-900 transition-colors"
            >
              서비스 종류 보기 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const iPhoneMockup = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative w-[300px] h-[600px] bg-toss-gray-900 rounded-[50px] p-3 shadow-2xl border-[8px] border-toss-gray-800 ${className}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-toss-gray-900 rounded-b-[20px] z-10" />
      <div className="w-full h-full bg-white rounded-[38px] overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

const Showcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-20 overflow-hidden bg-toss-gray-50">
      <div className="mb-16 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">자연스러운 사용자 경험</h2>
        <p className="text-toss-gray-600">토스 앱의 기능인 것처럼 위화감 없이 녹아듭니다.</p>
      </div>
      
      <div className="flex flex-col gap-12">
        <motion.div style={{ x: x1 }} className="flex gap-8 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <iPhoneMockup key={i} className="flex-shrink-0">
               <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-toss-blue rounded-xl flex items-center justify-center text-white font-bold">C</div>
                  <div>
                    <div className="text-sm font-bold">Creative Service {i}</div>
                    <div className="text-[10px] text-toss-gray-600">30만 명 이용 중</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-toss-gray-100 rounded-2xl" />
                  <div className="space-y-2">
                    <div className="h-4 bg-toss-gray-100 rounded-full w-3/4" />
                    <div className="h-4 bg-toss-gray-100 rounded-full w-1/2" />
                  </div>
                  <div className="pt-4">
                    <div className="h-12 bg-toss-blue/5 rounded-xl border border-toss-blue/10" />
                  </div>
                </div>
               </div>
            </iPhoneMockup>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-8 justify-center">
          {[5, 6, 7, 8].map((i) => (
            <iPhoneMockup key={i} className="flex-shrink-0 opacity-80 scale-95">
               <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-toss-gray-900 rounded-xl flex items-center justify-center text-white font-bold">C</div>
                  <div>
                    <div className="text-sm font-bold">Partner App {i}</div>
                    <div className="text-[10px] text-toss-gray-600">서비스 준비 중</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-40 bg-toss-gray-100 rounded-2xl" />
                  <div className="h-12 bg-toss-gray-100 rounded-xl" />
                </div>
               </div>
            </iPhoneMockup>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const CTA = () => {
  return (
    <section id="contact-section" className="py-40 px-6 bg-[#111111] text-white text-center relative overflow-hidden">
      {/* Decorative floating images/shapes like in the screenshot */}
      <div className="absolute top-10 left-[-5%] w-48 h-48 opacity-40 blur-sm pointer-events-none">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400" className="rounded-3xl rotate-12" alt="" />
      </div>
      <div className="absolute top-20 right-[-10%] w-64 h-64 opacity-50 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500" className="rounded-[40px] -rotate-6 shadow-2xl" alt="" />
      </div>
      <div className="absolute bottom-[-10%] left-[10%] w-56 h-56 opacity-40 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400" className="rounded-3xl -rotate-12" alt="" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl font-bold text-toss-gray-400 mb-4">고객센터 1644-2955</p>
          <h2 className="text-3xl md:text-[44px] font-black mb-16 tracking-tight leading-tight">
            사업에 맞는 마케팅을<br className="md:hidden" /> 최저가로 상담해드려요
          </h2>
          
          <div className="max-w-md mx-auto relative group">
            <div className="flex bg-white rounded-full p-2 h-16 md:h-18 items-center border-2 border-transparent focus-within:border-toss-blue transition-all shadow-xl">
              <input 
                type="text" 
                placeholder="전화 번호를 입력해주세요" 
                className="flex-1 bg-transparent px-6 text-toss-gray-900 font-bold placeholder:text-toss-gray-300 outline-none text-lg"
              />
              <button className="bg-toss-blue text-white px-8 py-3 rounded-full font-bold h-full hover:bg-blue-600 transition-colors">
                다음
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-toss-gray-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div>
            <div className="text-2xl font-black text-toss-blue mb-6 tracking-tighter">CREATIVE</div>
            <p className="text-toss-gray-600 max-w-xs mb-8">
              마케팅 플랫폼 'CREATIVE'를 통해 모두가 쉽고<br />
              홍보 이상의 가치를 누리는 세상을 만듭니다.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-toss-gray-600">
                <li><a href="#">비즈니스 제휴</a></li>
                <li><a href="#">브랜드 정책</a></li>
                <li><a href="#">광고 안내</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm text-toss-gray-600">
                <li><a href="#">공지사항</a></li>
                <li><a href="#">자주 묻는 질문</a></li>
                <li><a href="#">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">회사</h4>
              <ul className="space-y-2 text-sm text-toss-gray-600">
                <li><a href="#">회사 소개</a></li>
                <li><a href="#">채용 안내</a></li>
                <li><a href="#">개인정보 처리방침</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-xs text-toss-gray-600 border-t border-toss-gray-100 pt-8">
          © 2026 Creative Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const ReviewSection = () => {
  const reviews = [
    {
      type: "사장님 스토리",
      title: "인스타그램 광고 덕분에\n매장 오픈 이래 최대 매출을\n달성했어요",
      author: "벨 에포크 카페",
      subtitle: "성수동 브런치 카페",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop",
      platform: "instagram"
    },
    {
      type: "네이버 블로그 리뷰",
      title: "키워드 상위 노출 후에\n예약 문의가 전보다\n3배는 늘어난 것 같아요",
      author: "아카이브 로스터스",
      subtitle: "스페셜티 커피 전문점",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
      platform: "blog"
    },
    {
      type: "유튜브 리뷰",
      title: "브랜드 영상 하나로\n많은 분들이 저희 가게를\n알게 되어서 정말 기쁩니다",
      author: "노을 베이커리",
      subtitle: "연남동 감성 디저트",
      image: "https://images.unsplash.com/photo-1559925373-2f8218b5f320?w=400&h=400&fit=crop",
      platform: "youtube"
    },
    {
      type: "네이버 플레이스 리뷰",
      title: "지도로 찾아오시는 분들이\n많아진 게 눈에 보입니다\n순위의 힘을 체감했어요",
      author: "미담 갈비",
      subtitle: "판교 한우 전문점",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
      platform: "place"
    },
    {
      type: "인스타그램 리뷰",
      title: "트렌디한 릴스 영상으로\nMZ세대 손님들이 줄을 서서\n방문하고 있어요",
      author: "실루엣 라운지",
      subtitle: "압구정 와인 바",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=400&fit=crop",
      platform: "instagram"
    },
    {
      type: "사장님 스토리",
      title: "마케팅이 막막했는데\n컨설팅부터 실행까지\n믿고 맡길 수 있어 좋네요",
      author: "델리 스위트",
      subtitle: "베이커리 프랜차이즈",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=400&fit=crop",
      platform: "consulting"
    }
  ];

  // Double the reviews for infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  const shareReview = (platform: string, review: any) => {
    const text = `[CREATIVE 후기] ${review.author}: ${review.title}`;
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-[52px] font-black tracking-tight text-toss-blue mb-6">
            수많은 대표님들의 진짜 후기
          </h2>
          <div className="flex items-center justify-center gap-3">
             <span className="text-lg font-bold text-toss-gray-900">만족도 4.95점</span>
             <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} viewBox="0 0 24 24" fill="#FFB800" className="w-6 h-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                ))}
             </div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[380px] bg-[#F9FAFB] rounded-[40px] p-8 flex flex-col justify-between border border-toss-gray-50 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[13px] font-bold text-toss-gray-400">{review.type}</p>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => { e.stopPropagation(); shareReview("twitter", review); }}
                      className="p-1.5 rounded-full bg-white hover:bg-toss-gray-50 text-toss-gray-400 hover:text-[#1DA1F2] transition-colors shadow-sm"
                      title="Twitter에 공유"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); shareReview("facebook", review); }}
                      className="p-1.5 rounded-full bg-white hover:bg-toss-gray-50 text-toss-gray-400 hover:text-[#1877F2] transition-colors shadow-sm"
                      title="Facebook에 공유"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); shareReview("linkedin", review); }}
                      className="p-1.5 rounded-full bg-white hover:bg-toss-gray-50 text-toss-gray-400 hover:text-[#0A66C2] transition-colors shadow-sm"
                      title="LinkedIn에 공유"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-toss-gray-900 leading-tight mb-6 whitespace-pre-line group-hover:text-toss-blue transition-colors">
                  {review.title}
                </h3>
                <span className="text-[14px] font-bold text-toss-gray-400 flex items-center gap-1">
                  보러가기 <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                   <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="text-left">
                    <p className="text-[15px] font-bold text-toss-gray-900">{review.author}</p>
                    <p className="text-[13px] font-medium text-toss-gray-400">{review.subtitle}</p>
                 </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const InvestmentSection = () => {
  return (
    <section className="py-48 bg-[#F9FAFB] overflow-hidden relative min-h-[800px] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 mb-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-[64px] font-black tracking-tight text-toss-blue mb-8 leading-tight">
            마케팅과 더 가까워지는 순간
          </h2>
          <p className="text-xl md:text-[22px] font-semibold text-toss-gray-600 leading-relaxed opacity-80">
            마케팅을 아는 대표님도, 마케팅을 모르는 대표님도.<br className="hidden md:block" />
            크리에이티브와 함께라면 마케팅과 가까워질 수 있어요.
          </p>
        </motion.div>
      </div>

      {/* Official Toss 3D Coin Video */}
      <div className="absolute inset-x-0 bottom-0 w-full h-full pointer-events-none z-10 flex items-end justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover md:object-contain object-bottom transition-opacity duration-1000"
          onCanPlay={(e) => (e.currentTarget.style.opacity = "1")}
          style={{ opacity: 0 }}
        >
          <source src="https://static.toss.im/3d/toss-invest-stocks-bottom.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[90] p-4 bg-white text-toss-gray-900 rounded-full shadow-2xl border border-toss-gray-100 hover:bg-toss-gray-50 transition-colors pointer-events-${isVisible ? 'auto' : 'none'}`}
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="bg-white selection:bg-toss-blue selection:text-white font-sans tracking-tight">
      <Navbar />
      <Hero />
      <TossIncomeSection />
      <MarketingPlatforms />
      <ReviewSection />
      <InvestmentSection />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
