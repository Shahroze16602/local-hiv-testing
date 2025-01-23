import React from "react";

interface props {
    cityName: string,
    stateName: string,
    testName: string,
}

export const CityArticle = ({ cityName, stateName, testName }: props) => {
    return (
        <>
            {(testName === "hiv") && (<div className="text-sm text-gray-600 p-5 w-[720px]">
                    <h1 className="text-gray-600 text-2xl font-bold">
                        Empower Your Health: The Strength of Confidential HIV Testing in {stateName} , {cityName}
                    </h1>
                    <p className="py-2">
                        In a world that demands transparency, there are some aspects of your life that are yours and yours alone. Your health,
                        your body, and the information about it belong to you—no one else. When it comes to <strong>confidential HIV testing</strong>{" "}
                        and STD testing, you are in the driver&apos;s seat. This simple yet powerful act allows you to take control of your future, knowing
                        that the information you receive is yours to share—or not share—at your discretion.
                    </p>
                    <p className="py-2">
                        <strong>Confidential HIV testing</strong> in <strong>{stateName}</strong>, <strong>{cityName}</strong> is about knowing your health
                        status; and reclaiming your power. Whether you are currently experiencing symptoms or simply seeking peace of mind,
                        <strong>confidential HIV testing</strong> ensures that you are the one who makes decisions about your body and your future. The
                        benefits are profound: you gain awareness, peace, and the control that comes from knowing your status. With <strong>confidential HIV testing</strong>,
                        the privacy and security of your information remain in your hands.
                    </p>
                    <p className="py-2">
                        It&apos;s easy to understand why so many choose <strong>confidential HIV testing</strong>: it&apos;s about taking responsibility. It&apos;s about
                        ensuring that you are empowered in your health decisions. The first step on this journey starts with one phone call. A simple call
                        that sets in motion everything you need to confidently and privately understand your health status.
                    </p>
                    <p className="py-2">
                        Our network of <strong>local HIV testing centers</strong>, <strong>local HIV testing clinics</strong>, and <strong>local HIV testing labs</strong>{" "}
                        across the country are ready to help, and they are equipped to test you with the utmost care and discretion. Once you call us,
                        we will help you schedule with a <strong>local HIV testing facility</strong> in <strong>{stateName}</strong>, <strong>{cityName}</strong>, where you will
                        provide a sample for testing. Afterward, the results will be sent directly to you—no one else. You are the only one who needs to
                        know your status unless you choose to share it with others.
                    </p>
                    <p className="py-2">
                        Even if you live in the <strong>{stateName}</strong>, <strong>{cityName}</strong> area, or anywhere else in the country, we have a{" "}
                        <strong>local HIV testing center</strong> near you, ready to guide you through the process with care, respect, and confidentiality.
                        The entire process—calling us, getting tested, and receiving your results—is designed to be simple and private, empowering you to
                        take control of your health without concern.
                    </p>
                    <p className="py-2">
                        The beauty of <strong>confidential HIV testing</strong> lies in the peace of mind it offers. Regardless of your situation, whether
                        you&apos;re in a relationship or living independently, knowing your status allows you to make informed decisions and take proactive
                        steps in protecting your health. You gain awareness, control, and peace of mind—steps that lead you to a healthier, more empowered
                        future.
                    </p>
                    <p className="py-2">
                        Make the call today. This small but crucial action sets everything in motion, ensuring your privacy, your discretion, and your
                        peace of mind. With our <strong>confidential HIV testing</strong> service, your results are private and shared only with you. You hold
                        the keys to your health, and you decide how much of that information to share, if any. Your health is in your hands, and through this
                        empowering choice, you claim control over it.
                    </p>
                    <p className="py-2">
                        It all begins with one call to us. <strong>Get tested today, know tomorrow.</strong>
                    </p>
                </div>
            )}
            {(testName === "std") && (<div className="text-sm text-gray-600 p-5 w-[720px]">
                    <h1 className="text-gray-600 text-2xl font-bold">
                        Control Your Health & Information: The Power of Confidential STD Testing in{" "}
                        <span className="text-primary">{stateName}</span>, <span className="text-primary">{cityName}</span>
                    </h1>
                    <p className="py-2">
                        In today&apos;s world, where personal health is your most valuable asset, controlling your health information is just as important
                        as controlling your health itself. And there&apos;s one key step to maintaining that control: <strong>confidential STD testing</strong>.
                        Whether you&apos;re in a committed relationship, exploring your options, or living independently in <strong>{stateName}</strong>,{" "}
                        <strong>{cityName}</strong>, getting tested is a responsible choice. It&apos;s your body, your health, and your privacy—and you deserve
                        to be empowered by both.
                    </p>
                    <p className="py-2">
                        You may wonder, &quot;Why get STD tested confidentially?&quot; Even if you don&apos;t feel any <strong>STD symptoms</strong>, even if you think
                        you&apos;re healthy, or perhaps you&apos;re simply not sure, knowing your health status is crucial. The truth is, we live in a world where
                        information travels fast and people often overlook the significance of privacy. The best way to safeguard your future is by taking
                        control now.
                    </p>
                    <p className="py-2">
                        The first step toward making that critical, empowering decision is simple: make one phone call. Calling us is your ticket to a
                        discreet, private, and professional <strong>STD testing</strong> experience. We handle everything with care and confidentiality. Your
                        health information is yours—and yours alone—unless you choose to share it.
                    </p>
                    <p className="py-2">
                        If you&apos;re in the <strong>{stateName}</strong>, <strong>{cityName}</strong> area, we&apos;ve got you covered with a convenient location nearby,
                        whether you&apos;re in the heart of the city or its surrounding neighborhoods. Once you reach out to us, we will schedule you at a{" "}
                        <strong>local STD testing center</strong> or lab in your area. From here, the process is straightforward. A simple sample is taken,
                        professionally tested, and the results are shared with you—only you; usually within 3 days. Our service is your bridge to privacy,
                        ensuring that your information stays completely confidential throughout the entire process.
                    </p>
                    <p className="py-2">
                        Confidential <strong>STD testing</strong> empowers you by giving you the knowledge you need to make informed health decisions. In
                        today&apos;s fast-paced world, we often forget that knowing where we stand with our health is important for us, and for the people around
                        us too. When you know your health status, you hold the power to protect yourself and others.
                    </p>
                    <p className="py-2">
                        Knowing your health status is the freedom that comes with <strong>confidential STD testing</strong>—the ability to keep your health
                        information private, shared only with you, unless you decide otherwise. This is your choice. You can choose to share your status with
                        your doctor or with someone else in your life, but that decision is entirely yours to make.
                    </p>
                    <p className="py-2">
                        Whether you are in the <strong>{stateName}</strong>, <strong>{cityName}</strong> area, or anywhere in the United States, scheduling a
                        private STD test is simple. One single call to us is all it takes to schedule your visit to a <strong>local STD testing clinic</strong>{" "}
                        or <strong>local STD testing facility</strong> in the <strong>{stateName}</strong>, <strong>{cityName}</strong> area. Our streamlined
                        process ensures that everything from the appointment scheduling to the testing is discreet and straightforward. The best part? You
                        don&apos;t have to deal with long waits, excessive paperwork, or unnecessary disclosures. The test is taken at a <strong>local STD testing
                        lab</strong>, and your results are shared with you, securely and privately within 3 days.
                    </p>
                    <p className="py-2">
                        Some might hesitate, thinking that their doctor or insurance company will know their test results. Let&apos;s clear this up: with{" "}
                        <strong>confidential STD testing</strong>, you hold the reins. Whether you&apos;re living in <strong>{stateName}</strong>,{" "}
                        <strong>{cityName}</strong> or anywhere else in the country, your privacy is the priority. We are simply the trusted middleman who
                        ensures that your results are kept private from your doctor or your insurance company.
                    </p>
                    <p className="py-2">
                        The key is calling us today. Once you make that call, you are taking the first step toward not just knowing your health status but
                        protecting it. Taking control of your health is about being proactive, and there&apos;s no better time than now to make that important
                        decision. In the end, getting <strong>STD tested</strong> is a responsible choice that benefits your future, your relationships, and
                        your peace of mind.
                    </p>
                    <p className="py-2">
                        It all starts with a phone call. One quick call to us can connect you to our network of <strong>local STD testing centers</strong> or{" "}
                        <strong>local STD testing labs</strong> in <strong>{stateName}</strong>, <strong>{cityName}</strong> where the process is simple, the
                        service is discreet, and the results are yours and yours alone. It&apos;s time to make the responsible choice and take control of your
                        health and health information.
                    </p>
                    <p className="py-2">
                        Remember: <strong>confidential STD testing</strong> is about privacy, control, and empowerment. It&apos;s about knowing that your health
                        information stays with you—unless you decide otherwise. Your health journey is your own, and we&apos;re here to make sure that every step
                        of the process is simple, private, and empowering.
                    </p>
                    <p className="py-2">
                        <strong>Get tested today, know tomorrow.</strong>
                    </p>
                </div>
            )}
        </>
    );
};
