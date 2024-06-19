'use client'
import React from "react";
import {GoogleAnalytics} from "nextjs-google-analytics";

/**
 * @name GoogleAnalyticsProvider
 * @description Renders the Google Analytics as a client component
 */
export const GoogleAnalyticsProvider = () => <GoogleAnalytics trackPageViews />