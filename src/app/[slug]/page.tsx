import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { notFound } from "next/navigation";
import statesData from "@/data/states.json";
import { StateArticle } from "@/components/StateArticle";
import StatesTable from "@/components/StatesList";
import CitiesTable from "@/components/CitiesList";
import ZipCodesTable from "@/components/ZipCodesList";
import {GeneralArticle} from "@/components/GeneralArticle";
import {CityArticle} from "@/components/CityArticle";
import {ZipCodeArticle} from "@/components/ZipCodeArticle";

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

    // Define patterns
    const generalTestPattern = /^([A-Za-z]+)-Testing$/;
    const stateLevelPattern = /^([a-z-]+)-(hiv|std|herpes|chlamydia|gonorrhea|syphilis|hepatitis|urinalysis|cbc)-testing$/;
    const stateCityPattern = /^([a-z]{2})-([a-z-]+)-(hiv|std|herpes|chlamydia|gonorrhea|syphilis|hepatitis|urinalysis|cbc)-testing$/;
    const stateCityZipPattern = /^([a-z]{2})-([a-z-]+)-(\d{5})-(hiv|std|herpes|chlamydia|gonorrhea|syphilis|hepatitis|urinalysis|cbc)-testing$/;

    let stateName: string | null = null;
    let stateAbbreviation: string | null = null;
    let cityName: string | null = null;
    let zipCode: string | null = null;
    let testName: string | null = null;

    const data: StatesData = statesData;

    if (stateCityZipPattern.test(slug)) {
        const match = slug.match(stateCityZipPattern);
        stateAbbreviation = match![1];
        cityName = capitalizeWords(match![2].replace(/-/g, " "));
        zipCode = match![3];
        testName = match![4];

        const state = Object.entries(data).find(
            ([, value]) => value.abbreviation.toLowerCase() === stateAbbreviation?.toLowerCase()
        );

        if (!state || !state[1].cities[cityName]?.includes(zipCode)) {
            notFound();
        }
        stateName = state[0];
    } else if (stateCityPattern.test(slug)) {
        const match = slug.match(stateCityPattern);
        stateAbbreviation = match![1];
        cityName = capitalizeWords(match![2].replace(/-/g, " "));
        testName = match![3];

        const state = Object.entries(data).find(
            ([, value]) => value.abbreviation.toLowerCase() === stateAbbreviation?.toLowerCase()
        );

        if (!state || !state[1].cities[cityName]) {
            notFound();
        }
        stateName = state[0];
    } else if (stateLevelPattern.test(slug)) {
        const match = slug.match(stateLevelPattern);
        stateName = capitalizeWords(match![1].replace(/-/g, " "));
        testName = match![2];

        if (!data[stateName]) {
            notFound();
        }
    } else if (generalTestPattern.test(slug)) {
        const match = slug.match(generalTestPattern);
        testName = match![1].toLowerCase();
    } else {
        notFound();
    }

    return (
        <>
            <Header />
            {!stateName && (
                <>
                    <Hero linkPattern={"{test_name}-Testing"} lowerCaseName={false} />
                    <GeneralArticle testName={testName} />
                    <StatesTable testName={testName} />
                </>
            )}
            {stateName && !cityName && (
                <>
                    <Hero linkPattern={`${stateName.toLowerCase()}-{test_name}-testing`} lowerCaseName={true} />
                    <StateArticle stateName={stateName} testName={testName} />
                    <CitiesTable testName={testName} stateName={stateName} />
                </>
            )}
            {stateName && cityName && !zipCode && stateAbbreviation && (
                <>
                    <Hero linkPattern={`${stateAbbreviation.toLowerCase()}-${cityName.toLowerCase()}-{test_name}-testing`} lowerCaseName={true} />
                    <CityArticle cityName={cityName} stateName={stateName} testName={testName} />
                    <ZipCodesTable testName={testName} stateName={stateName} cityName={cityName} />
                </>
            )}
            {stateName && cityName && zipCode && stateAbbreviation && (
                <>
                    <Hero linkPattern={`${stateAbbreviation.toLowerCase()}-${cityName.toLowerCase()}-${zipCode}-{test_name}-testing`} lowerCaseName={true} />
                    <ZipCodeArticle zipCode={zipCode} cityName={cityName} stateAbbreviation={stateAbbreviation.toUpperCase()} testName={testName} />
                </>
            )}
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
