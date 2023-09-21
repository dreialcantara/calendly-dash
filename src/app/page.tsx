"use client";
import React, { useEffect, useState } from "react";
import DateAvailable from "@/components/DateAvailable";
import { CenteredContainer } from "@/styles/CenteredContainer";
import { ContainerBody, CustomH1 } from "@/styles/ContainerBody";

const Account: React.FC = () => {
  return (
    <ContainerBody>
      <CustomH1>
        <a>Next Available Times</a>{" "}
      </CustomH1>
      <CenteredContainer>
        <DateAvailable
          text="Group Hair Loss Treatment Onboarding"
          Uri="https://api.calendly.com/event_types/b681a1d9-48ab-4f4c-9b32-5c8e901786cf"
        />
        <DateAvailable
          text="Duty Clinician"
          Uri="https://api.calendly.com/event_types/b681a1d9-48ab-4f4c-9b32-5c8e901786cf"
        />
        <DateAvailable
          text="10 Minute Video Call"
          Uri="https://api.calendly.com/event_types/1d22417f-ebe7-4d9d-8e98-aefe59d618b7"
        />
        <DateAvailable
          text="10 Minute Phone Call"
          Uri="https://api.calendly.com/event_types/d018b18c-6245-49e3-ac81-66b98efe938d"
        />
        <DateAvailable
          text="10 Minute Hair Clinician Phone Call"
          Uri="https://api.calendly.com/event_types/d650738e-f0fb-49a3-b276-75a7fa4681cb"
        />
        <DateAvailable
          text="10 Minute Hair Phone Call"
          Uri="https://api.calendly.com/event_types/dfa23968-23a7-43d6-b086-e276b814d06f"
        />
        <DateAvailable
          text="10 Minute Hair Video Call"
          Uri="https://api.calendly.com/event_types/010e4ca2-34e8-436e-82f1-93ffb21161f7"
        />
        <DateAvailable
          text="20 Minute Hair Onboarding Video Call"
          Uri="https://api.calendly.com/event_types/a5d55bb8-f610-404f-b13b-cad3a3e0880f"
        />
        <DateAvailable
          text="20 Minute Phone Call (accessibility)"
          Uri="https://api.calendly.com/event_types/c3640a35-3b3a-4512-80c6-23c0abc02fbb"
        />
        <DateAvailable
          text="8 Week Hair Check In Call"
          Uri="https://api.calendly.com/event_types/8ab92843-28d4-4cd7-a8f2-f222e0500eb4"
        />
        <DateAvailable
          text="10 Minute Hair Onboarding Video Call"
          Uri="https://api.calendly.com/event_types/a3d912fa-5d68-4204-8267-de92e87fe0dd"
        />
        <DateAvailable
          text="10 Minute Hair Onboarding Call"
          Uri="https://api.calendly.com/event_types/b4858a0a-af84-48a1-9848-927b9a22d879"
        />
        <DateAvailable
          text="10 Minute Hair Phone Call"
          Uri="https://api.calendly.com/event_types/90e25609-593f-47d0-bf11-fb6f9f45b081"
        />
      </CenteredContainer>
    </ContainerBody>
  );
};

export default Account;
