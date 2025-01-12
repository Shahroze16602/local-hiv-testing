import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { notFound } from "next/navigation";
import statesData from "@/data/states.json";
import { StateArticle } from "@/components/StateArticle";
import StatesTable from "@/components/StatesList";

type StatesData = {
    [state: string]: {
        abbreviation: string;
        cities: {
            [city: string]: string[];
        };
    };
};

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;

    // Match different types of slugs
    const hivMatch = slug.match(/^(.*)-hiv-testing$/);
    const stdMatch = slug.match(/^(.*)-std-testing$/);

    // Initialize variables for state name and test type
    let stateName: string | null = null;
    let testName: "hiv" | "std" = "hiv"; // Default to "hiv" if no match

    // Check for HIV testing slugs
    if (hivMatch) {
        stateName = capitalizeWords(hivMatch[1].replace(/-/g, " "));
        testName = "hiv";
    }
    // Check for STD testing slugs
    else if (stdMatch) {
        stateName = capitalizeWords(stdMatch[1].replace(/-/g, " "));
        testName = "std";
    }
    // Handle cases for the base HIV or STD testing slugs
    else if (slug === "HIV-Testing") {
        testName = "hiv";
    } else if (slug === "STD-Testing") {
        testName = "std";
    } else {
        notFound();
    }

    // Check if the state data exists
    const data: StatesData = statesData;
    if (stateName && !data[stateName]) {
        notFound();
    }

    return (
        <>
            <Header />
            <Hero />
            <StateArticle stateName={stateName} testName={testName} />
            {!stateName && (<StatesTable testName={testName} />)}
            <Footer />
        </>
    );
};

function capitalizeWords(input: string): string {
    return input
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

export default SlugPage;
