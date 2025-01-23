import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="w-[980px] flex flex-row items-end">
        <div className="w-full">
          <div className="px-5 mb-2">
            <div
              className="flex items-center justify-between w-full bg-contain"
              style={{
                backgroundImage: "url('/call-bg.gif')",
                height: "49px",
              }}
            >
              <Image src="/call-left.gif" alt="Call Left" className="h-full" width={329} height={49} />
              <div className="flex items-center justify-center text-white font-bold">
                <span className="text-lg">Call NOW for Testing</span>
                <span id="numberassigned_2" className="ml-2 text-lg">
                  000.000.0000
                </span>
              </div>
              <Image
                src="/call-right.gif"
                alt="Call Right"
                className="h-full"
                width={9} height={49}
              />
            </div>
          </div>
        </div>
        <div className="w-[258px]">
          <div className="w-[258px]">
            <div className="px-4 w-[80%]">
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
      <footer>
        <div className="w-[980px] p-0">
          <div className="text-center font-sans text-[13px] font-normal text-[#666768] no-underline">
            <a href="index.html" className="hover:text-[#f96808] hover:underline">Home</a> |
            <a href="About-Us.html" className="hover:text-[#f96808] hover:underline"> About Us</a> |
            <a href="FAQ.html" className="hover:text-[#f96808] hover:underline"> FAQ</a> |
            <a href="Terms.html" className="hover:text-[#f96808] hover:underline"> Terms &amp; Conditions</a> |
            <a href="Privacy-Policy.html" className="hover:text-[#f96808] hover:underline"> Privacy Policy</a> |
            <a href="Contact-Us.html" className="hover:text-[#f96808] hover:underline"> Contact Us</a>
            <br />
            <br />
            <div id="footer" className="bg-[#e6e6e6] py-[5px]">
              <h1 className="text-[#a7a7a7] text-[0.8em] text-center mb-[5px]">
                Local HIV Testing Clinics, Nationwide HIV Testing Sites Including: New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, Dallas, San Diego, San Jose, Detroit, San Francisco, Jacksonville, Indianapolis, Austin, Columbus, Fort Worth, Charlotte, Memphis, Baltimore, El Paso, Milwaukee, Denver, Seattle, Nashville, Washington, Las Vegas, Portland, Louisville, Oklahoma City, Tucson, Atlanta, Albuquerque, Fresno, Sacramento, Long Beach, Mesa, Kansas City, Omaha, Cleveland, Virginia Beach, Miami, Oakland, Raleigh, Tulsa, Minneapolis, Colorado Springs, Arlington, St. Louis, Wichita
                <br /><br />
                Tags: confidential, gonorrhea testing, chlamydia testing, syphilis testing, accurate, hiv testing, std screening, std symptoms, rapid, std blood tests, hepatitis testing, std tests, reliable, std clinic, std diagnosis, local, tests for std, std chlamydia, std information, easy, herpes testing, std gonorrhea, affordable, confidential testing, std info, std symptom, std infection, convenient, std clinics, std herpes, std testing locations, std treatment, hiv std, std syphilis, hpv testing, anonymous, aids testing, home std tests, std symptons, std facts, std disease, symptoms of std, sti testing, health std, private, testing laboratories, quick, std testing, pictures of stds, chlamydia symptoms, std symptoms, syphilis, symptoms of chlamydia, clinics, bladder infection, list of stds, gonorrhea symptoms, gonorrhea, fast, confidential std testing, std photos, pictures of chlamydia, pictures of std, stds, photo of syphilis, std symptoms in women
                <br />
                <span id="botlinks">
                  <Link href="/" className="text-center font-sans text-[13px] font-normal text-[#666768] no-underline hover:text-[#f96808] hover:underline">HIV Testing Clinics</Link>
                </span>
              </h1>
              <p className="text-[#a7a7a7] text-[0.62em] text-center">
                Copyright © 2009 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
