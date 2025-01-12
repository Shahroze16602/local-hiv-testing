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
}

const StatesTable = ({ testName }: props) => {
    const data: StatesData = statesData;
    const states = Object.keys(data);

    const chunkArray = (arr: string[], chunkSize: number) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const stateChunks = chunkArray(states, 5);

    return (
        <div className="w-[720px]">
            <h1 className="text-[#676767] text-[2em] font-bold text-center">{testName.toUpperCase()} Testing Locations</h1>
            <div className="flex m-[16px] justify-center">
                <table id="geotable" className="ml-6 table-auto">
                    <tbody>
                        {stateChunks.map((chunk, rowIndex) => (
                            <tr key={rowIndex} className="h-[10px] leading-none">
                                {chunk.map((state) => (
                                    <td key={state} className="pr-8 py-0">
                                        <a
                                            href={`${state.toLowerCase().replace(/\s+/g, "-")}-${testName.toLowerCase()}-testing`}
                                            className="text-[9px] font-normal text-center text-[#0994b5] hover:text-[#f96808] hover:underline no-underline"
                                        >
                                            {state}
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

export default StatesTable;
