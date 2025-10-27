import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import WidgetContainer from "./WidgetContainer";
// Make sure these paths are correct for your project structure
import gallery1 from "@/assets/gallery-1.jpg"; 
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([gallery1, gallery2, gallery3,]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = e.target?.result as string;
        setImages([...images, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      // Removed the <=3 check to enable cycling navigation even for 3 or fewer images
      if (prev === 0) return images.length - 1; // Loop to the end
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      // Removed the <=3 check to enable cycling navigation even for 3 or fewer images
      if (prev === images.length - 1) return 0; // Loop to the beginning
      return prev + 1;
    });
  };

  // Helper to get images for display, ensuring we always show up to 3 if available
  const getVisibleImages = () => {
    if (images.length === 0) return [];
    if (images.length <= 3) return images;

    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(images[(currentIndex + i) % images.length]);
    }
    return result;
  };

  const visibleImages = getVisibleImages();

  return (
    <WidgetContainer>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-text-primary bg-tab-active px-10 py-3.5 rounded-[20px] shadow-lg">
          Gallery
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAddImage}
            // 3D styling matching the provided image: enhanced neumorphic shadows for raised effect, subtle inner glow
            className="flex items-center gap-2 px-6 py-3 bg-widget-border text-text-primary rounded-full 
                       hover:bg-tab-hover/80 transition-all duration-300 ease-out
                       shadow-[4px_4px_8px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.05)] 
                       hover:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.1)] 
                       active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]
                       transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95
                       relative overflow-hidden group"
          >
            <Plus className="w-4 h-4 relative z-10 flex-shrink-0" />
            <span className="text-sm font-medium tracking-wide relative z-10">ADD IMAGE</span>
            {/* Subtle internal shine/glow for 3D depth on hover */}
            <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              // 3D styling for arrow buttons: compact neumorphic shadows, matching image's subtle raised circles
              className="flex items-center justify-center w-10 h-10 bg-widget-border rounded-full 
                         hover:bg-tab-hover/80 transition-all duration-300 ease-out
                         shadow-[3px_3px_6px_rgba(0,0,0,0.3),-1.5px_-1.5px_3px_rgba(255,255,255,0.05)] 
                         hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.1)] 
                         active:shadow-[inset_1.5px_1.5px_3px_rgba(0,0,0,0.3),inset_-0.75px_-0.75px_1.5px_rgba(255,255,255,0.05)]
                         transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95
                         relative overflow-hidden group"
            >
              <ChevronLeft className="w-5 h-5 text-text-primary relative z-10" />
              {/* Subtle internal shine/glow for 3D depth on hover */}
              <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>
            <button
              onClick={handleNext}
              // 3D styling for arrow buttons: compact neumorphic shadows, matching image's subtle raised circles
              className="flex items-center justify-center w-10 h-10 bg-widget-border rounded-full 
                         hover:bg-tab-hover/80 transition-all duration-300 ease-out
                         shadow-[3px_3px_6px_rgba(0,0,0,0.3),-1.5px_-1.5px_3px_rgba(255,255,255,0.05)] 
                         hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.1)] 
                         active:shadow-[inset_1.5px_1.5px_3px_rgba(0,0,0,0.3),inset_-0.75px_-0.75px_1.5px_rgba(255,255,255,0.05)]
                         transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95
                         relative overflow-hidden group"
            >
              <ChevronRight className="w-5 h-5 text-text-primary relative z-10" />
              {/* Subtle internal shine/glow for 3D depth on hover */}
              <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {visibleImages.map((image, index) => (
          <div
            key={`${currentIndex}-${index}`} // Improved key for better re-render tracking during slides
            // Enhanced styling for image glow on hover with right-side lift tilt
            className="relative aspect-square rounded-[24px] overflow-hidden 
                       shadow-lg transition-all duration-400 ease-out
                       hover:shadow-2xl hover:scale-[1.03] hover:rotate-3 cursor-pointer 
                       group transform origin-bottom-right" // Added rotate-3 for right-side lift (clockwise tilt), origin-bottom-right for pivot, longer duration for smooth tilt
          >
            <img
              src={image}
              alt={`Gallery image ${currentIndex + index + 1}`}
              className="w-full h-full object-cover transition-all duration-400 
                         group-hover:brightness-105 group-hover:saturate-110" // Slightly toned down enhancements to complement darker blue
            />
            {/* Overlay for a more distinct, darker blue glow effect on hover */}
            <div className="absolute inset-0 rounded-[24px] pointer-events-none 
                            transition-all duration-400 ease-out 
                            group-hover:ring-6 group-hover:ring-offset-2 group-hover:ring-offset-background group-hover:ring-blue-600/60">
            </div>
            {/* Updated: Darker blue tint overlay on hover (blue-600/30 for more intense, darker blue) */}
             <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/30 rounded-[24px] transition-all duration-400"></div>
          </div>
        ))}
      </div>
    </WidgetContainer>
  );
};

export default Gallery;