import React, { useState } from 'react';
import ModuleComponent from './components/ModuleComponent';
import AppCanvas from './components/AppCanvas';
import CarbonDashboard from './components/CarbonDashboard';
import OptimizationTips from './components/OptimizationTips';

const sampleModules = [
  // Layout Components
  {
    id: 'container',
    name: 'Container',
    category: 'Layout',
    icon: () => <i className="fas fa-box text-green-600 text-3xl"></i>,
    impactScore: 1.0,
  },
  {
    id: 'grid',
    name: 'Grid',
    category: 'Layout',
    icon: () => <i className="fas fa-th-large text-green-600 text-3xl"></i>,
    impactScore: 1.2,
  },
  {
    id: 'section',
    name: 'Section',
    category: 'Layout',
    icon: () => <i className="fas fa-layer-group text-green-600 text-3xl"></i>,
    impactScore: 1.1,
  },
  {
    id: 'row',
    name: 'Row',
    category: 'Layout',
    icon: () => <i className="fas fa-arrows-alt-h text-green-600 text-3xl"></i>,
    impactScore: 1.0,
  },
  {
    id: 'column',
    name: 'Column',
    category: 'Layout',
    icon: () => <i className="fas fa-arrows-alt-v text-green-600 text-3xl"></i>,
    impactScore: 1.0,
  },

  // Interactive Components
  {
    id: 'button',
    name: 'Button',
    category: 'Interactive',
    icon: () => <i className="fas fa-hand-pointer text-green-600 text-3xl"></i>,
    impactScore: 1.5,
  },
  {
    id: 'link',
    name: 'Link',
    category: 'Interactive',
    icon: () => <i className="fas fa-link text-green-600 text-3xl"></i>,
    impactScore: 1.2,
  },
  {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    category: 'Interactive',
    icon: () => <i className="fas fa-caret-square-down text-green-600 text-3xl"></i>,
    impactScore: 1.4,
  },
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    category: 'Interactive',
    icon: () => <i className="fas fa-toggle-on text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },
  {
    id: 'slider',
    name: 'Slider',
    category: 'Interactive',
    icon: () => <i className="fas fa-sliders-h text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },

  // Data Display Components
  {
    id: 'table',
    name: 'Table',
    category: 'Data Display',
    icon: () => <i className="fas fa-table text-green-600 text-3xl"></i>,
    impactScore: 2.0,
  },
  {
    id: 'list',
    name: 'List',
    category: 'Data Display',
    icon: () => <i className="fas fa-list text-green-600 text-3xl"></i>,
    impactScore: 1.5,
  },
  {
    id: 'chart',
    name: 'Chart',
    category: 'Data Display',
    icon: () => <i className="fas fa-chart-bar text-green-600 text-3xl"></i>,
    impactScore: 2.5,
  },
  {
    id: 'card',
    name: 'Card',
    category: 'Data Display',
    icon: () => <i className="fas fa-id-card text-green-600 text-3xl"></i>,
    impactScore: 1.4,
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Data Display',
    icon: () => <i className="fas fa-certificate text-green-600 text-3xl"></i>,
    impactScore: 1.1,
  },

  // Media Components
  {
    id: 'image',
    name: 'Image',
    category: 'Media',
    icon: () => <i className="fas fa-image text-green-600 text-3xl"></i>,
    impactScore: 2.0,
  },
  {
    id: 'video-player',
    name: 'Video Player',
    category: 'Media',
    icon: () => <i className="fas fa-video text-green-600 text-3xl"></i>,
    impactScore: 3.0,
  },
  {
    id: 'audio-player',
    name: 'Audio Player',
    category: 'Media',
    icon: () => <i className="fas fa-music text-green-600 text-3xl"></i>,
    impactScore: 2.5,
  },
  {
    id: 'carousel',
    name: 'Carousel',
    category: 'Media',
    icon: () => <i className="fas fa-images text-green-600 text-3xl"></i>,
    impactScore: 2.8,
  },
  {
    id: 'gallery',
    name: 'Gallery',
    category: 'Media',
    icon: () => <i className="fas fa-th text-green-600 text-3xl"></i>,
    impactScore: 2.2,
  },

  // Form Components
  {
    id: 'text-input',
    name: 'Text Input',
    category: 'Form',
    icon: () => <i className="fas fa-keyboard text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },
  {
    id: 'text-area',
    name: 'Text Area',
    category: 'Form',
    icon: () => <i className="fas fa-align-left text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Form',
    icon: () => <i className="fas fa-check-square text-green-600 text-3xl"></i>,
    impactScore: 1.1,
  },
  {
    id: 'radio-button',
    name: 'Radio Button',
    category: 'Form',
    icon: () => <i className="fas fa-dot-circle text-green-600 text-3xl"></i>,
    impactScore: 1.1,
  },
  {
    id: 'select-dropdown',
    name: 'Select Dropdown',
    category: 'Form',
    icon: () => <i className="fas fa-caret-down text-green-600 text-3xl"></i>,
    impactScore: 1.2,
  },
  {
    id: 'file-upload',
    name: 'File Upload',
    category: 'Form',
    icon: () => <i className="fas fa-upload text-green-600 text-3xl"></i>,
    impactScore: 1.5,
  },
  {
    id: 'form',
    name: 'Form',
    category: 'Form',
    icon: () => <i className="fas fa-file-alt text-green-600 text-3xl"></i>,
    impactScore: 1.4,
  },
  {
    id: 'submit-button',
    name: 'Submit Button',
    category: 'Form',
    icon: () => <i className="fas fa-paper-plane text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },

  // AI Components
  {
    id: 'chatbot',
    name: 'Chatbot',
    category: 'AI',
    icon: () => <i className="fas fa-robot text-green-600 text-3xl"></i>,
    impactScore: 2.1,
  },
  {
    id: 'recommendation-engine',
    name: 'Recommendation Engine',
    category: 'AI',
    icon: () => <i className="fas fa-lightbulb text-green-600 text-3xl"></i>,
    impactScore: 2.5,
  },
  {
    id: 'sentiment-analyzer',
    name: 'Sentiment Analyzer',
    category: 'AI',
    icon: () => <i className="fas fa-smile text-green-600 text-3xl"></i>,
    impactScore: 2.3,
  },
  {
    id: 'image-recognizer',
    name: 'Image Recognizer',
    category: 'AI',
    icon: () => <i className="fas fa-camera text-green-600 text-3xl"></i>,
    impactScore: 2.7,
  },
  {
    id: 'nlp-toolkit',
    name: 'NLP Toolkit',
    category: 'AI',
    icon: () => <i className="fas fa-language text-green-600 text-3xl"></i>,
    impactScore: 2.4,
  },

  // Sustainability Components
  {
    id: 'carbon-footprint-display',
    name: 'Carbon Footprint Display',
    category: 'Sustainability',
    icon: () => <i className="fas fa-leaf text-green-600 text-3xl"></i>,
    impactScore: 1.8,
  },
  {
    id: 'energy-usage-monitor',
    name: 'Energy Usage Monitor',
    category: 'Sustainability',
    icon: () => <i className="fas fa-bolt text-green-600 text-3xl"></i>,
    impactScore: 1.9,
  },
  {
    id: 'sustainability-optimizer',
    name: 'Sustainability Optimizer',
    category: 'Sustainability',
    icon: () => <i className="fas fa-seedling text-green-600 text-3xl"></i>,
    impactScore: 2.0,
  },

  // Integration Components
  {
    id: 'api-connector',
    name: 'API Connector',
    category: 'Integration',
    icon: () => <i className="fas fa-plug text-green-600 text-3xl"></i>,
    impactScore: 1.7,
  },
  {
    id: 'database-integrator',
    name: 'Database Integrator',
    category: 'Integration',
    icon: () => <i className="fas fa-database text-green-600 text-3xl"></i>,
    impactScore: 1.8,
  },
  {
    id: 'third-party-service-connector',
    name: 'Third-Party Service Connector',
    category: 'Integration',
    icon: () => <i className="fas fa-cogs text-green-600 text-3xl"></i>,
    impactScore: 1.9,
  },

  // Authentication Components
  {
    id: 'login-form',
    name: 'Login Form',
    category: 'Authentication',
    icon: () => <i className="fas fa-sign-in-alt text-green-600 text-3xl"></i>,
    impactScore: 1.6,
  },
  {
    id: 'registration-form',
    name: 'Registration Form',
    category: 'Authentication',
    icon: () => <i className="fas fa-user-plus text-green-600 text-3xl"></i>,
    impactScore: 1.7,
  },
  {
    id: 'password-reset',
    name: 'Password Reset',
    category: 'Authentication',
    icon: () => <i className="fas fa-key text-green-600 text-3xl"></i>,
    impactScore: 1.5,
  },
  {
    id: 'user-profile',
    name: 'User Profile',
    category: 'Authentication',
    icon: () => <i className="fas fa-user text-green-600 text-3xl"></i>,
    impactScore: 1.6,
  },

  // Responsive Design Components
  {
    id: 'responsive-grid',
    name: 'Responsive Grid',
    category: 'Responsive Design',
    icon: () => <i className="fas fa-th-large text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },
  {
    id: 'mobile-navigation-menu',
    name: 'Mobile Navigation Menu',
    category: 'Responsive Design',
    icon: () => <i className="fas fa-bars text-green-600 text-3xl"></i>,
    impactScore: 1.4,
  },
  {
    id: 'viewport-conditional-rendering',
    name: 'Viewport-Based Conditional Rendering',
    category: 'Responsive Design',
    icon: () => <i className="fas fa-mobile-alt text-green-600 text-3xl"></i>,
    impactScore: 1.5,
  },

  // User Experience Components
  {
    id: 'modal',
    name: 'Modal',
    category: 'User Experience',
    icon: () => <i className="fas fa-window-maximize text-green-600 text-3xl"></i>,
    impactScore: 1.4,
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'User Experience',
    icon: () => <i className="fas fa-info-circle text-green-600 text-3xl"></i>,
    impactScore: 1.1,
  },
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'User Experience',
    icon: () => <i className="fas fa-compress text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },
  {
    id: 'tab',
    name: 'Tab',
    category: 'User Experience',
    icon: () => <i className="fas fa-folder-open text-green-600 text-3xl"></i>,
    impactScore: 1.2,
  },
  {
    id: 'progress-bar',
    name: 'Progress Bar',
    category: 'User Experience',
    icon: () => <i className="fas fa-tasks text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },

  // E-commerce Components
  {
    id: 'product-display',
    name: 'Product Display',
    category: 'E-commerce',
    icon: () => <i className="fas fa-box-open text-green-600 text-3xl"></i>,
    impactScore: 2.0,
  },
  {
    id: 'shopping-cart',
    name: 'Shopping Cart',
    category: 'E-commerce',
    icon: () => <i className="fas fa-shopping-cart text-green-600 text-3xl"></i>,
    impactScore: 2.2,
  },
  {
    id: 'checkout-form',
    name: 'Checkout Form',
    category: 'E-commerce',
    icon: () => <i className="fas fa-credit-card text-green-600 text-3xl"></i>,
    impactScore: 1.8,
  },
  {
    id: 'payment-gateway-integration',
    name: 'Payment Gateway Integration',
    category: 'E-commerce',
    icon: () => <i className="fas fa-money-check-alt text-green-600 text-3xl"></i>,
    impactScore: 2.1,
  },

  // Miscellaneous Components
  {
    id: 'map',
    name: 'Map',
    category: 'Miscellaneous',
    icon: () => <i className="fas fa-map-marker-alt text-green-600 text-3xl"></i>,
    impactScore: 2.0,
  },
  {
    id: 'calendar',
    name: 'Calendar',
    category: 'Miscellaneous',
    icon: () => <i className="fas fa-calendar-alt text-green-600 text-3xl"></i>,
    impactScore: 1.7,
  },
  {
    id: 'search-bar',
    name: 'Search Bar',
    category: 'Miscellaneous',
    icon: () => <i className="fas fa-search text-green-600 text-3xl"></i>,
    impactScore: 1.3,
  },
  {
    id: 'notification-badge',
    name: 'Notification Badge',
    category: 'Miscellaneous',
    icon: () => <i className="fas fa-bell text-green-600 text-3xl"></i>,
    impactScore: 1.2,
  },
  {
    id: 'social-media-share-buttons',
    name: 'Social Media Share Buttons',
    category: 'Miscellaneous',
    icon: () => <i className="fas fa-share-alt text-green-600 text-3xl"></i>,
    impactScore: 1.4,
  },
];

const App = () => {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [appStats, setAppStats] = useState({
    energy: { js: 30, network: 40, rendering: 30 },
    metrics: { loadTime: 2.5, energy: 50 },
    benchmarks: { loadTime: 3.0, energy: 60 },
    optimizations: [
      { title: 'Compress Images', detail: 'Save 200KB by using WebP', impact: '15% load time reduction' },
      { title: 'Tree Shaking', detail: 'Remove 30KB unused JS', impact: '10% processing energy reduction' },
    ],
  });

  const handleConfigure = (module) => {
    setSelectedModule(module);
    // For now, just alert or open a modal (not implemented)
    alert(`Configure module: ${module.name}`);
  };

  const handleDrop = (moduleId) => {
    const moduleToAdd = sampleModules.find(m => m.id === moduleId);
    if (moduleToAdd) {
      setModules(prev => [...prev, moduleToAdd]);
    }
  };

  return (
    <div className="min-h-screen bg-ecoGreen-light p-6">
      <h1 className="text-4xl font-bold mb-6 text-ecoGreen-dark">EcoPWA Builder</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold mb-4">Module Library</h2>
          <div className="space-y-4">
            {sampleModules.map(module => (
              <ModuleComponent key={module.id} module={module} onConfigure={handleConfigure} />
            ))}
          </div>
          <AppCanvas modules={modules} onDrop={handleDrop} />
        </div>
        <div className="md:w-1/2 bg-white rounded-lg shadow p-4">
          <CarbonDashboard appStats={appStats} />
          <OptimizationTips tips={appStats.optimizations} />
        </div>
      </div>
    </div>
  );
};

export default App;
