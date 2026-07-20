import type { Locale } from ".";

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
    eyebrow: "من واقع التجربة",
    title: "ما علمتني إياه المشاريع",
    description:
      "لا توجد وصفة واحدة لنجاح المشاريع، لكن مع الوقت تتكرر بعض الدروس حتى تصبح جزءاً من طريقة التفكير والعمل. هذه بعض المبادئ التي تشكلت من التجربة أكثر مما تشكلت من الكتب.",
    items: [
      ["ابدأ من الواقع", "أفضل الأنظمة لا تبدأ من شاشة جديدة، بل من فهم ما يعيشه المستخدم كل يوم."],
      ["لا تطارد كثرة المزايا", "إضافة ميزة جديدة أسهل من إزالة التعقيد الذي تتركه خلفها."],
      ["الأرقام تتحدث بهدوء", "عندما تكون المؤشرات واضحة، تقل الحاجة إلى التخمين وتصبح القرارات أكثر ثقة."],
      ["النجاح يُقاس بعد الاستخدام", "أكثر ما أتعلمه يأتي بعد إطلاق النظام، عندما يبدأ المستخدمون في الاعتماد عليه فعلاً."],
      ["ابنِ ما يمكن أن يعيش", "المشاريع الجيدة ليست التي تعمل اليوم فقط، بل التي يمكن تطويرها بعد سنوات دون أن تفقد توازنها."],
    ],
  },
  en: {
    eyebrow: "From Experience",
    title: "What Projects Have Taught Me",
    description:
      "There is no single recipe for successful projects, but over time some lessons repeat until they become part of how you think and work. These are principles shaped more by experience than by books.",
    items: [
      ["Start From Reality", "The best systems do not begin with a new screen, but with understanding what users live through every day."],
      ["Do Not Chase Feature Count", "Adding a new feature is easier than removing the complexity it leaves behind."],
      ["Numbers Speak Quietly", "When indicators are clear, there is less need for guessing and decisions become more confident."],
      ["Success Is Measured After Use", "Most of what I learn comes after launch, when users begin depending on the system in practice."],
      ["Build What Can Live", "Good projects are not only the ones that work today, but the ones that can evolve years later without losing balance."],
    ],
  },
};
