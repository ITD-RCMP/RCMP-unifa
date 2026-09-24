import { Info } from "lucide-react";
import { SAMPLE_NOTICE, SITE_IS_SAMPLE } from "@/data/aids";

const SampleNotice = () => {
  if (!SITE_IS_SAMPLE) return null;

  return (
    <div className="bg-gold-soft border border-gold/40 px-4 py-3 flex items-start gap-3">
      <Info className="w-4 h-4 text-navy shrink-0 mt-0.5" aria-hidden="true" />
      <p className="text-xs md:text-sm text-navy leading-relaxed">{SAMPLE_NOTICE}</p>
    </div>
  );
};

export default SampleNotice;
