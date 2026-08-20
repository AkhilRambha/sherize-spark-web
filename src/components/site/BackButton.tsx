import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };

  return (
    <button
      onClick={goBack}
      className="fixed top-24 left-6 z-50 h-10 w-10 rounded-full glass-strong flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      aria-label="Go Back"
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
  );
}
