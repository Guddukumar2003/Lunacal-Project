import AboutMe from "@/components/AboutMe";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left side - Empty */}
        <div className="hidden md:block" />
        
        {/* Right side - Widgets */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-3xl">
            <AboutMe />
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
