import { track } from "@vercel/analytics";

// Custom event tracking functions for user interactions
export const analytics = {
  // Page view tracking
  trackPageView: (page: string) => {
    track("page_view", { page });
  },

  // Authentication events
  trackLogin: (method: "google" | "microsoft" | "linkedin" | "email") => {
    track("user_login", { method });
  },

  trackSignup: (method: "google" | "microsoft" | "linkedin" | "email") => {
    track("user_signup", { method });
  },

  trackLogout: () => {
    track("user_logout");
  },

  trackSocialLoginAttempt: (provider: string) => {
    track("social_login_attempt", { provider });
  },

  trackSocialLoginSuccess: (provider: string) => {
    track("social_login_success", { provider });
  },

  trackSocialLoginError: (provider: string, error: string) => {
    track("social_login_error", { provider, error });
  },

  // Form submissions
  trackContactFormSubmit: () => {
    track("contact_form_submit");
  },

  trackLeadFormSubmit: () => {
    track("lead_form_submit");
  },

  // Button clicks
  trackButtonClick: (buttonName: string, location: string) => {
    track("button_click", { button: buttonName, location });
  },

  // CTA clicks
  trackCTAClick: (ctaName: string) => {
    track("cta_click", { cta: ctaName });
  },

  // Navigation
  trackNavigation: (from: string, to: string) => {
    track("navigation", { from, to });
  },

  // Content interactions
  trackServiceView: (serviceName: string) => {
    track("service_view", { service: serviceName });
  },

  trackCaseStudyView: (client: string) => {
    track("case_study_view", { client });
  },

  trackBlogArticleClick: (articleTitle: string) => {
    track("blog_article_click", { article: articleTitle });
  },

  // Profile interactions
  trackProfileMenuOpen: () => {
    track("profile_menu_open");
  },

  // Error tracking
  trackError: (errorType: string, errorMessage: string) => {
    track("error", { type: errorType, message: errorMessage });
  },
};
