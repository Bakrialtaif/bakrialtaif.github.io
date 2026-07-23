import type { Locale } from "./config";

export const aboutLessons: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    items: [string, string][];
  }
> = {
  ar: {
    eyebrow: "من واقع المشاريع",
    title: "ما تعلمته من المشاريع",
    description: "",
    items: [
      ["ابدأ من الواقع", "تبدأ الصورة عادة من الإجراءات اليومية، لا من الشاشة الأولى أو قائمة المزايا."],
      ["قلل التعقيد مبكراً", "كل إضافة لا تخدم سير العمل تصبح عبئاً على المستخدم والفريق لاحقاً."],
      ["اترك للأرقام مساحة", "المؤشرات الواضحة تكشف نقاط التعطل بهدوء وتساعد على تحسين القرار."],
      ["راقب ما يحدث بعد الإطلاق", "الاستخدام الفعلي يوضح ما لم يظهر أثناء التحليل أو الاختبار."],
      ["ابنِ ما يمكن تطويره", "الأنظمة التي تستمر هي التي تسمح بالتعديل دون هدم ما سبق بناؤه."],
    ],
  },
  en: {
    eyebrow: "From Project Work",
    title: "What Projects Have Taught Me",
    description:
      "After working on different systems and platforms, practical lessons emerge less from planning alone and more from observing how systems operate after release.",
    items: [
      ["Start From Reality", "The picture usually starts with daily procedures, not the first screen or a feature list."],
      ["Reduce Complexity Early", "Every addition that does not serve workflow later becomes a burden on users and teams."],
      ["Let Numbers Speak", "Clear indicators reveal friction points quietly and support better decisions."],
      ["Watch What Happens After Launch", "Real use exposes what analysis and testing cannot fully show."],
      ["Build What Can Evolve", "Systems that last are the ones that can change without breaking what came before."],
    ],
  },
};
