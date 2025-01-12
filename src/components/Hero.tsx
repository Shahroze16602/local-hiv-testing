import React from "react";

export const Hero = () => {
    return (
        <div>
            <div className="w-[980px] rounded-[8px] bg-[#ebecec] p-4">
                <div className="w-[65%]">
                    <div className="text-[#4482b7] text-[30px] font-bold pl-[15px] pt-0">
                        Affordable &amp; Confidential HIV Testing
                    </div>

                    <div className="w-[90%] font-sans text-lg font-bold text-[#676767]">
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <img
                                    src="/symble.png"
                                    alt="Symbol"
                                    className="w-[39px] h-[29px]"
                                />
                                <span className="ml-2">Convenient Same Day Appointments</span>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="/symble.png"
                                    alt="Symbol"
                                    className="w-[39px] h-[29px]"
                                />
                                <span className="ml-2">Find a Local Lab in Your Area</span>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="/symble.png"
                                    alt="Symbol"
                                    className="w-[39px] h-[29px]"
                                />
                                <span className="ml-2">
                                    Caring Counselors - Sympathetic &amp; Understanding
                                </span>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="/symble.png"
                                    alt="Symbol"
                                    className="w-[39px] h-[29px]"
                                />
                                <span className="ml-2">
                                    Affordable tests - Quick &amp; Accurate Results
                                </span>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="/symble.png"
                                    alt="Symbol"
                                    className="w-[39px] h-[29px]"
                                />
                                <span className="ml-2">
                                    Questions answered - problems identified
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[980px] flex flex-row my-4">
                <div className="w-full">
                    <div className="w-full">
                        <div className="p-5 text-[13px] text-[#676767]">
                            <div className="text-[18px] font-bold text-[#676767]">
                                End your Fear and Anxiety about STDs.
                            </div>
                            <div className="font-bold py-2">
                                Get accurate, confidential results without visiting your doctor
                            </div>
                            <div className="py-2">
                                Concerned that you may have an STD?<br />
                                We understand the sensitive, private nature of your situation.<br />
                                Let us give you&nbsp;
                                <strong>
                                    fast, confidential, accurate results &amp; peace of mind.
                                </strong>
                            </div>
                            <div className="font-bold py-2">
                                Get started with a phone call.
                            </div>
                            <div className="py-2">
                                You and your partner can get your questions answered in the privacy of
                                your home. We’ll answer your questions and you can schedule a
                                confidential appointment in the process.
                            </div>
                            <div className="pl-9">
                                <ul className="list-disc">
                                    <li>Completely confidential</li>
                                    <li>Caring, sympathetic counselors</li>
                                    <li>Questions answered and problems identified quickly</li>
                                    <li>
                                        Convenient same-day appointments - Over 1500 locations
                                    </li>
                                    <li>Private, non-invasive testing</li>
                                </ul>
                            </div>
                            <div className="font-bold italic">
                                Even if you don’t currently have STD symptoms, you may still be at risk.
                                Don’t gamble with your own and your partner’s sexual health.
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <div
                            className="flex items-center justify-between w-full bg-contain"
                            style={{
                                backgroundImage: "url('/call-bg.gif')",
                                height: "49px",
                            }}
                        >
                            <img src="/call-left.gif" alt="Call Left" className="h-full" />
                            <div className="flex items-center justify-center text-white font-bold">
                                <span className="text-lg">Call NOW for Testing</span>
                                <span id="numberassigned_2" className="ml-2 text-lg">
                                    000.000.0000
                                </span>
                            </div>
                            <img
                                src="/call-right.gif"
                                alt="Call Right"
                                className="h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[258px]">
                    <div className="flex justify-end">
                        <div className="w-[258px]">
                            <div
                                className="flex items-center"
                                style={{
                                    backgroundImage: "url('/testfor-bg.gif')",
                                    backgroundSize: "contain",
                                }}
                            >
                                <img
                                    src="/testfor-left.gif"
                                    alt="Test For Left"
                                    className="w-[7px] h-[33px]"
                                />
                                <div className="font-sans text-lg text-center font-bold w-full text-[#4482b7]">We Can Test For</div>
                                <img
                                    src="/testfor-right.gif"
                                    alt="Test For Right"
                                    className="w-[7px] h-[33px]"
                                />
                            </div>
                            <div className="bg-[#f4f4f4] border-l border-r border-[#d5d6d6]">
                                <ul className="space-y-2 p-4">
                                    {[
                                        { text: "HIV", href: "HIV-Testing" },
                                        // { text: "Herpes", href: "Herpes-Testing" },
                                        // { text: "Chlamydia", href: "Chlamydia-Testing" },
                                        // { text: "Gonorrhea", href: "Gonorrhea-Testing" },
                                        // { text: "Syphilis", href: "Syphilis-Testing" },
                                        // { text: "Hepatitis", href: "Hepatitis-Testing" },
                                        // { text: "Urinalysis", href: "Urinalysis-Testing" },
                                        // { text: "CBC", href: "CBC-Testing" },
                                        { text: "STD", href: "STD-Testing" },
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <img
                                                src="/arrow.gif"
                                                alt="Arrow"
                                                className="w-[26px] h-[20px]"
                                            />
                                            <a href={item.href} className="text-sm font-bold text-[#666768] no-underline  ml-2 hover:text-[#f96808] hover:underline">
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <img
                                src="/testfor-bottom.gif"
                                alt="Test For Bottom"
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-4 w-[258px]">
                        <div className="p-4 w-[80%]">
                            <div className="text-[16px] font-bold text-[#4482b7]">
                                Counselors available now to answer any questions
                            </div>
                            <div className="text-[18px] font-bold text-[#676767]">
                                <span id="numberassigned_3">000.000.0000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
