const resourceData = [
    {
        id: "standoutOnDole",
        title: "Creating a Standout Profile on Dole Lesson",
        category: "guides",
        image: "/images/resourcesFolder/standoutOnDoleLessons.png",
        description:
            "Here’s what you need to make your Dole profile get noticed by employers.",
        type: "PDF guide",
        date: "june 02 2023",
        link: "https://drive.google.com/file/d/1Wp4kCcaWF52otBUY04R9Z41W72yZmNll/view?usp=drivesdk",
    },
    {
        id: "introductionTODole",
        title: "Introduction to Dole Lesson",
        category: "guides",
        image: "/images/resourcesFolder/IntroductiontoDoleLesson.png",
        description:
            "Discover how Dole equips learners with career tools and connects you directly to job opportunities.",
        type: "PDF guide",
        date: "march 11 2023",
        link: "https://drive.google.com/file/d/1K5-AbVyVz_WBnry9AIqP9EC4s81qdDwT/view?usp=drivesdk",
    },
    {
        id: "engagingOnPreply",
        title: "Engaging Students on Preply",
        category: "research",
        image: "/images/resourcesFolder/engagingOnPreply.png",
        description:
            "This lesson shows you how to get your students excited to learn more on Preply.",
        type: "Case Study",
        date: "june 02 2024",
        link: "https://drive.google.com/file/d/1y965s-B9AReHKitBRHmmJtkleV_w0YBY/view?usp=drivesdk",
    },
    {
        id: "optimizingOnPreply",
        title: "Optimizing your Profile on Preply",
        category: "guides",
        image: "/images/resourcesFolder/optimizingOnPreply.png",
        description:
            "Are you ready to make your Preply profile stand out and get more students easily?",
        type: "PDF guide",
        date: "feb 21 2024",
        link: "https://drive.google.com/file/d/1p_thcS54mfJqxeXjraFUPCqbpR-g7S4-/view?usp=drivesdk",
    },
    {
        id: "preplyIntroduction",
        title: "Preply Introduction",
        category: "guides",
        image: "/images/resourcesFolder/preplyIntroduction.png",
        description:
            "Ready to know how Preply works? This lesson guides you through getting started with confidence.",
        type: "PDF guide",
        date: "dec 02 2023",
        link: "https://drive.google.com/file/d/1VFrnKHKTgUFijK03d0XfuWILas9HSqjg/view?usp=drivesdk",
    },
    {
        id: "goodProfileOnTutor",
        title: "Creating a Good Profile on Tutor one",
        category: "guides",
        image: "/images/resourcesFolder/goodProfileonTutor.png",
        description:
            "This is what you’ve been missing to build a Tutor One profile that truly shines.",
        type: "PDF guide",
        date: "jun 15 2023",
        link: "https://drive.google.com/file/d/1CxOH-IBWgHr5H9ZluI2mXiPu7_fyu6fU/view?usp=drivesdk",
    },
    {
        id: "outstandingLessonsOnTutorOne",
        title: "Delivering Outstanding Lessons on Tutor one",
        category: "research",
        image: "/images/resourcesFolder/outstandingLessonsOnTutorOne.png",
        description:
            "Here's the key to making every Tutor One lesson unforgettable and full of energy.",
        type: "PDF Guide",
        date: "sep 20 2023",
        link: "https://drive.google.com/file/d/1DwxWWa1hcxTS2yn5kxXG17cgvwe1RZQP/view?usp=drivesdk",
    },
    {
        id: "canvaForEducators",
        title: "Canva for Educators",
        category: "tools",
        image: "/images/resourcesFolder/canvaForEducators.png",
        description:
            "Get ready to supercharge your lessons with Canva and join the creative teaching movement.",
        type: "Template Pack",
        date: "jul 22 2024",
        link: "https://drive.google.com/file/d/180UY4N1DH4YbHqC2yQtvIHjc65ELGHY4/view?usp=drivesdk",
    },
    {
        id: "classDojoTutorial",
        title: "Classdojo Tutorial",
        category: "guides",
        image: "/images/resourcesFolder/classdojoTutorial.png",
        description:
            "Step into the world of ClassDojo and see how top educators build fun and connect classrooms.",
        type: "PDF Guide",
        date: "jan 20 2025",
        link: "https://drive.google.com/file/d/15Hsz5T4ct4_0GkjdBI-n56bqMkSDvNDl/view?usp=drivesdk",
    },
    {
        id: "nearpod",
        title: "Nearpod",
        category: "webinars",
        image: "/images/resourcesFolder/nearpod.png",
        description:
            "This is how smart educators turn boring slides into interactive lessons students actually love.",
        type: "Recorded Webinars",
        date: "Aug 24 2024",
        link: "https://drive.google.com/file/d/19OjrCLHI8_LW7XVJvZdzHiYwA6fcvc5G/view?usp=drivesdk",
    },
    {
        id: "summaryOfNearpod",
        title: "The Summary of Nearpod",
        category: "research",
        image: "/images/resourcesFolder/summaryOfNearpod.png",
        description:
            "Ever wondered how to keep your students hooked? Nearpod’s magic lies in this quick guide.",
        type: "Case Study",
        date: "Apr 14 2024",
        link: "https://drive.google.com/file/d/1GghwQMnsZ5O8PZmnHDkcaZOs2T-ZkDah/view?usp=drivesdk",
    },
    {
        id: "sabiTeach",
        title: "Sabi Teach",
        category: "tools",
        image: "/images/resourcesFolder/sabiteach.png",
        description:
            "Meet Sabi Teach, the platform helping educators teach smarter, connect better, and shine brighter.",
        type: "Template Pack",
        date: "oct 14 2024",
        link: "https://drive.google.com/file/d/1VnNNqFid5s7IDp-RmHQy2Fi8yiyDhyNa/view?usp=drivesdk",
    },
    {
        id: "canvaLiveSession",
        title: "Canva Live Session",
        category: "webinars",
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description:
            "Missed the magic live? Catch our Canva session that had our educators buzzing with ideas.",
        type: "Recorded Webinars",
        date: "Apr 04 2024",
        link: "https://drive.google.com/drive/folders/13P_q0jG3MywBBn0CrYD8xfGNKg-fYa1-",
    },
    {
        id: "classdojoLiveSession",
        title: "Classdojo Live Session",
        category: "webinars",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description:
            "This is the ClassDojo session everyone’s talking about simple tips yet big wins for your classroom!",
        type: "Recorded Webinars",
        date: "May 24 2024",
        link: "https://drive.google.com/drive/folders/1_g-xC8S_cH3jgLJiYlA2FaX3NaCe8T7s",
    },
];

export default resourceData;
