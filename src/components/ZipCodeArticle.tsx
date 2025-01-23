import React from "react";

interface props {
    zipCode: string,
    cityName: string,
    stateAbbreviation: string,
    testName: string,
}

export const ZipCodeArticle = ({ zipCode, cityName, stateAbbreviation, testName }: props) => {
    return (
        <>
            {(testName === "hiv") && (<div className="text-sm text-gray-600 p-5 w-[720px]">
                    <h1 className="text-gray-600 text-2xl font-bold">
                        Confidential HIV Testing in <span className="text-primary">{cityName}</span>{" "},{" "}
                        <span className="text-primary">{stateAbbreviation}</span>{" "}
                        <span className="text-primary">{zipCode}</span>: Empower Yourself with Control Over Your Health and Health Information
                    </h1>
                    <p className="py-2">
                        When it comes to your health, you deserve to have all the facts and be in control of them. Having clarity and certainty gives you the
                        confidence to make the right decisions for your future. <strong>Confidential HIV testing</strong> and STD testing give you exactly
                        that. It&apos;s the smart, responsible choice—one that puts you in charge, with all the privacy and control you need.
                    </p>
                    <p className="py-2">
                        In today&apos;s world, staying informed about your health is more important than ever. Whether you&apos;re worried about HIV symptoms or simply
                        taking a proactive step, <strong>confidential HIV testing</strong> through us allows you to take control of the situation on your
                        terms, in the most private, secure way possible.
                    </p>
                    <p className="py-2">
                        The process is simple and entirely up to you. First, you make the call to us. This is the key moment—when you take action and start
                        your journey to peace of mind. We&apos;ll schedule you at a <strong>local HIV testing center</strong> or{" "}
                        <strong>local HIV testing clinic</strong> in the{" "}
                        <strong>
                            {cityName}, {stateAbbreviation} {zipCode}
                        </strong>{" "}
                        area convenient to you, or wherever you are in the United States. The best part? Your results are securely delivered to only you.
                        Your privacy is preserved, and no one else will know unless you choose to share.
                    </p>
                    <p className="py-2">
                        Here&apos;s how it works: after you&apos;ve made that call to us, you&apos;re scheduled at a <strong>local HIV testing lab</strong> or{" "}
                        <strong>local HIV testing facility</strong> nearby you. In the{" "}
                        <strong>
                            {cityName}, {stateAbbreviation} {zipCode}
                        </strong>{" "}
                        area, there are trusted, professional lab locations in our network, ready to serve you. They&apos;ll take a simple sample, and within just
                        a few days, you&apos;ll receive your results—securely and discreetly. This is all about maintaining your privacy while giving you the
                        information you need to make the best decisions for your health and future.
                    </p>
                    <p className="py-2">
                        Own your health and personal information with confidence. Taking the first step to call us shows you&apos;re in control and committed to
                        your well-being. By knowing your status, you empower yourself to make informed decisions that shape your future and ensure you&apos;re on
                        the right path. <strong>Confidential HIV testing</strong> is that action; it&apos;s a declaration of control, responsibility, and
                        confidence.
                    </p>
                    <p className="py-2">
                        The first step is one phone call to us. Whether you&apos;re in the{" "}
                        <strong>
                            {cityName} , {stateAbbreviation} {zipCode}
                        </strong>{" "}
                        area, or anywhere else in the country, your privacy and peace of mind are within reach. Take charge now.{" "}
                        <strong>Get tested today, know tomorrow.</strong>
                    </p>
                </div>
            )}
            {(testName === "std") && (<div className="text-sm text-gray-600 p-5 w-[720px]">
                    <h1 className="text-gray-600 text-2xl font-bold">
                        Own Your Health and Health Information: The Power of Confidential STD Testing in{" "}
                        <span className="text-primary">{cityName}</span> , <span className="text-primary">{stateAbbreviation}</span>{" "}
                        <span className="text-primary">{zipCode}</span>
                    </h1>
                    <p className="py-2">
                        When it comes to taking care of your health, one of the most responsible actions you can take is getting tested for sexually
                        transmitted diseases (STDs). Confidential <strong>STD testing</strong> is essential for maintaining control over your health
                        information and well-being. Whether you are experiencing <strong>STD symptoms</strong> or simply want to ensure you&apos;re in good health,
                        testing gives you the peace of mind that comes with knowing your status.
                    </p>
                    <p className="py-2">
                        The process is simple and starts with a phone call. By calling us, you&apos;re taking the first step toward complete privacy and
                        discretion. We&apos;ll connect you with a <strong>local STD testing center</strong> (or lab location) near you, ensuring that you&apos;re able
                        to get tested in a professional, confidential setting. Your results will be shared directly with you, and only you, maintaining full
                        control over your health information.
                    </p>
                    <p className="py-2">
                        Once you call us, we connect you to a <strong>local STD testing center</strong> near you. Whether you&apos;re in{" "}
                        <strong>
                            {cityName}, {stateAbbreviation} {zipCode}
                        </strong>{" "}
                        or anywhere across the country, we can connect you to a trusted local STD testing lab that will handle the sample collection and
                        professional testing, all with complete privacy. We handle the system navigation for you, making it simple and straightforward. The
                        testing center will simply collect a sample, and our lab professionals will handle the testing. You&apos;ll receive your results in a
                        secure and private manner, and you&apos;ll be the only one who knows them—unless you choose to share your results.
                    </p>
                    <p className="py-2">
                        It&apos;s important to note that the process itself is designed to be quick and private. Whether you&apos;re testing at a{" "}
                        <strong>local STD testing clinic</strong>, <strong>local STD testing facility</strong>, or <strong>local STD testing lab</strong>, the
                        focus is on maintaining your confidentiality. We are here to ensure that your information stays private, and the results are handled
                        discreetly. Your status remains private unless you decide to share it. You are in control.
                    </p>
                    <p className="py-2">
                        Confidential <strong>STD testing</strong> offers several benefits. Beyond the obvious health implications, knowing your status can
                        help you make informed decisions about your sexual health, relationships, and future. It allows you to take responsibility for your
                        health, without worrying about unnecessary complications or sharing your private information with others.
                    </p>
                    <p className="py-2">
                        The convenience of making one simple phone call to schedule a visit at a <strong>local STD testing center</strong> or{" "}
                        <strong>local STD testing lab</strong> makes the process easy for anyone. Once the appointment is scheduled, all you need to do is
                        show up, provide a sample, and from there we will notify you as soon as results are in—typically available within a day. With
                        confidentiality and convenience as our top priority, this process ensures that only you have access to your health information.
                    </p>
                    <p className="py-2">
                        The bottom line is this: confidential <strong>STD testing</strong> is about taking control of your health and making informed
                        decisions for your future. It&apos;s easy, private, and, most importantly, empowering.
                    </p>
                    <p className="py-2">
                        If you&apos;re ready to take the next step in protecting your health and health information, make the call today.{" "}
                        <strong>Get tested today, know tomorrow.</strong>
                    </p>
                </div>
            )}
        </>
    );
};
