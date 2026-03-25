import {
  CircularGallery,
  type GalleryItem,
} from "@/components/ui/circular-gallery-2";

const eventItems: GalleryItem[] = [
  { image: "/events/event1.jpg", text: "Industrial Visit" },
  { image: "/events/event2.jpg", text: "Annual Celebration" },
  { image: "/events/event3.jpg", text: "Seminar & Workshop" },
  { image: "/events/event4.jpg", text: "Graduation Ceremony" }
];

export default function EventsGalleryDemo() {
  return (
    <div className="relative z-10 w-full px-4 pt-16 pb-24 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center mb-8">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase text-center">
          Events
        </h2>
        <div className="h-px w-20 bg-orange-500 mb-6" />
      </div>
      <div className="relative h-[600px] w-full max-w-[100vw] overflow-hidden">
        <CircularGallery
          items={eventItems}
          bend={3}
          borderRadius={0.05}
          scrollEase={0.02}
          fontClassName="text-white"
        />
      </div>
    </div>
  );
}
