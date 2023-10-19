import React, { useState } from "react";
import Logo from "./Logo";
import { ReactComponent as IconFacebook } from "./icons/icon-facebook.svg";
import { ReactComponent as IconYoutube } from "./icons/icon-youtube.svg";
import { ReactComponent as IconTwitter } from "./icons/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "./icons/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "./icons/icon-instagram.svg";
import { ReactComponent as IconHamburgerMenu } from "./icons/icon-hamburger.svg";
import { ReactComponent as IconHamburgerMenuClose } from "./icons/icon-close.svg";
import "./css/main.css";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="h-[65px] md:h-auto fixed top-0 left-0 z-20 bg-White flex items-center w-full">
        <nav className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-GrayishBlue hover:text-black py-5 transition-all hover:border-b-4 border-b-LimeGreen hover:pb-0"
            >
              home
            </a>
            <a
              href="#about"
              className="text-GrayishBlue hover:text-black py-5 transition-all hover:border-b-4 border-b-LimeGreen hover:pb-0"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-GrayishBlue hover:text-black py-5 transition-all hover:border-b-4 border-b-LimeGreen hover:pb-0"
            >
              Contact
            </a>
            <a
              href="#blog"
              className="text-GrayishBlue hover:text-black py-5 transition-all hover:border-b-4 border-b-LimeGreen hover:pb-0"
            >
              Blog
            </a>
            <a
              href="#carreers"
              className="text-GrayishBlue hover:text-black py-5 transition-all hover:border-b-4 border-b-LimeGreen hover:pb-4"
            >
              Careers
            </a>
          </div>
          <button className="hidden md:block hover:opacity-50 bg-gradient-to-r from-LimeGreen to-BrightCyan font-medium text-White baseline rounded-full py-2 px-5">
            Request Invite
          </button>
          {!open ? (
            <IconHamburgerMenu
              className="block md:hidden hover:cursor-pointer"
              onClick={() => setOpen(true)}
            />
          ) : (
            <IconHamburgerMenuClose
              className="block md:hidden hover:cursor-pointer"
              onClick={() => setOpen(false)}
            />
          )}
        </nav>
      </header>
      {open && (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-slate-800 to-transparent h-screen z-10 px-5 md:hidden">
          <nav className="w-full bg-White rounded-md mt-[80px] flex flex-col space-y-5 items-center py-5">
            <a href="#home" className="text-GrayishBlue hover:text-LimeGreen">
              home
            </a>
            <a href="#about" className="text-GrayishBlue hover:text-LimeGreen">
              About
            </a>
            <a
              href="#contact"
              className="text-GrayishBlue hover:text-LimeGreen"
            >
              Contact
            </a>
            <a href="#blog" className="text-GrayishBlue hover:text-LimeGreen">
              Blog
            </a>
            <a
              href="#carreers"
              className="text-GrayishBlue hover:text-LimeGreen"
            >
              Careers
            </a>
          </nav>
        </div>
      )}
      <section id="cta" className="mt-[64px] w-full">
        <div className="flex-col-reverse md:flex-row flex container mx-auto items-center h-full">
          <div className="w-full flex flex-col space-y-5 mb-10 md:w-1/3 md:mb-10">
            <h1 className="text-5xl font-medium max-sm:text-3xl">
              Next generation digital banking
            </h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <div>
              <button className="hover:opacity-50 bg-gradient-to-r from-LimeGreen to-BrightCyan font-medium text-White rounded-full pt-2 pb-2.5 px-5">
                Request Invite
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-full ">
            <img
              className="mx-auto max-[767px]:h-[300px] max-[767px]:w-auto md:h-[700px] min-[2080px]:w-full min-[2080px]:static min-[2080px]:object-contain min-[2080px]:h-full md:absolute md:-top-10 md:-right-[3%] md:ml-auto md:w-auto w-full object-fill z-0 md:object-fill "
              src="images/image-mockups.png"
              alt="mockuup"
            />
          </div>
        </div>
      </section>
      <section className=" bg-LightGrayishBlue py-[80px]">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-10 max-sm:text-center">
            <h1 className="text-4xl max-sm:text-3xl">Why choose Easybank?</h1>
            <p className="mb-10 max-w-2xl">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 max-[656px]:justify-center">
            <div className="flex flex-col space-y-4 w-[300px] max-[656px]:items-center max-[656px]:text-center max-[656px]:w-[90%]">
              <img
                src="images/icons/icon-online.svg"
                className="w-14 h-14"
                alt="Online"
              />
              <h1 className="text-2xl font-medium">Online Banking</h1>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="flex flex-col space-y-4 w-[300px] max-[656px]:items-center max-[656px]:text-center max-[656px]:w-[90%]">
              <img
                src="images/icons/icon-budgeting.svg"
                className="w-14 h-14"
                alt="currency"
              />
              <h1 className="text-2xl font-medium">Simple Budgeting</h1>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="flex flex-col space-y-4 w-[300px] max-[656px]:items-center max-[656px]:text-center max-[656px]:w-[90%]">
              <img
                src="images/icons/icon-onboarding.svg"
                className="w-14 h-14"
                alt="Onboarding"
              />
              <h1 className="text-2xl font-medium">Fast Onboarding</h1>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="flex flex-col space-y-4 w-[300px] max-[656px]:items-center max-[656px]:text-center max-[656px]:w-[90%]">
              <img
                src="images/icons/icon-api.svg"
                className="w-14 h-14"
                alt="api"
              />
              <h1 className="text-2xl font-medium">Open API</h1>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-VeryLightGray py-[80px]">
        <div className="container mx-auto flex flex-col space-y-10">
          <h1 className="text-4xl">Latest Articles</h1>
          <div className="flex flex-wrap gap-5 max-[656px]:justify-center">
            <div className="flex flex-col space-y-0 w-[300px] max-[656px]:w-full">
              <img
                src="images/image-currency.jpg"
                alt="Online"
                className="w-full rounded-t-md h-[200px] object-cover max-h-[200px]"
              />
              <div className="p-8 bg-white rounded-b-md">
                <h3 className="text-xs my-2 text-GrayishBlue">
                  By Claire Robinson
                </h3>
                <a
                  href="#article"
                  className="text-xl font-medium hover:text-LimeGreen"
                >
                  Receive money in any currency with no fees
                </a>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-0 w-[300px] max-[656px]:w-full">
              <img
                src="images/image-restaurant.jpg"
                alt="Online"
                className="w-full rounded-t-md object-cover max-h-[200px]"
              />
              <div className="p-8 bg-white rounded-b-md">
                <h3 className="text-xs my-2 text-GrayishBlue">
                  By Wilson Hutton
                </h3>
                <a
                  href="#article"
                  className="text-xl font-medium hover:text-LimeGreen"
                >
                  Treat yourself without worrying about money
                </a>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-0 w-[300px] max-[656px]:w-full">
              <img
                src="images/image-plane.jpg"
                alt="Online"
                className="w-full rounded-t-md object-cover max-h-[200px]"
              />
              <div className="p-8 bg-white rounded-b-md">
                <h3 className="text-xs my-2 text-GrayishBlue">
                  By Wilson Hutton
                </h3>
                <a
                  href="#article"
                  className="text-xl font-medium hover:text-LimeGreen"
                >
                  Take your Easybank card wherever you go
                </a>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-0 w-[300px] max-[656px]:w-full">
              <img
                src="images/image-confetti.jpg"
                alt="Online"
                className="w-full rounded-t-md object-cover max-h-[200px]"
              />
              <div className="p-8 bg-white rounded-b-md">
                <h3 className="text-xs my-2 text-GrayishBlue">
                  By Claire Robinson
                </h3>
                <a
                  href="#article"
                  className="text-xl font-medium hover:text-LimeGreen"
                >
                  Our invite-only Beta accounts are now live!
                </a>
                <p>
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-DarkBlue py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="flex justify-between w-1/2 max-[600px]:w-full max-[410px]:flex-wrap max-[410px]:space-y-4">
              <div className="flex flex-col justify-between max-[410px]:w-full max-[410px]:items-center max-[410px]:space-y-5">
                <Logo color="white" />
                <nav className="flex space-x-3">
                  <a href="#facebook">
                    <IconFacebook className="fill-White hover:fill-LimeGreen" />
                  </a>
                  <a href="#youtube">
                    <IconYoutube className="fill-White hover:fill-LimeGreen" />
                  </a>
                  <a href="#twitter">
                    <IconTwitter className="fill-White hover:fill-LimeGreen" />
                  </a>
                  <a href="#pinterest">
                    <IconPinterest className="fill-White hover:fill-LimeGreen" />
                  </a>
                  <a href="#instagram">
                    <IconInstagram className="fill-White hover:fill-LimeGreen" />
                  </a>
                </nav>
              </div>
              <nav className="flex flex-col space-y-2 max-[410px]:w-full max-[410px]:items-center">
                <a
                  href="#about"
                  className="text-white hover:text-LimeGreen whitespace-nowrap"
                >
                  About Us
                </a>
                <a href="#contact" className="text-white hover:text-LimeGreen">
                  Contact
                </a>
                <a href="#blog" className="text-white hover:text-LimeGreen">
                  Blog
                </a>
              </nav>
              <nav className="flex flex-col space-y-2 max-[410px]:w-full max-[410px]:items-center">
                <a href="#carreers" className="text-white hover:text-LimeGreen">
                  Carreers
                </a>
                <a href="#support" className="text-white hover:text-LimeGreen">
                  Support
                </a>
                <a href="#p-policy" className="text-white hover:text-LimeGreen">
                  Privacy Policy
                </a>
              </nav>
            </div>
            <div className="flex flex-col space-y-6 max-[600px]:w-full max-[600px]:items-center max-[600px]:mt-10">
              <button className="self-end hover:opacity-50 bg-gradient-to-r from-LimeGreen to-BrightCyan font-medium text-White baseline rounded-full py-2 px-5 max-[600px]:self-center">
                Request Invite
              </button>
              <p>
                &copy;Easybank, by{" "}
                <a
                  href="htpps://www.github.com/mohamedelbachir"
                  className="text-LimeGreen"
                >
                  Mohamed
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
