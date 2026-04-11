import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, Spade, Leaf, Shovel, Droplets, Globe, Sprout, TrendingUp, Trophy, Scaling } from 'lucide-react';
import { CATEGORIES, CULTIVATION_GUIDES } from '../constants';
import { getProductInsight } from '../geminiService';

const ProductDetailPage: React.FC = () => {
  const { catId, cropId, prodId } = useParams();
  const navigate = useNavigate();
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const currentCategory = CATEGORIES.find(c => c.id === catId);
  const currentCrop = currentCategory?.crops.find(c => c.id === cropId);
  const currentProduct = currentCrop?.products.find(p => p.id === prodId);
  const currentGuide = cropId ? CULTIVATION_GUIDES[cropId] : null;

  useEffect(() => {
    const fetchInsight = async () => {
      if (currentCategory && currentCrop && currentProduct) {
        setLoading(true);
        try {
          const text = await getProductInsight(currentCategory.name, currentCrop.name, currentProduct.name);
          setInsight(text || '');
        } catch (error) {
          console.error("Failed to fetch insight", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchInsight();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentCategory, currentCrop, currentProduct]);

  if (!currentProduct) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl text-red-600 font-bold mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-[#2d5a27] text-white px-6 py-2 rounded-lg"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <main className="flex-grow animate-slide-up pb-20">
      {/* Full Width Banner */}
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${currentProduct?.bannerImage || currentCrop?.bannerImage || '/assets/image/inner_banner.png'})` }}
      >
        <div className="absolute inset-0"></div>

        <div className="relative z-10 flex flex-col items-center">
          <p className="text-white font-sans font-bold uppercase tracking-widest text-sm md:text-base mb-2 drop-shadow-md">
            {currentCrop?.name}
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase drop-shadow-lg mb-6">
            {currentProduct?.name}
          </h1>
          <div className="bg-[#8cc63f] text-white px-8 py-3 font-bold text-sm md:text-base tracking-widest inline-block shadow-lg">
            {currentProduct?.badge || "F1 HYBRID"}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Left Column: Product Image & Back */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col pt-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-700 font-sans font-bold mb-10 hover:text-[#2d5a27] transition-colors uppercase text-xs tracking-widest"
            >
              <ArrowLeft size={16} />
              <span>Back to Search</span>
            </button>

            {(currentProduct?.image || currentCrop?.image) && (
              <div className="flex flex-col items-center sticky top-[90px]">
                <img
                  src={currentProduct?.image || currentCrop?.image}
                  alt={currentProduct?.name || currentCrop?.name}
                  className="w-full h-auto object-contain max-h-[400px] mb-6 mix-blend-multiply"
                />
                <h2 className="text-[#2d5a27] text-3xl font-bold text-center">
                  {currentCrop?.name} {currentProduct?.name}
                </h2>
              </div>
            )}
          </div>

          {/* Right Column: Cultivation Guide */}
          <div className="md:col-span-8 lg:col-span-8">
            {/* Dynamic Cultivation Details */}
            {currentGuide ? (
              <div className="space-y-8">
                {/* <h2 className="text-3xl font-bold text-[#2d5a27] text-center uppercase tracking-wider mb-6">Cultivation Guide</h2> */}

                {/* Section 1 Card */}
                {currentGuide.section1 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Spade className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.section1.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.section1.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Section 2 Card */}
                {currentGuide.section2 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Shovel className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.section2.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.section2.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Nursery Card (Section 1 Alternative) */}
                {currentGuide.nursery && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Spade className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.nursery.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.nursery.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Direct Sowing Card (Alternative Section 1) */}
                {currentGuide.directSowing && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Leaf className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.directSowing.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.directSowing.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Land Prep Card (Section 2) */}
                {currentGuide.landPrep && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Shovel className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.landPrep.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.landPrep.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Section 3 Card */}
                {currentGuide.section3 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Sprout className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.section3.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.section3.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Section 4 Card */}
                {currentGuide.section4 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <TrendingUp className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.section4.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.section4.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Section 5 Card */}
                {currentGuide.section5 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Trophy className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.section5.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.section5.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Section 6 Card */}
                {currentGuide.section6 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Droplets className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.section6.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.section6.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Section 7 Card */}
                {currentGuide.section7 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Scaling className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.section7.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.section7.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Generic Maintenance Accent */}
                <div className="bg-[#2d5a27] text-white p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-xl">
                  <div className="p-4 bg-white/10 rounded-full shrink-0">
                    <Droplets size={40} className="text-[#8cc63f]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 uppercase tracking-wider">Expert Management Tip</h4>
                    <p className="font-sans text-white/90">Regular monitoring for pests and diseases like Whiteflies or Powdery Mildew is essential. Always use clean irrigation water and balanced NPK fertilizer for maximum {currentCrop?.name} yield.</p>
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback for crops without specific guides */
              <div className="bg-gray-50 p-12 rounded-xl border-2 border-dashed border-gray-200 text-center">
                <Globe className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500 font-sans italic">Detailed cultivation guide for {currentCrop?.name} is being prepared by our agronomists. For urgent support, please use the contact info below.</p>
              </div>
            )}

            <button
              onClick={() => navigate('/')}
              className="mt-12 w-full max-w-xs mx-auto block bg-gray-100 hover:bg-gray-200 text-gray-700 font-sans font-bold py-4 rounded-lg transition-colors text-center shadow-sm"
            >
              Back to Catalog Search
            </button>

          </div> {/* End Right Column */}
        </div> {/* End Grid */}
      </div> {/* End max-w-7xl Container */}
    </main>
  );
};

export default ProductDetailPage;
