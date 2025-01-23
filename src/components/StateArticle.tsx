import React from "react";

interface props {
    stateName: string,
    testName: string,
};

export const StateArticle = ({ stateName, testName }: props) => {
    return (
        <>
            {(testName === "hiv") && (<div className="text-[13px] text-[#676767] p-5 w-[720px]">
                <h1 className="text-[#676767] text-[2em] font-bold">Confidential HIV Testing in {stateName} : Taking Control of Your Health Today</h1>
                <p className="py-2">
                    Keeping control of your health and private personal health information is one of the most empowering
                    choices you can make. It means being informed, knowing where you stand, and making decisions that
                    positively affect your future and well-being. And one of the best ways to do this in
                    <strong> {stateName} </strong> is through <strong> confidential HIV testing </strong> and STD testing.
                    Whether you&apos;re in a committed relationship or living independently, regularly testing for HIV and
                    other STDs is a smart, responsible choice that puts your health—and your privacy—at the forefront.
                </p>
                <p className="py-2">
                    We understand that privacy matters. When it comes to health, particularly something as personal as
                    HIV testing, confidentiality isn&apos;t just a luxury; it&apos;s a necessity. Your health information is yours
                    and yours alone, unless you decide to share it. By choosing <strong> confidential HIV testing </strong>
                    in <strong> {stateName} </strong>, you are in complete control of who knows your status and when they
                    know it. This is your health, and your personal health information.
                </p>
                <p className="py-2">
                    It all begins with a simple phone call to us. Making that call is the key step toward securing
                    privacy, convenience, and peace of mind. When you reach out to us, we schedule you at a
                    <strong> local HIV testing center </strong> near you in <strong> {stateName} </strong>, where a simple
                    sample is taken, professionally tested, and the results are shared only with you—no one else. We
                    serve as the bridge between you and the testing facility, ensuring that confidentiality is
                    maintained throughout the process.
                </p>
                <p className="py-2">
                    The <strong> local HIV testing clinic </strong> in <strong> {stateName} </strong> is where the test
                    takes place, but the true value comes from the discretion we provide from start to finish. We
                    understand that the process should be as seamless and straightforward as possible. Once you call us,
                    we handle all the logistics—scheduling your appointment at a nearby <strong> local HIV testing
                        facility </strong> in <strong> {stateName} </strong>, directing you to the appropriate location,
                    and ensuring that your test results are securely delivered directly to you. No one else will know
                    your status unless you choose to share it.
                </p>
                <p className="py-2">
                    By contacting us today, you&apos;re taking charge of your future health. It&apos;s about being informed and
                    empowered, especially when it comes to something as important as <strong> confidential HIV testing </strong>.
                    Whether you&apos;re experiencing symptoms, have had concerns in the past, or simply want to be proactive,
                    we&apos;re here to help. With our <strong> local HIV testing lab </strong> near you in <strong> {stateName} </strong>,
                    we ensure your test is quick, professional, and results are kept completely private.
                </p>
                <p className="py-2">
                    The process is simple and straightforward. Once your results are ready—usually within a day or so (up to 3 days)—
                    they are shared only with you. And because we respect your privacy, your test results are kept confidential.
                    This means that your <strong> HIV test </strong> results are handled in a way that is solely for your eyes, with no
                    disclosure unless you make the decision to share them with someone else.
                </p>
                <p className="py-2">
                    <strong> Confidential HIV testing </strong> is about protecting your health information, and also allows you to
                    be prepared and confident, knowing your status. It&apos;s about empowerment—about being proactive in maintaining
                    your health and controlling your future. Regardless of whether you live in <strong> {stateName} </strong> or any
                    other state across the United States, your access to a <strong> local HIV testing center </strong> is just one
                    phone call away.
                </p>
                <p className="py-2">
                    Your journey toward health and privacy begins the moment you pick up the phone and call us. Make that call
                    today. It&apos;s the first step in securing peace of mind, maintaining privacy, and taking control of your health.
                </p>
                <p className="py-2">
                    In this world, your health and privacy must come first. Empower yourself to make informed decisions and
                    take responsibility for your future. Whether you&apos;re in <strong> {stateName} </strong> or anywhere in the United
                    States, we&apos;re here to support you and conveniently schedule you at a <strong> local HIV testing clinic </strong>
                    by you. A professional will collect your sample, which will then be sent to the lab for testing. All it takes
                    is one phone call to us to get started.
                </p>
                <p className="py-2">
                    <strong> Get tested today, know tomorrow. </strong>
                </p>
            </div>
            )}
            {(testName === "std") && (<div className="text-[#676767] text-[13px] p-5 w-[720px]">
                <h1 className="font-bold text-[2em] text-[#676767]">
                    Confidential STD Testing in {stateName} - Empower Yourself with Privacy &amp; Control
                </h1>
                <p className="py-2">
                    There&apos;s a lot of stigma surrounding sexually transmitted diseases, but the truth is, getting tested is an empowering and necessary step for everyone. Discovering that you have an STD can be overwhelming, but it&apos;s important to remember that early detection means control. Whether you&apos;re concerned about potential risks, protecting your loved ones, or simply getting the answers you need, <strong>STD testing in {stateName}</strong> is an essential part of maintaining your health, health information, and making informed choices for the future.
                </p>
                <p className="py-2">
                    The most convenient and confidential way to find out your status is by contacting us. Our service offers a private, straightforward method for <strong>STD testing</strong>, so you can get the information you need without feeling embarrassed. With our network of <strong>local STD testing centers in {stateName}</strong> and across the United States, we can schedule your appointment without the discomfort of discussing such personal matters with someone you see regularly. Our confidential process means you can relax, ask questions, and receive expert advice from trained professionals, especially if the results come back unfavorable to you. With same-day appointments available, and fast, reliable results, getting tested has never been simpler or more discreet.
                </p>
                <p className="py-2">
                    So, how do you know if you should get <strong>STD tested in {stateName}</strong>? The reality is that anyone who is sexually active could be at risk. STDs can be transmitted through unprotected sex, sharing needles, or through contact with contaminated blood. It&apos;s important to remember that confidential <strong>STD testing</strong> isn&apos;t just for those who suspect they&apos;ve been exposed—it&apos;s for everyone who wants to take control of their health and health information. If you&apos;re pregnant or breastfeeding, it&apos;s especially crucial to know your <strong>STD status</strong> to protect your child. Confidential, <strong>local STD testing in {stateName}</strong> provides a safe, reliable, and private way to get the information you need to stay healthy and protect those around you.
                </p>
                <p className="py-2">
                    Beyond protecting your loved ones, there are numerous reasons to find out your <strong>STD status</strong> as soon as possible. For one, if you test positive for an STD, you could be putting your current or future sexual partners at risk. Knowing your status allows you to take action, protect others, and, if necessary, start treatment. While there might not always be a cure for every <strong>STD</strong>, there are treatments available that can manage symptoms and prevent further complications. Taking control of your health means you can take proactive steps toward staying healthy and preventing the spread of infections.
                </p>
                <p className="py-2">
                    Make the call now; contact our <strong>confidential STD testing</strong> hotline today. You can get the information you need in a way that&apos;s discreet, convenient, and most importantly, confidential. <strong>Get tested today, know tomorrow.</strong>
                </p>
            </div>
            )}
        </>
    );
};
