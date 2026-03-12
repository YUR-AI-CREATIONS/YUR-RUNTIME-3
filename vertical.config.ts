import { VerticalConfig } from '../vertical.config';

const staticRuntime: VerticalConfig = {
  id: 'yur-static-assets',
  name: 'YUR Static Assets',
  tagline: 'Fast Delivery — Cached, Compressed, Global',
  icon: '📄',
  primaryColor: '#1565C0',
  accentColor: '#ECEFF1',
  bgGradient: 'linear-gradient(135deg, #FAFAFA 0%, #1565C0 50%, #ECEFF1 100%)',
  systemInstruction: `You are YUR Static Assets, the content delivery runtime of the YUR ecosystem. You serve static files (HTML, CSS, JS, images, fonts, PDFs) with aggressive caching, Brotli/gzip compression, and CDN distribution. You manage cache invalidation, asset versioning with content hashing, and ensure sub-100ms TTFB globally. You optimize images to WebP/AVIF, tree-shake unused CSS/JS, and maintain asset manifests for cache-busted deployments.`,
  complianceStandards: [
    'Web Content Accessibility Guidelines (WCAG 2.1)',
    'HTTP Caching Standards (RFC 7234)',
    'Content Security Policy (CSP) Headers',
    'Subresource Integrity (SRI)',
    'Core Web Vitals Performance Standards'
  ],
  agents: [
    {
      name: 'CDN_OPTIMIZER',
      role: 'Global Distribution & Edge Cache Agent',
      systemPrompt: 'You manage CDN edge nodes — configuring cache TTLs per asset type, implementing cache invalidation strategies (purge, stale-while-revalidate, surrogate keys), monitoring cache hit ratios across regions, and optimizing geographic distribution to minimize latency. Manage edge functions for dynamic content at the edge.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 4096
    },
    {
      name: 'CACHE_MANAGER',
      role: 'Cache Strategy & Invalidation Agent',
      systemPrompt: 'You design caching strategies — setting Cache-Control headers, implementing service worker caches, managing stale-while-revalidate patterns, and coordinating cache invalidation across CDN, browser, and application layers. Prevent cache poisoning, handle cache stampedes, and optimize cache key design for maximum hit rates.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 4096
    },
    {
      name: 'ASSET_COMPILER',
      role: 'Build Pipeline & Asset Processing Agent',
      systemPrompt: 'You process static assets through build pipelines — bundling JavaScript with tree shaking, compiling SCSS to CSS with autoprefixing, generating responsive image sets, and producing source maps. Manage build caching for incremental builds and ensure deterministic output hashes for reliable cache busting.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 4096
    },
    {
      name: 'COMPRESSION_ENGINE',
      role: 'Compression & Performance Optimization Agent',
      systemPrompt: 'You optimize asset delivery through compression — applying Brotli and gzip at optimal quality levels per content type, converting images to modern formats (WebP, AVIF), implementing lazy loading strategies, and minifying HTML/CSS/JS. Balance compression ratio against decompression speed for different network conditions.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 4096
    }
  ],
  dataSources: [
    {
      name: 'Asset Manifest',
      type: 'file',
      description: 'Asset version manifest — logical names to content-hashed filenames, sizes, and compression ratios'
    },
    {
      name: 'CDN Analytics',
      type: 'api',
      description: 'Edge node metrics — cache hit rates, bandwidth, request counts, and geographic distribution'
    },
    {
      name: 'Performance Metrics',
      type: 'realtime',
      description: 'Core Web Vitals from real user monitoring — LCP, FID, CLS, TTFB per page and region'
    }
  ],
  outputFormats: [
    'CDN Performance Dashboards',
    'Asset Optimization Reports',
    'Cache Hit Rate Analytics',
    'Core Web Vitals Reports',
    'Asset Manifest Files',
    'Bandwidth Usage Summaries',
    'Compression Ratio Reports'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: false,
    governance: false,
    stripe: false
  }
};

export default staticRuntime;
