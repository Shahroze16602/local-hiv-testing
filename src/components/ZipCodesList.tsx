import React from "react";
import statesData from "@/data/states.json";

type StatesData = {
    [state: string]: {
        abbreviation: string;
        cities: {
            [city: string]: string[];
        };
    };
};

interface props {
    testName: string,
    stateName: string,
    cityName: string,
}

const ZipCodesTable = ({ testName, stateName, cityName }: props) => {
    const data: StatesData = statesData;
    const zipcodes = data[stateName].cities[cityName];
    const abbreviation = data[stateName].abbreviation

    const chunkArray = (arr: string[], chunkSize: number) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const zipCodeChunks = chunkArray(zipcodes, 5);

    return (
        <div className="w-[720px]">
            <h1 className="text-[#676767] text-[2em] font-bold text-center">{cityName} {testName.toUpperCase()} Testing Locations</h1>
            <div className="flex m-[16px] justify-center">
                <table id="geotable" className="ml-6 table-auto">
                    <tbody>
                    {zipCodeChunks.map((chunk, rowIndex) => (
                        <tr key={rowIndex} className="h-[10px] leading-none">
                            {chunk.map((zipCode) => (
                                <td key={zipCode} className="pr-8 py-0">
                                    <a
                                        href={`${abbreviation.toLowerCase()}-${cityName.toLowerCase().replace(/\s+/g, "-")}-${zipCode}-${testName.toLowerCase()}-testing`}
                                        className="text-[9px] font-normal text-center text-[#0994b5] hover:text-[#f96808] hover:underline no-underline"
                                    >
                                        {zipCode}
                                    </a>
                                </td>
                            ))}
                            {chunk.length < 5 &&
                                Array.from({ length: 5 - chunk.length }).map((_, index) => (
                                    <td key={`empty-${rowIndex}-${index}`}></td>
                                ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ZipCodesTable;
