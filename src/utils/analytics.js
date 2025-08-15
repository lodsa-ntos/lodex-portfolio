// Google Analytics tracking utilities
export const trackEvent = (eventName, eventParameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      custom_parameter: 'lodex_studio_interaction',
      page_location: window.location.href,
      page_title: document.title,
      ...eventParameters
    });
  }
};

// Enhanced tracking events
export const trackProjectView = (projectName) => {
  trackEvent('project_view', {
    project_name: projectName,
    content_group1: 'portfolio',
    custom_parameter_1: 'project_interaction'
  });
};

export const trackContactFormSubmit = (formType = 'contact') => {
  trackEvent('form_submit', {
    form_type: formType,
    content_group1: 'conversion',
    custom_parameter_1: 'lead_generation'
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    service_name: serviceName,
    content_group1: 'services',
    custom_parameter_1: 'service_interest'
  });
};

export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    content_group1: 'downloads',
    custom_parameter_1: 'resource_access'
  });
};

export const trackExternalLink = (linkUrl, linkText) => {
  trackEvent('click', {
    link_url: linkUrl,
    link_text: linkText,
    content_group1: 'external_links',
    custom_parameter_1: 'outbound_click'
  });
};

export const trackBlogRead = (articleTitle) => {
  trackEvent('blog_read', {
    article_title: articleTitle,
    content_group1: 'blog',
    custom_parameter_1: 'content_engagement'
  });
};

export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm,
    content_group1: 'search',
    custom_parameter_1: 'user_intent'
  });
};

// Page view tracking
export const trackPageView = (pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-FQC5CTZLVH', {
      page_title: pageTitle,
      page_location: window.location.href,
      custom_parameter_1: 'lodex_studio_page_view'
    });
  }
};

// E-commerce tracking (for future use)
export const trackPurchase = (transactionId, value, items = []) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'EUR',
    items: items
  });
};

// User engagement tracking
export const trackEngagement = (engagementType, duration = null) => {
  trackEvent('user_engagement', {
    engagement_time_msec: duration,
    engagement_type: engagementType,
    content_group1: 'engagement',
    custom_parameter_1: 'user_behavior'
  });
};

// Social sharing tracking
export const trackSocialShare = (platform, contentUrl, contentTitle) => {
  trackEvent('share', {
    method: platform,
    content_type: 'website',
    item_id: contentUrl,
    content_title: contentTitle,
    custom_parameter_1: 'social_engagement'
  });
};

// Error tracking
export const trackError = (errorMessage, errorLocation) => {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    error_location: errorLocation,
    custom_parameter_1: 'error_monitoring'
  });
};

export default {
  trackEvent,
  trackProjectView,
  trackContactFormSubmit,
  trackServiceView,
  trackDownload,
  trackExternalLink,
  trackBlogRead,
  trackSearch,
  trackPageView,
  trackPurchase,
  trackEngagement,
  trackSocialShare,
  trackError
};
