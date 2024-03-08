import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          home: 'Home',
          destination: 'Destination',
          about: 'About',
          partner: 'Partner',
          login: 'Login',
          register: 'Register',
        },
        exploreAndTravel: {
          explore: 'Explore And',
          travel: 'Travel',
          holidayFinder: 'Holiday Finder',
          location: 'Location',
          activity: 'Activity',
          grade: 'Grade',
          date: 'Date',
          exploreBtn: 'Explore'
        },
        ExploreTheWorld: { 
            exploreWorld: 'A new way to explore the' ,
            exploreWorld2: 'world',
            exploreWorldParagrapgh: 'For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way'
            ,exploreWorldBtn:'Learn More'
        },
        FeaturedDestinations: {
          FeaturedDestinationsHead: 'Featured Destinations',
          FeaturedDestinationsViewAll: 'View All',
          RajaAmpat: 'Raja Ampat',
          Indonesia:'Indonesia',
          Fanjingshan:'Fanjingshan',
          China:'China',
          Vevey:'Vevey',
          Switzerland:'Switzerland',
          Skadar:'Skadar',
          Montenegro:'Montenegro'
        },
        GuidesThousandSunny: {
          GuidesThousandSunnyHead:'Guides by Thousand',
          GuidesThousandSunnyHead2: 'Sunny',
          GuidesThousandSunnyParagraph:'Packed with tips and advice from our on-the-ground  experts, our city guides app (iOS and Android) is the  ultimate resource before and during a trip.'
          ,GuidesThousandSunnyBtn:'Download'
        },
        Testimonials:{
          TestimonialsHead:'Testimonials',
          TestimonialsParagragh:'“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”',
          EdwardNewgate:'Edward Newgate',
          FounderCircle: 'Founder Circle'
        },
        TrendingStories: {
          TrendingStoriesHead:'Trending Stories',
          ViewAll: 'View All',
          card1Head:'The many benefits of taking a healing holiday' ,
          card1Paragragh:'‘Helaing holidays’ are on the rise to help maximise your health and happines...',
          ReadMore:'Read More',
          card2Head:'The best Kyoto restaurant to try Japanese food' ,
          card2Paragragh:'From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...',
          card3Head:'Skip Chichen Itza and head to this remote Yucatan' ,
          card3Paragragh:'It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...',
          card4Head:'Surf’s up at these beginner spots around the world' ,
          card4Paragragh:'If learning to surf has in on your to- do list for a while, the good news is: it’s never too late...',
        },
        Footer: {
          card1Head:'Plan and book your perfect trip with',
          card1Head2:'expert advice, travel tips destination',
          card1Head3:'information from us',
          card1Paragraph:'©2020 Thousand Sunny. All rights reserved',

          card2Head:'Destinations',
          card2list1:'Africa',
          card2list2:'Antarctica',
          card2list3:'Asia',
          card2list4:'Europe',
          card2list5:'America',

          card3Head:'Shop',
          card3list1:'Destination Guides',
          card3list2:'Pictorial & Gifts',
          card3list3:'Special Offers',
          card3list4:'Delivery Times',
          card3list5:'FAQs',

          card4Head:'Interests',
          card4list1:'Adventure Travel',
          card4list2:'Art And Culture',
          card4list3:'Wildlife And Nature',
          card4list4:'Family Holidays',
          card4list5:'Food And Drink',
        }
      },
    },
    ar: {
      translation: {
        navbar: {
          home: 'الصفحة الرئيسية',
          destination: 'الوجهة',
          about: 'نبذة',
          partner: 'الشريك',
          login: 'تسجيل الدخول',
          register: 'تسجيل',
        },
        exploreAndTravel: {
          explore: 'استكشف و',
          travel: 'سافر',
          holidayFinder: 'الباحث عن العطلات',
          location: 'الموقع',
          activity: 'النشاط',
          grade: 'الدرجة',
          date: 'التاريخ',
          exploreBtn: 'استكشاف'
        },
        ExploreTheWorld: { 
          exploreWorld: 'طريقة جديدة لاستكشاف' ,
          exploreWorld2: 'العالم',
          exploreWorldParagrapgh:'لعقود، اعتاد المسافرون على اللجوء إلى كتب لونلي بلانيت عندما يتعلق الأمر بتخطيط وتنفيذ رحلتهم المثالية، ولكن الآن، يمكنهم أيضًا الاعتماد على تجارب لونلي بلانيت لتقود الطريق.',
          exploreWorldBtn:'تعلم المزيد'
        },
        FeaturedDestinations: {
          FeaturedDestinationsHead: 'الوجهات المميزة',
          FeaturedDestinationsViewAll: 'عرض الكل',
          RajaAmpat: 'رجا أمبات',
          Indonesia:'إندونيسيا',
          Fanjingshan:'فانجينغشان',
          China:'الصين',
          Vevey:'فيفي',
          Switzerland:'سويسرا',
          Skadar:'سكادار',
          Montenegro:'الجبل الأسود'
        },
        GuidesThousandSunny: {
          GuidesThousandSunnyHead:'المرشدين بواسطة ألف',
          GuidesThousandSunnyHead2: 'مشمس',
          GuidesThousandSunnyParagraph:'يُعد تطبيق أدلة المدن (iOS وAndroid) المليء بالنصائح والإرشادات من خبرائنا الميدانيين، المصدر الأمثل قبل وأثناء الرحلة.'
          ,GuidesThousandSunnyBtn:'تحميل'
        },
        Testimonials:{
          TestimonialsHead:'التوصيات',
          TestimonialsParagragh:'“"كويسكي في لاكوس أورنا فيرمنتوم يويسمود. إنتيجر مي نيبه، دابيبوس اك سيليريسكيوي، فاسيليسيس كويس بوروس. موربي بلانديت سيت أميت توربيس نيك."',
          EdwardNewgate:'إدوارد نيوجيت',
          FounderCircle: 'دائرة المؤسس'
        },
        TrendingStories: {
          TrendingStoriesHead:'قصص رائجة',
          ViewAll: 'عرض الكل',
          card1Head:'الفوائد العديدة لأخذ عطلة علاجية' ,
          card1Paragragh:'"عطلات الإجازة" آخذة في الارتفاع للمساعدة في تحقيق أقصى قدر من الصحة والسعادة ...',
          ReadMore:'اقرأ أكثر',
          card2Head:'أفضل مطعم في كيوتو لتجربة الطعام الياباني' ,
          card2Paragragh:'من التوفو إلى المقاهي، إليك دليلنا لأفضل المطاعم في كيوتو التي يمكنك زيارتها...',
          card3Head:'تخطي تشيتشن إيتزا وتوجه إلى ولاية يوكاتان النائية' ,
          card3Paragragh:'إنه أمر بعيد ويشكل تحديًا، ولكن تحدي الغابة واستكشاف هذه الآثار دون الحاجة إلى...',
          card4Head:'استمتع بركوب الأمواج في هذه الأماكن المخصصة للمبتدئين حول العالم' ,
          card4Paragragh:'إذا كان تعلم ركوب الأمواج مدرجًا في قائمة مهامك لفترة من الوقت، فإن الخبر السار هو: لم يفت الأوان أبدًا...',
        },
        Footer: {
          card1Head:'خطط واحجز رحلتك المثالية مع',
          card1Head2:'مشورة الخبراء، وجهة نصائح السفر',
          card1Head3:'المعلومات منا',
          card1Paragraph:'©2020 ألف صني. كل الحقوق محفوظة',

          card2Head:'مكان الوصول',
          card2list1:'أفريقيا',
          card2list2:'القارة القطبية الجنوبية',
          card2list3:'آسيا',
          card2list4:'أوروبا',
          card2list5:'أمريكا',

          card3Head:'تسوق',
          card3list1:'أدلة الوجهة',
          card3list2:'الصور والهدايا',
          card3list3:'عروض خاصة',
          card3list4:'أوقات التوصيل',
          card3list5:'الأسئلة الشائعة',

          card4Head:'الإهتمامات',
          card4list1:'رحلة مغامرة',
          card4list2:'فن وثقافة',
          card4list3:'الحياة البرية والطبيعة',
          card4list4:'العطل العائلية',
          card4list5:'طعام و شراب',
        }
      },
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
