import AiAssistent from "@/widgets/ai-assistent/aiAssistent";
import LayoutHomePage from "@/widgets/homePageSection/layout-home-page/layout";

async function HomePage() {
    return (
        <>
            <LayoutHomePage />
            <AiAssistent />;
        </>
    );
}

export default HomePage;
