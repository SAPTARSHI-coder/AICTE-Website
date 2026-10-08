import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventAtAGlance from "@/components/EventAtAGlance";
import AboutWorkshop from "@/components/AboutWorkshop";
import AboutVaani from "@/components/AboutVaani";
import AboutUniversity from "@/components/AboutUniversity";
import AboutDepartment from "@/components/AboutDepartment";
import TechnologyFocus from "@/components/TechnologyFocus";
import Objectives from "@/components/Objectives";
import ExpectedOutcomes from "@/components/ExpectedOutcomes";
import ResourcePersons from "@/components/ResourcePersons";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Eligibility from "@/components/Eligibility";
import OrganizingCommittee from "@/components/OrganizingCommittee";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Event At A Glance Information Strip */}
        <EventAtAGlance />

        {/* About The Workshop */}
        <AboutWorkshop />

        {/* About AICTE-VAANI Scheme */}
        <AboutVaani />

        {/* About Adamas University */}
        <AboutUniversity />

        {/* About Department of Electrical & Electronics Engineering */}
        <AboutDepartment />

        {/* Technology Focus: What You'll Explore */}
        <TechnologyFocus />

        {/* 10 Official Objectives */}
        <Objectives />

        {/* Expected Outcomes */}
        <ExpectedOutcomes />

        {/* Resource Persons Profile Cards */}
        <ResourcePersons />

        {/* Detailed Two-Day Schedule */}
        <Schedule />

        {/* Official Registration & ATAL Academy Steps */}
        <Registration />

        {/* Eligibility Criteria */}
        <Eligibility />

        {/* Institutional Leadership & Organizing Committee */}
        <OrganizingCommittee />

        {/* Dedicated Coordinators Contact */}
        <CoordinatorsSection />

        {/* Campus & Venue Details */}
        <VenueSection />
      </main>

      {/* Official Footer */}
      <Footer />
    </div>
  );
}
