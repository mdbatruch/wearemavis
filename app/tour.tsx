"use client"

import React, { useEffect, forwardRef } from "react"

const Tour: React.FC = forwardRef<HTMLDivElement>(() => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://widgetv3.bandsintown.com/main.min.js"
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="tour" className="tour bg-white p-16 w-full">
      <h2 className="row-100 font-avenir title text-black">Tour</h2>
      <div className="bg-black bg-black p-8">
        <a
          className="bit-widget-initializer"
          data-artist-name="id_122912"
          data-background-color="#E2DA87"
          data-separator-color="#000000"
          data-text-color="#000000"
          data-font="Helvetica"
          data-auto-style="true"
          data-button-label-capitalization="capitalize"
          data-header-capitalization="undefined"
          data-location-capitalization="capitalize"
          data-venue-capitalization="capitalize"
          data-display-local-dates="true"
          data-local-dates-position="tab"
          data-display-past-dates="false"
          data-display-details=""
          data-display-lineup=""
          data-display-start-time=""
          data-social-share-icon="true"
          data-display-limit="all"
          data-date-format="MMM. D, YYYY"
          data-date-orientation="horizontal"
          data-date-border-color="#4A4A4A"
          data-date-border-width="1px"
          data-date-capitalization="undefined"
          data-date-border-radius="10px"
          data-event-ticket-cta-size="medium"
          data-event-custom-ticket-text="undefined"
          data-event-ticket-text="TICKETS"
          data-event-ticket-icon=""
          data-event-ticket-cta-text-color="#FFFFFF"
          data-event-ticket-cta-bg-color="#000000"
          data-event-ticket-cta-border-color="#000000"
          data-event-ticket-cta-border-width="0px"
          data-event-ticket-cta-border-radius="0px"
          data-sold-out-button-text-color="#FFFFFF"
          data-sold-out-button-background-color="#4A4A4A"
          data-sold-out-button-border-color="#4A4A4A"
          data-sold-out-button-clickable="true"
          data-event-rsvp-position="left"
          data-event-rsvp-cta-size="medium"
          data-event-rsvp-only-show-icon="undefined"
          data-event-rsvp-text="REMIND ME"
          data-event-rsvp-icon=""
          data-event-rsvp-cta-text-color="#000000"
          data-event-rsvp-cta-bg-color="#FFFFFF"
          data-event-rsvp-cta-border-color="#000000"
          data-event-rsvp-cta-border-width="1px"
          data-event-rsvp-cta-border-radius="0px"
          data-follow-section-position="top"
          data-follow-section-alignment="center"
          data-follow-section-header-text=""
          data-follow-section-cta-size="medium"
          data-follow-section-cta-text=""
          data-follow-section-cta-icon="true"
          data-follow-section-cta-text-color="#FFFFFF"
          data-follow-section-cta-bg-color="#000000"
          data-follow-section-cta-border-color="#000000"
          data-follow-section-cta-border-width="0px"
          data-follow-section-cta-border-radius="0px"
          data-play-my-city-position="bottom"
          data-play-my-city-alignment="Center"
          data-play-my-city-header-text=""
          data-play-my-city-cta-size="medium"
          data-play-my-city-cta-text="REQUEST A SHOW"
          data-play-my-city-cta-icon="true"
          data-play-my-city-cta-text-color="#FFFFFF"
          data-play-my-city-cta-bg-color="#000000"
          data-play-my-city-cta-border-color="#000000"
          data-play-my-city-cta-border-width="0px"
          data-play-my-city-cta-border-radius="0px"
          data-optin-font=""
          data-optin-text-color=""
          data-optin-bg-color=""
          data-optin-cta-text-color=""
          data-optin-cta-bg-color=""
          data-optin-cta-border-width=""
          data-optin-cta-border-radius=""
          data-optin-cta-border-color=""
          data-language="en"
          data-layout-breakpoint="900"
          data-app-id=""
          data-affil-code=""
          data-bit-logo-position="bottomRight"
          data-bit-logo-color="transparent"
        ></a>
      </div>
    </div>
  )
});

Tour.displayName = "Tour";

export default Tour
