"use client";

import { useEffect } from "react";
import Script from "next/script";

// Define the SimplybookWidget config interface
interface SimplybookWidgetConfig {
  widget_type: string;
  url: string;
  theme: string;
  theme_settings: {
    timeline_show_end_time: string;
    timeline_modern_display: string;
    hide_company_label: string;
    timeline_hide_unavailable: string;
    hide_past_days: string;
    sb_base_color: string;
    btn_color_1: string;
    link_color: string;
    display_item_mode: string;
    body_bg_color: string;
    sb_review_image: string;
    dark_font_color: string;
    light_font_color: string;
    sb_company_label_color: string;
    hide_img_mode: string;
    sb_busy: string;
    sb_available: string;
  };
  timeline: string;
  datepicker: string;
  is_rtl: boolean;
  app_config: {
    clear_session: number;
    allow_switch_to_ada: number;
    predefined: unknown[];
  };
  container_id: string;
}

// Declare the SimplybookWidget constructor
declare global {
  interface Window {
    SimplybookWidget?: new (config: SimplybookWidgetConfig) => unknown;
  }
}

const TableBookingV2 = () => {
  useEffect(() => {
    // The widget initialization 
    return () => {
      if (typeof window !== "undefined" && window.SimplybookWidget) {
        window.SimplybookWidget = undefined;
      }
    };
  }, []);

  useEffect(() => {
    // Add custom CSS to fix widget width and make it responsive
    const style = document.createElement("style");
    style.id = "simplybook-custom-styles";
    style.innerHTML = `
      #sbw_sxnuk6 {
        width: 100% !important;
        max-width: 100% !important;
      }
      
      #sbw_sxnuk6 iframe {
        width: 100% !important;
        min-height: 650px !important;
        border: none !important;
      }
      
      @media (max-width: 768px) {
        #sbw_sxnuk6 iframe {
          min-height: 700px !important;
        }
      }
      
      @media (max-width: 640px) {
        #sbw_sxnuk6 iframe {
          min-height: 750px !important;
        }
      }
      
      /* Fix for any potential overlay issues */
      .simplybook-widget-container {
        width: 100% !important;
        max-width: 100% !important;
        overflow: visible !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const customStyle = document.getElementById("simplybook-custom-styles");
      if (customStyle) {
        customStyle.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full flex-col items-center">
        <div className="w-full" id="sbw_sxnuk6"></div>
        <Script
          id="simplybook-widget"
          src="//widget.simplybook.it/v2/widget/widget.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== "undefined" && window.SimplybookWidget) {
              new window.SimplybookWidget({
                widget_type: "iframe",
                url: "https://laylarestaurant.simplybook.me",
                theme: "clean",
                theme_settings: {
                  timeline_show_end_time: "0",
                  timeline_modern_display: "as_slots",
                  hide_company_label: "1",
                  timeline_hide_unavailable: "1",
                  hide_past_days: "0",
                  sb_base_color: "#cb8d75",
                  btn_color_1: "#f8ad31,#fc591e,#fc591e",
                  link_color: "#cb8d75",
                  display_item_mode: "block",
                  body_bg_color: "#ffffff",
                  sb_review_image: "",
                  dark_font_color: "#403733",
                  light_font_color: "#ffffff",
                  sb_company_label_color: "#ffffff",
                  hide_img_mode: "1",
                  sb_busy: "#c7b3b3",
                  sb_available: "#2b212b",
                },
                timeline: "modern",
                datepicker: "top_calendar",
                is_rtl: false,
                app_config: {
                  clear_session: 0,
                  allow_switch_to_ada: 0,
                  predefined: [],
                },
                container_id: "sbw_sxnuk6",
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default TableBookingV2;
