import { useState } from "react";
import WidgetContainer from "./WidgetContainer";

type TabType = "about" | "experiences" | "recommended";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  const tabs = [
    { id: "about" as TabType, label: "About Me" },
    { id: "experiences" as TabType, label: "Experiences" },
    { id: "recommended" as TabType, label: "Recommended" },
  ];

  const content = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
    experiences: `Throughout my career, I've had the privilege of working with diverse teams and clients across various industries. Starting as a junior sales associate, I quickly learned the importance of building genuine relationships and understanding client needs.

Over the past 3 years at Salesforce, I've successfully managed key accounts, consistently exceeding quarterly targets, and mentoring new team members in our sales methodology.`,
    recommended: `"Dave has been an exceptional partner to work with. His dedication to understanding our business needs and providing tailored solutions has been instrumental to our success. He's responsive, knowledgeable, and always goes the extra mile."

    
- Sarah Johnson, VP of Operations at TechCorp`,
  };

  return (
    <WidgetContainer className="mb-6">
      <div className="flex gap-3 mb-6 bg-tab-inactive rounded-[20px] p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-8 py-3.5 rounded-[16px] text-base font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-tab-active text-text-primary shadow-lg"
                : "text-text-secondary hover:text-text-primary hover:bg-tab-active/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted/30 scrollbar-track-transparent hover:scrollbar-thumb-muted/50">
        <p className="text-text-secondary leading-relaxed whitespace-pre-line text-[15px]">
          {content[activeTab]}
        </p>
      </div>
    </WidgetContainer>
  );
};

export default AboutMe;
